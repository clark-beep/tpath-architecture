# Interactive System Map — Build Prompt

> Hand this to Claude Code (or any AI coding assistant) in a Next.js + Tailwind project.
> It will generate a full interactive mind-map page showing your entire infrastructure.
> You just fill in the YOUR SYSTEM section below with your own stuff.

---

## Prompt

Build an interactive system map page at /map in my Next.js (App Router) + Tailwind CSS project.

This is a mind-map style visualization of my entire infrastructure — every service, database, tool, and page I run — rendered with @xyflow/react (React Flow).

### Install dependency

npm install @xyflow/react

### Architecture (7 files)

Create these files under app/map/:

| File | Purpose |
|------|---------| 
| types.ts | TypeScript interfaces for config + output types |
| mapData.ts | Pure function: takes config nodes/edges, outputs positioned React Flow graph |
| actions.ts | Server action: assembles all nodes + edges from hardcoded config |
| CustomNodes.tsx | Three custom React Flow node components: RootNode, BranchNode, LeafNode |
| MapClient.tsx | Client component: React Flow canvas, detail panel, edge highlighting |
| MapPageClient.tsx | Client wrapper that dynamically imports MapClient (no SSR) |
| page.tsx | Server component entry point |

---

### Data model

Nodes have three types:
- root (1 node) — the central hub, your project/org name
- branch (N nodes) — top-level categories radiating out from root
- leaf (many nodes) — individual items under each branch

Each node has: id, branch (which branch it belongs to), nodeType, parentId, title, description, icon (emoji), optional fields (string array), optional editableIn (link), optional visibility, and sortIndex.

Edges have two types:
- Tree edges (auto-generated): root→branch and branch→leaf. Animated dashed lines colored by branch.
- Cross-branch edges (manually defined): connections between nodes in different branches (e.g., a dashboard page that reads from a database table). These have a relationship label (e.g., "reads + writes", "feeds", "calls") and a description.

---

### Layout algorithm

- Root node at center (0, 0)
- Branches positioned radially at BRANCH_RADIUS = 500 px from root
- If all branches have hand-tuned angles in KNOWN_BRANCH_ANGLES, use those. Otherwise distribute evenly: angle = offset + i * (2π / branchCount).
- Leaf nodes fan out from their parent branch, perpendicular to the branch direction, spaced CHILD_SPACING_X = 280 px outward and CHILD_SPACING_Y = 95 px apart, vertically centered. Assign each branch a distinct color. Use these as the stroke color for tree edges and the tinted background for nodes on that branch.

---

### Interaction features

1. Click a node → right-side detail panel slides in showing: icon, title, description, fields (as pills), "editable in" link, branch badge, and a Connections section listing every cross-branch edge involving this node with the other node's icon/title, relationship badge (with → outgoing or ← incoming arrow), and description. Each connection is clickable and navigates the panel to that node.

2. Click an edge → connection panel shows source node card, relationship badge, target node card, and description. The clicked edge highlights amber; all other edges dim. Both endpoint nodes get an amber glow.

3. Branch collapse/expand → toggle button on branch nodes hides/shows all children and their edges.

4. Zoom/pan → React Flow built-in controls (bottom-left) + MiniMap (bottom-right).

---

### Dark theme styling

