# WorkOS — AI Skill System Architecture

An open framework for turning general-purpose AI into domain-expert teams using markdown playbooks and JSON state.

**[Live Demo →](https://clark-beep.github.io/tpath-architecture/)**

## What is this?

Most AI agents are thin wrappers around an LLM with a 3-line system prompt. WorkOS is different.

A "skill" is a 500-1,000 line markdown playbook that gives the AI:
- **A persona** with domain expertise and behavioral rules
- **Frameworks** — mental models the AI applies to every question
- **Data paths** — JSON files it reads and writes (its own + other skills')
- **A sparring protocol** — pushback patterns so the AI challenges assumptions instead of just agreeing
- **Dual output** — every interaction produces human-readable advice AND machine-readable JSON
- **Child skills** — execution tasks it can delegate to

The result: a solo founder can operate with a virtual C-suite that actually pushes back, remembers context, and compounds intelligence over time.

## The Pattern

```
User says: /cfo "what's our burn rate?"

1. Gateway loads skills/cfo/SKILL.md (1,100 lines of finance expertise)
2. AI reads data/cfo/assumptions.json, latest_forecast.json
3. AI pulls cross-skill data (pipeline from CMO, infra costs from CTO)
4. AI applies 9 financial frameworks (burn multiple, Rule of X, etc.)
5. AI pushes back: "Your burn multiple is 3x. That's not growth, that's a cash bonfire."
6. Output: strategic advice + updated forecast JSON files
7. JSON feeds dashboards. Dashboards feed future conversations. It compounds.
```

No database. No API. Just markdown playbooks + JSON files + a really good AI.

## Skills in the Demo

The interactive visualization walks through 5 C-suite skills:

| Skill | Persona | Frameworks | Child Skills |
|-------|---------|-----------|-------------|
| **CEO** | Wartime/peacetime founder counselor | 6 (Decision Rights, Capital Allocation, Hard Conversations...) | Delegates to all C-suite + /leadership-sync |
| **CFO** | "CJ" — conversational, dad-joke-friendly, rigorous | 9 (Burn Multiple, Rule of X, Tri-Scenario...) | /finance-forecast, /cap-table, /board-deck, /fundraise-prep |
| **CMO** | Signal-obsessed GTM leader, anti-bloat | 10 (GTM Maturity, Signal-Based Selling, AI Growth...) | 11 GTM pipeline skills + /advisor-outreach |
| **CPO** | Customer-obsessed, anti-feature-factory | 13 (DHM, LNO, Model Maximalism, Ownership Principle...) | /product-discovery, /pm |
| **CTO** | Radical simplicity, boring technology wins | 6 (Tech Maturity, ADR, Tech Debt Quadrant...) | /tech-debt, /architecture-decision, /infra-cost |

Each skill shows the full 7-step lifecycle: invocation → data loading → cross-skill reads → frameworks → sparring → dual output → delegation.

## How It Works

Skills read from each other through shared JSON files on disk. The CFO reads pipeline data from the CMO. The CEO reads from everyone. No APIs, no message queues. Just files — simple, inspectable, debuggable.

```
data/
├── ceo/          # CEO reads from ALL other skills
│   ├── strategy.json
│   ├── hard_conversations.json
│   └── decisions/
├── cfo/          # CFO reads from CMO, CPO, CTO
│   ├── assumptions.json
│   ├── latest_forecast.json
│   └── forecasts/
├── gtm/          # CMO reads from CFO, CPO
│   ├── positioning.json
│   ├── gtm_scorecard.json
│   └── icp_profiles.json
├── product/      # CPO reads from CMO, CFO
│   ├── strategy.json
│   ├── roadmap.json
│   └── pmf_tracker.json
└── engineering/   # CTO reads from CFO, CPO
    ├── tech_stack.json
    ├── engineering_scorecard.json
    └── tech_debt.json
```

## Why Open Source?

The skill system is a framework, not a product. The value is in the domain expertise you encode and the data you feed it. We built this for [TreasuryPath](https://treasurypath.com) (fintech platform for CFOs) and use it every day. We're sharing the architecture because:

1. The pattern is more useful than any single implementation
2. AI agent frameworks shouldn't be proprietary
3. We want to see what other teams build with it

## Getting Started

The demo is a single HTML file with no dependencies. Clone and open it:

```bash
git clone https://github.com/clark-beep/tpath-architecture.git
open index.html
```

To build your own skill system:

1. Create a `skills/` directory with `SKILL.md` files (persona + frameworks + data paths + pushback rules)
2. Create a `data/` directory with JSON state files
3. Configure your AI gateway to load the relevant SKILL.md based on user commands
4. Skills read/write JSON. That's the whole integration layer.

## Built By

[TreasuryPath](https://treasurypath.com) — AI-powered treasury management for finance teams.

Built by a solo CEO with 61 skills covering C-suite strategy, GTM pipeline, engineering, finance, security, and personal productivity. This is what "one person operating as a company" actually looks like.

## License

MIT — do whatever you want with it.
