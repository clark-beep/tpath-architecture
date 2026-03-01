# System Map — Interactive Infrastructure Visualization

Generate an interactive React Flow mind-map showing an entire system's infrastructure. Works for any project: SaaS apps, AI agents, personal infrastructure, company tech stacks.

## When to Use
- Visualizing system architecture for new team members
- Documenting infrastructure for audits or investors
- Understanding data flows between services
- Building interactive "how it works" pages

## How to Use

1. Copy `spec.md` into your coding agent prompt (this is the invariant build spec)
2. Create a `data.ts` file following `data-template.ts` with your actual infrastructure
3. Hand both to Claude Code / Codex in a Next.js + Tailwind project
4. It generates 7 files under `app/map/` — a complete interactive page

## Files
- `SKILL.md` — This file
- `spec.md` — Build specification (architecture, layout, interaction, styling). Never changes.
- `data-template.ts` — TypeScript template with types and example structure. Copy and fill in.
- `data-clark.ts` — Pre-filled example: Clark's agent infrastructure
- `smoke-test.md` — Post-build verification checklist

## Output
- `/map` page with dark-theme React Flow canvas
- Radial layout: root → branches → leaves
- Click nodes for detail panel with cross-branch connections
- Click edges for relationship details with amber highlighting
- Collapsible branches, zoom/pan, minimap
- Fit-to-view + screenshot export button
- Mobile: tree list fallback (React Flow is desktop-only)
- Fully typed TypeScript, server components + client components

## Dependencies
- Next.js (App Router), Tailwind CSS, @xyflow/react
- Optional: html-to-image (for screenshot export)