- Canvas background: #0f1117
- Background dots: #1f2937, gap 24, size 1
- Panels: bg-gray-900/95 backdrop-blur-md border-l border-gray-800
- Node backgrounds: branch color at 10-15% opacity with matching border
- Text: white titles, gray-400 descriptions, gray-500 labels
- Highlighted nodes: amber glow (`#f59e0b` with box-shadow)
- Controls: bg-[#1f2937] with border-[#374151], hover to #374151

---

### ========================
### YOUR SYSTEM — FILL THIS IN
### ========================

Replace everything below with your actual infrastructure. I've provided a template structure. Add/remove branches and leaves as needed. Be specific in descriptions — say what data each thing provides, not just its name.

Root node:
- Title: "My Project Name"
- Description: "One-sentence description of what this system does."
- Icon: 🏛️

Branches (top-level categories — aim for 3-8):

Branch: database
  Title: "Supabase" (or Postgres, Firebase, etc.)
  Icon: 🗄️
  Color: "#3b82f6" (blue)
  Leaves:
  - id: "users", title: "users", desc: "User accounts — email, role, settings.", icon: "👤"
  - id: "orders", title: "orders", desc: "Customer orders — items, totals, status.", icon: "📦"
  - ...add your tables

Branch: services
  Title: "Services"
  Icon: 🔧
  Color: "#f97316" (orange)
  Leaves:
  - id: "openclaw", title: "OpenClaw Gateway", desc: "AI gateway — /v1/chat/completions for LLM routing, /tools/invoke for cron jobs.", icon: "🤖"
  - id: "stripe", title: "Stripe", desc: "Payment processing — subscriptions, invoices, webhooks.", icon: "💳"
  - id: "github", title: "GitHub", desc: "Source control — repos, CI/CD, deployments.", icon: "🐙"
  - ...add your services

Branch: frontend
  Title: "Frontend Pages"
  Icon: 🖥️
  Color: "#a855f7" (purple)
  Leaves:
  - id: "page_dashboard", title: "/dashboard", desc: "Main dashboard — metrics, charts, activity feed.", icon: "📊"
  - id: "page_settings", title: "/settings", desc: "User settings — profile, preferences, API keys.", icon: "⚙️"
  - ...add your pages

Branch: data-sources
  Title: "Data Sources"
  Icon: 🔌
  Color: "#64748b" (slate)
  Leaves:
  - id: "some_api", title: "Some External API", desc: "What specific data — prices, weather, social feeds, etc.", icon: "📡"
  - ...add your data sources

Branch: infra
  Title: "Infrastructure"
  Icon: ☁️
  Color: "#22c55e" (green)
  Leaves:
  - id: "vercel", title: "Vercel", desc: "Hosting — Next.js deployment, edge functions, analytics.", icon: "▲"
  - id: "redis", title: "Redis", desc: "Cache layer — session storage, rate limiting, pub/sub.", icon: "🔴"
  - ...add your infra

Cross-branch edges (connections between nodes in different branches):

Edges:
- source: "page_dashboard", target: "orders", relationship: "reads", desc: "Dashboard displays recent orders and revenue metrics."
- source: "page_dashboard", target: "openclaw", relationship: "streams from", desc: "Dashboard streams AI-generated insights from OpenClaw."
- source: "some_api", target: "orders", relationship: "feeds", desc: "External API webhooks create new orders."
- source: "stripe", target: "orders", relationship: "updates", desc: "Stripe webhooks update order payment status."
- ...add all your data flows

### ========================
### END YOUR SYSTEM
### ========================

---

### Implementation notes

- The actions.ts server action should assemble all nodes and edges from the hardcoded config above and pass them to buildMapGraph(). No database needed — everything is defined in code. If the user later wants to move config to a database, the interface is the same MapNodeConfig[] and MapEdgeConfig[] arrays.

- buildMapGraph() in mapData.ts is a pure function. It takes the config and returns positioned React Flow Node[], Edge[], plus nodeMeta, edgeMeta, and branchChildren lookup maps.

- MapClient.tsx is the main client component. It handles all interaction: node clicks (detail panel with connections list), edge clicks (connection panel with highlights), branch collapse/expand, and zoom/pan.

- CustomNodes.tsx has three memo'd components. RootNode is large with bold text. BranchNode has a collapse toggle showing child count. LeafNode is compact with truncated labels. All have handles on all 4 sides (both source and target) for flexible edge routing.

- MapPageClient.tsx wraps MapClient in a dynamic(() => import("./MapClient"), { ssr: false }) because React Flow is client-only.

- page.tsx is a server component that calls the server action and passes data down.

- If your branch count matches KNOWN_BRANCH_ANGLES, use hand-tuned angles with 60° even spacing starting from upper-left. Otherwise the generic algorithm distributes evenly starting at -135°.

- Cross-branch edges render as static gray lines (`#6b7280`, width 2.5, opacity 0.3). Tree edges render as animated dashed lines in the branch color.

- The detail panel's Connections section filters data.edges for all edges where the selected node is source or target, skipping tree edges (those without edgeMeta entries). Each connection is a clickable button that navigates the panel to the connected node.
