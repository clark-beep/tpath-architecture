# System Map — Interactive Infrastructure Visualization

Generate an interactive React Flow mind-map showing an entire system's infrastructure. Works for any project: SaaS apps, AI agents, personal infrastructure, company tech stacks.

## When to Use
- Visualizing system architecture for new team members
- Documenting infrastructure for audits or investors
- Understanding data flows between services
- Building interactive "how it works" pages

## How to Use

1. Copy the build prompt from `build-prompt.md`
2. Fill in the YOUR SYSTEM section with actual infrastructure
3. Hand to Claude Code (or any coding assistant) in a Next.js + Tailwind project
4. It generates 7 files under `app/map/` — a complete interactive page

## Files
- `build-prompt.md` — The full prompt template with instructions
- `clark-infrastructure.md` — Pre-filled version for Clark's system (example)

## Output
- `/map` page with dark-theme React Flow canvas
- Radial layout: root → branches → leaves
- Click nodes for detail panel with cross-branch connections
- Click edges for relationship details
- Collapsible branches, zoom/pan, minimap
- Fully typed TypeScript, server components + client components

## Dependencies
- Next.js (App Router)
- Tailwind CSS
- @xyflow/react
