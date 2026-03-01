# System Map — Build Specification

> This is the invariant build spec. It never changes between projects.
> Pair with a `data.ts` file containing your specific infrastructure.

## Install

```bash
npm install @xyflow/react html-to-image
```

## Architecture (7 files)

Create under `app/map/`:

| File | Purpose |
|------|---------|
| `types.ts` | TypeScript interfaces for config + output types |
| `mapData.ts` | Pure function: config → positioned React Flow graph |
| `actions.ts` | Server action: imports data.ts config, calls buildMapGraph |
| `CustomNodes.tsx` | Three custom node components: RootNode, BranchNode, LeafNode |
| `MapClient.tsx` | Client component: canvas, detail panel, edge highlighting |
| `MapPageClient.tsx` | Client wrapper: dynamic import (no SSR) |
| `page.tsx` | Server component entry point |

Also create `lib/mapConfig.ts` — this imports the data file. Separated so swapping data sources (file → database) only changes one import.

## Data Model

### Node Types
- **root** (1): Central hub. Project/org name.
- **branch** (N): Top-level categories radiating from root.
- **leaf** (many): Individual items under each branch.

### Node Fields
```typescript
interface MapNodeConfig {
  id: string;
  branch: string;          // which branch this belongs to
  nodeType: "root" | "branch" | "leaf";
  parentId: string | null;
  title: string;
  shortDesc: string;       // ≤80 chars, shown inline on node
  description: string;     // full description, shown in detail panel
  icon: string;            // emoji
  fields?: string[];       // optional tag pills
  editableIn?: string;     // optional link
  visibility?: string;
  sortIndex: number;
}
```

### Edge Types
- **Tree edges** (auto-generated): root→branch, branch→leaf. Animated dashed lines in branch color.
- **Cross-branch edges** (manual): Connections between nodes in different branches.

```typescript
interface MapEdgeConfig {
  source: string;          // node id
  target: string;          // node id
  relationship: string;    // e.g. "reads", "feeds", "powers"
  shortDesc: string;       // ≤50 chars, shown on hover/highlight
  description: string;     // full description, shown in connection panel
}
```

### Branch Config
```typescript
interface BranchConfig {
  id: string;
  color: string;           // hex color
  angle: number;           // radians, position around root
}
```

## Layout Algorithm

- Root at center (0, 0)
- Branches at `BRANCH_RADIUS = 500px` from root, positioned by their `angle` value
- Leaves fan out perpendicular to branch direction:
  - `CHILD_SPACING_X = 280px` outward from branch
  - `CHILD_SPACING_Y = 95px` between siblings
  - Vertically centered around branch position
- Each branch's color is used for tree edge stroke and node background tint

## Validation

`buildMapGraph()` MUST validate before building:
1. All edge `source` and `target` IDs exist in the node list
2. All leaf nodes have a valid `parentId` pointing to a branch node
3. All branch nodes have `parentId` pointing to root
4. No duplicate node IDs
5. Throw descriptive errors with the bad ID and context (e.g., "Edge references unknown target 'foobar'. Available nodes: [...]")

## Interaction Features

### 1. Node Click → Detail Panel
Right-side panel slides in showing:
- Icon + title + branch badge (colored pill)
- Full `description`
- `fields` as pills
- `editableIn` link (if present)
- **Connections section:** Lists every cross-branch edge involving this node. Each shows:
  - Connected node's icon + title
  - Relationship badge with arrow (→ outgoing, ← incoming)
  - `shortDesc`
  - Clickable — navigates panel to that node

### 2. Edge Click → Connection Panel
- Source node card → relationship badge → target node card
- Full `description`
- Clicked edge highlights amber (#f59e0b); all others dim to 0.1 opacity
- Both endpoint nodes get amber glow (box-shadow)

### 3. Branch Collapse/Expand
- Toggle button on branch nodes (chevron + child count badge)
- Hides/shows all children and their edges
- Collapsed state persists during session

### 4. Controls
- React Flow built-in controls (bottom-left)
- MiniMap (bottom-right)
- **Fit View button** — frames all visible nodes
- **Screenshot button** — uses html-to-image to capture canvas as PNG download

### 5. Mobile (≤768px)
- Hide React Flow canvas entirely
- Show a collapsible tree list instead:
  - Root title at top
  - Branches as expandable sections
  - Leaves as list items with icon + title + shortDesc
  - Tap leaf → expand to show full description + connections

## Dark Theme Styling

```
Canvas background:  #0f1117
Background dots:    #1f2937, gap 24, size 1
Panels:             bg-gray-900/95 backdrop-blur-md border-l border-gray-800
Node backgrounds:   branch color at 10-15% opacity, 1px border at 30% opacity
Text:               white titles, gray-400 descriptions, gray-500 labels
Highlighted nodes:  #f59e0b glow (0 0 12px)
Controls:           bg-[#1f2937] border-[#374151], hover #374151
Edge (tree):        branch color, width 2, animated dash (strokeDasharray: "6 4")
Edge (cross):       #6b7280, width 2.5, opacity 0.3 (0.8 when highlighted)
```

## Implementation Notes

- `actions.ts`: Server action imports config from `lib/mapConfig.ts`, passes to `buildMapGraph()`. No database needed — config is code. To migrate to database later, only change `mapConfig.ts`.
- `buildMapGraph()`: Pure function. Returns `{ nodes: Node[], edges: Edge[], nodeMeta: Map, edgeMeta: Map, branchChildren: Map }`.
- `CustomNodes.tsx`: Three memo'd components. All have handles on all 4 sides (both source + target) for flexible edge routing. RootNode is large (bold text, project icon). BranchNode has collapse toggle with child count. LeafNode is compact with truncated `shortDesc`.
- `MapPageClient.tsx`: `dynamic(() => import("./MapClient"), { ssr: false })` — React Flow is client-only.
- `page.tsx`: Server component that calls server action, passes data to MapPageClient.
- Detail panel's Connections section filters edges where selected node is source or target, skipping tree edges (those without edgeMeta entries).

## Post-Build

After generating all files, run `npm run build`. Fix any TypeScript or build errors until clean. Then run through `smoke-test.md`.
