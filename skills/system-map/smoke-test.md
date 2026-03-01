# System Map — Smoke Test Checklist

Run after `npm run build` passes clean.

## Build
- [ ] `npm run build` exits with code 0
- [ ] No TypeScript errors
- [ ] No React hydration warnings in browser console

## Layout
- [ ] Root node visible at center
- [ ] All branches positioned radially (not stacked)
- [ ] Leaf nodes fan out from their parent branch
- [ ] No overlapping nodes
- [ ] Branch colors are distinct and visible

## Node Interaction
- [ ] Click a leaf node → detail panel slides in from right
- [ ] Panel shows: icon, title, description, branch badge
- [ ] Panel shows fields as pills (if node has fields)
- [ ] Panel shows Connections section with related edges
- [ ] Click a connection → panel navigates to that node
- [ ] Click root node → panel shows root details

## Edge Interaction
- [ ] Click a cross-branch edge → connection panel appears
- [ ] Clicked edge turns amber
- [ ] All other edges dim to low opacity
- [ ] Both endpoint nodes get amber glow
- [ ] Click canvas background → edge deselects, opacity restores

## Branch Collapse
- [ ] Click branch toggle → children hide
- [ ] Child edges also hide
- [ ] Click again → children reappear
- [ ] Child count badge shows correct number

## Controls
- [ ] Zoom in/out buttons work (bottom-left)
- [ ] MiniMap visible (bottom-right)
- [ ] Fit View button frames all nodes
- [ ] Screenshot button downloads PNG (if html-to-image installed)

## Mobile (≤768px viewport)
- [ ] React Flow canvas is hidden
- [ ] Tree list view renders instead
- [ ] Branches are expandable sections
- [ ] Tap leaf shows description

## Validation
- [ ] If you add a bad edge (nonexistent node ID), build/runtime throws a descriptive error
- [ ] Error message includes the bad ID and lists available nodes
