# Clark Infrastructure — System Map Data

> Pre-filled YOUR SYSTEM section for Clark's agent infrastructure.
> Paste into build-prompt.md replacing the template section.

### ========================
### YOUR SYSTEM
### ========================

Root node:
- Title: "Clark"
- Description: "24/7 AI agent running on Mac mini — CEO co-pilot for TreasuryPath. 65 skills, 20 cron jobs, multi-channel."
- Icon: 🎄

Branches:

Branch: brain
  Title: "AI Models"
  Icon: 🧠
  Color: "#a855f7" (purple)
  Leaves:
  - id: "claude_opus", title: "Claude Opus 4", desc: "Primary reasoning model. Handles all direct conversations, complex analysis, code review, and strategic work. 200K context window.", icon: "🟣"
  - id: "claude_sonnet", title: "Claude Sonnet 4.5", desc: "Secondary model for lighter cron jobs and sub-agent tasks. Faster, cheaper, good for monitoring and triage.", icon: "🔵"
  - id: "minimax", title: "Minimax M2.5", desc: "Budget model for simple cron jobs — Slack scanning, heartbeat checks, routine monitoring. Via OpenRouter.", icon: "⚡"
  - id: "supermemory", title: "SuperMemory", desc: "Vector-indexed semantic memory plugin. Stores facts, preferences, decisions. Auto-recalled based on conversation relevance.", icon: "🧲"

Branch: channels
  Title: "Communication"
  Icon: 📡
  Color: "#f97316" (orange)
  Leaves:
  - id: "telegram", title: "Telegram DM", desc: "Primary interface with Jeff. Real-time chat, commands, approvals. Direct messages only.", icon: "✈️"
  - id: "discord_clark", title: "Discord #clark", desc: "Main broadcast channel. Alerts, check-ins, cron output, morning briefs. Team-visible.", icon: "💬"
  - id: "discord_content", title: "Discord #content", desc: "Content agent output. Drafts, content intel, publishing queue. Bound to content agent.", icon: "📝"
  - id: "discord_sales", title: "Discord #sales", desc: "Pipeline reports, deal updates, meeting prep packets.", icon: "💰"
  - id: "discord_ops", title: "Discord #ops", desc: "Security audits, AI intel briefs, infrastructure reports.", icon: "🔒"
  - id: "discord_compintel", title: "Discord #competitive-intel", desc: "Competitor news, funding rounds, product launches. Watchlist: Trovata, Atlar, Kyriba, etc.", icon: "🔍"
  - id: "slack", title: "Slack (TreasuryPath)", desc: "Monitor #development, #agent-architecture, #general. Clark bot can post and react. Read-heavy.", icon: "💼"

Branch: integrations
  Title: "External Services"
  Icon: 🔌
  Color: "#3b82f6" (blue)
  Leaves:
  - id: "github", title: "GitHub (clark-beep)", desc: "Read-only on TreasuryPath org (SOC 2 policy). Write on own repos: tpath-sales, tpath-architecture. PR reviews, issue comments.", icon: "🐙"
  - id: "google", title: "Google Workspace", desc: "clark@treasurypath.com. Gmail, Calendar (Jeff's cal via calendarId), Drive. All via gog CLI.", icon: "📧"
  - id: "hubspot", title: "HubSpot CRM", desc: "Deals, contacts, companies. API access via PAT. Pipeline monitoring, deal autopilot, data hygiene.", icon: "🧡"
  - id: "vanta", title: "Vanta", desc: "SOC 2 Type II monitoring. Editor access via Google SSO. Daily compliance checks.", icon: "🛡️"
  - id: "onepw", title: "1Password", desc: "Clark Vault. Credential storage isolated from Jeff's vaults. op CLI access.", icon: "🔐"
  - id: "brave", title: "Brave Search", desc: "Web search API. Research, competitive intel, news monitoring.", icon: "🌐"
  - id: "taplio", title: "Taplio", desc: "LinkedIn scheduling. Jeff's personal + TreasuryPath company posts. API key in keychain.", icon: "🔗"
  - id: "typefully", title: "Typefully", desc: "Twitter/X scheduling. Daily posts + threads. API key in keychain.", icon: "🐦"
  - id: "fathom", title: "Fathom", desc: "Meeting transcripts and action items. Sync cron runs daily. Clark account separate from Jeff's.", icon: "🎙️"

Branch: crons
  Title: "Cron Jobs (20)"
  Icon: ⏰
  Color: "#eab308" (yellow)
  Leaves:
  - id: "cron_morning", title: "Morning Briefing (7AM)", desc: "FinTech/Treasury news, GitHub activity, HubSpot changes. Weekdays only. Posts to Jeff.", icon: "☀️"
  - id: "cron_checkin", title: "Morning Check-in (8AM)", desc: "2-3 essential items for today. Stoic/essentialist framing. Posts to Jeff via primary channel.", icon: "📋"
  - id: "cron_deal", title: "Deal Autopilot (8AM)", desc: "Checks HubSpot for stale deals, missing follow-ups, upcoming meetings. Alerts if action needed.", icon: "🤝"
  - id: "cron_inbox", title: "Inbox Triage (8:30AM)", desc: "Scans ea@treasurypath.com for urgent emails. Categorizes and surfaces what needs Jeff.", icon: "📬"
  - id: "cron_security", title: "Security Audit (7AM)", desc: "Daily system security check. Firewall, permissions, credentials, open ports. Logs to memory/security-audits/.", icon: "🔐"
  - id: "cron_vanta", title: "Vanta SOC 2 (9AM)", desc: "Daily compliance check. Monitors passing/failing controls, alerts on regressions.", icon: "✅"
  - id: "cron_slack", title: "Slack Scan (9AM/5PM)", desc: "Checks all Slack channels for messages needing attention or response.", icon: "💬"
  - id: "cron_content_intel", title: "Content Intel (6AM M/W/F/Sat)", desc: "Scans industry news for content opportunities. Feeds auto-draft pipeline.", icon: "📰"
  - id: "cron_content_draft", title: "Content Auto-Draft (6:30AM)", desc: "Takes intel scout output and drafts LinkedIn/Twitter posts. Saves to content queue.", icon: "✍️"
  - id: "cron_fx", title: "FX Monitor (hourly Sun-Thu)", desc: "USD/ILS exchange rate monitoring. Alerts on significant moves.", icon: "💱"
  - id: "cron_qmd", title: "QMD Index (hourly)", desc: "Updates quantitative market data index. Background data refresh.", icon: "📊"
  - id: "cron_outbound", title: "Outbound Monitor (hourly)", desc: "Tracks outbound connection campaigns and follow-up sequences.", icon: "📤"
  - id: "cron_ai_intel", title: "AI Agent Intel (6AM)", desc: "Daily scan of AI/agent industry news. Competitor moves, new tools, research papers.", icon: "🤖"
  - id: "cron_gh_worker", title: "GitHub Issue Worker (2hr)", desc: "Polls TreasuryPath repos for assigned issues. Investigates, executes, reports.", icon: "🐙"
  - id: "cron_pipeline", title: "Monday Pipeline (9AM Mon)", desc: "Weekly full pipeline report. Deal stages, revenue forecast, action items.", icon: "📈"
  - id: "cron_ops", title: "Monday Ops Brief (7AM Mon)", desc: "Weekly ops summary. Infrastructure health, security posture, open items.", icon: "🏗️"
  - id: "cron_fathom", title: "Fathom Sync (7AM)", desc: "Daily meeting transcript sync. Extracts action items, creates GitHub issues.", icon: "🎙️"
  - id: "cron_eddie", title: "Eddie's Fintech Intel (Sun 9AM)", desc: "Weekly fintech industry brief. Posts to #fintech Discord channel.", icon: "📰"
  - id: "cron_allin", title: "All-In Pod Content (Sat 9AM)", desc: "Generates content from latest All-In Podcast episode topics.", icon: "🎙️"
  - id: "cron_memory", title: "Memory Compaction (Sun 6AM)", desc: "Weekly cleanup. Reviews daily logs, updates MEMORY.md, prunes stale data.", icon: "🧹"

Branch: skills
  Title: "Skills (117)"
  Icon: 🎯
  Color: "#ec4899" (pink)
  Leaves:
  - id: "skill_csuite", title: "C-Suite (6)", desc: "CEO, CFO, CMO, CPO, CTO, CISO lenses. Virtual executive team Jeff can invoke.", icon: "👔"
  - id: "skill_ciso_sub", title: "CISO Sub-skills (4)", desc: "Compliance, Privacy, Security Ops, Vendor Risk. Deep security specializations.", icon: "🛡️"
  - id: "skill_gtm", title: "GTM Pipeline (11)", desc: "ICP, Prospecting, Content, Outbound, Lead Capture, Deal Intel, Onboarding, Lifecycle, Analytics, Monetization, Infra.", icon: "🚀"
  - id: "skill_dev", title: "Development (8)", desc: "Execute, Explore, Review, Peer Review, Create Plan, Create Issue, Document, Session End.", icon: "💻"
  - id: "skill_personal", title: "Personal (5)", desc: "Coach (Stoic), Personal CFO, Travel, Home, Journal. Life management.", icon: "🧘"
  - id: "skill_content", title: "Content (3)", desc: "Content Pipeline, Humanizer, Designer. Writing and visual review.", icon: "✏️"
  - id: "skill_strategy", title: "Strategy (7)", desc: "Product Discovery, Architecture Decision, Board Deck, Investor Update, Finance Forecast, Fundraise Prep, Cap Table.", icon: "📐"
  - id: "skill_builtin", title: "Built-in (52)", desc: "GitHub, gog, Apple Notes/Reminders, iMessage, email (himalaya), weather, coding-agent, tmux, 1Password, and more.", icon: "📦"

Branch: infra
  Title: "Infrastructure"
  Icon: 🖥️
  Color: "#22c55e" (green)
  Leaves:
  - id: "mac_mini", title: "Mac mini (M4)", desc: "10-core ARM, ~11GB RAM, 228GB SSD. Primary host. macOS 26.3 Tahoe. IP: 192.168.7.172.", icon: "🖥️"
  - id: "openclaw", title: "OpenClaw v2026.2.26", desc: "Agent runtime. Gateway on ws://127.0.0.1:18789. Sessions, cron, channels, tool dispatch. LaunchAgent service.", icon: "🤖"
  - id: "docker", title: "Docker (OrbStack)", desc: "Sandbox container for isolated cron execution. 1 persistent container (4+ day uptime).", icon: "🐳"
  - id: "playwright", title: "Playwright + Chrome", desc: "Browser automation. Web scraping, form filling, API capture (unbrowse). Dedicated openclaw profile.", icon: "🌐"
  - id: "node_runtime", title: "Node.js v25.5.0", desc: "OpenClaw core runtime. Extensions, plugins, tool execution.", icon: "💚"
  - id: "homebrew", title: "Homebrew", desc: "System package manager. 50+ packages: gh, gog, ffmpeg, python3, docker, etc.", icon: "🍺"
  - id: "ssh", title: "SSH", desc: "Remote access from Jeff's MacBook (192.168.7.246). Clark GitHub key: clark_github (ed25519).", icon: "🔑"

Branch: memory
  Title: "Memory System"
  Icon: 🧠
  Color: "#06b6d4" (cyan)
  Leaves:
  - id: "mem_super", title: "SuperMemory (Vector)", desc: "Semantic vector store. Auto-recalled by relevance. Stores user profile, facts, decisions, preferences.", icon: "🧲"
  - id: "mem_daily", title: "Daily Logs (43 files)", desc: "memory/YYYY-MM-DD.md. Raw chronological notes. What happened, what broke, what was decided.", icon: "📅"
  - id: "mem_longterm", title: "MEMORY.md", desc: "Curated long-term memory. Communication rules, tool access, preferences, lessons. Only loaded in private sessions.", icon: "📚"
  - id: "mem_heartbeat", title: "heartbeat-state.json", desc: "Tracks last-check timestamps for email, calendar, weather, Slack. Prevents redundant checks.", icon: "💓"
  - id: "mem_activity", title: "activity-feed.md", desc: "One-line-per-event log. Every cron, heartbeat, task, error. Jeff scans this for full activity history.", icon: "📜"
  - id: "mem_soul", title: "SOUL.md + USER.md", desc: "Identity files. SOUL.md = personality/directives. USER.md = Jeff's context/preferences. Read every session.", icon: "👤"

Branch: repos
  Title: "Git Repos"
  Icon: 📂
  Color: "#64748b" (slate)
  Leaves:
  - id: "repo_bt", title: "TreasuryPath/business-tools", desc: "Knowledge base, sales materials, competitive intel. GitHub Pages deployed. Clark has write access.", icon: "📚"
  - id: "repo_sales", title: "clark-beep/tpath-sales", desc: "Public sales site. Solution overview, platform page. GitHub Pages.", icon: "🏪"
  - id: "repo_arch", title: "clark-beep/tpath-architecture", desc: "WorkOS skills tree visualization, KB articles. Public repo.", icon: "🏛️"
  - id: "repo_lifeos", title: "jforksy/lifeOS", desc: "Personal infrastructure KB. Family privacy cloud, Mac Studio migration, Clark architecture.", icon: "🏠"
  - id: "repo_app", title: "TreasuryPath/app", desc: "Main Rails application. Read-only access. PR reviews and comments only.", icon: "💎"
  - id: "repo_frontend", title: "TreasuryPath/frontend", desc: "Next.js frontend. Read-only access. PR reviews and comments only.", icon: "⚛️"
  - id: "repo_website", title: "TreasuryPath/tpath-website-v3", desc: "Astro marketing site. Clark submitted PR #21 (platform page) from fork.", icon: "🌐"

Cross-branch edges:

Edges:
- source: "claude_opus", target: "openclaw", relationship: "runs on", desc: "Claude Opus is the default model routed through OpenClaw gateway for all main sessions."
- source: "claude_sonnet", target: "cron_morning", relationship: "powers", desc: "Sonnet handles lighter cron jobs like morning briefings and monitoring tasks."
- source: "minimax", target: "cron_slack", relationship: "powers", desc: "Minimax runs budget cron jobs like Slack scanning to reduce API costs."
- source: "supermemory", target: "mem_super", relationship: "stores in", desc: "SuperMemory plugin writes to and reads from the vector memory store."
- source: "telegram", target: "openclaw", relationship: "routes through", desc: "Telegram messages hit OpenClaw gateway which dispatches to the main agent session."
- source: "discord_clark", target: "cron_morning", relationship: "receives from", desc: "Morning briefings and cron output post to #clark channel."
- source: "hubspot", target: "cron_deal", relationship: "queried by", desc: "Deal Autopilot queries HubSpot API for stale deals and pipeline changes."
- source: "github", target: "cron_gh_worker", relationship: "polled by", desc: "GitHub Issue Worker polls for assigned issues every 2 hours."
- source: "google", target: "cron_inbox", relationship: "queried by", desc: "Inbox Triage scans ea@treasurypath.com via gog CLI."
- source: "vanta", target: "cron_vanta", relationship: "monitored by", desc: "Daily Vanta check monitors SOC 2 control status."
- source: "slack", target: "cron_slack", relationship: "scanned by", desc: "Slack Scan checks all channels for messages needing attention."
- source: "cron_content_intel", target: "cron_content_draft", relationship: "feeds", desc: "Content Intel finds topics, Auto-Draft turns them into LinkedIn/Twitter posts."
- source: "brave", target: "cron_ai_intel", relationship: "queried by", desc: "AI Agent Intel uses Brave Search for industry news scanning."
- source: "brave", target: "cron_content_intel", relationship: "queried by", desc: "Content Intel uses Brave Search for topic discovery."
- source: "fathom", target: "cron_fathom", relationship: "synced by", desc: "Fathom Sync pulls meeting transcripts and extracts action items."
- source: "mem_daily", target: "cron_memory", relationship: "compacted by", desc: "Memory Compaction reviews daily logs and distills into MEMORY.md."
- source: "mem_longterm", target: "cron_memory", relationship: "updated by", desc: "Memory Compaction updates MEMORY.md with new learnings from daily files."
- source: "mem_soul", target: "openclaw", relationship: "loaded by", desc: "SOUL.md and USER.md are loaded every session as system context."
- source: "skill_csuite", target: "claude_opus", relationship: "invoked on", desc: "C-Suite skills are instruction files that guide Claude Opus reasoning."
- source: "skill_gtm", target: "hubspot", relationship: "operates on", desc: "GTM skills use HubSpot for pipeline operations, prospecting, and deal management."
- source: "skill_content", target: "taplio", relationship: "publishes via", desc: "Content skills schedule posts via Taplio (LinkedIn) API."
- source: "skill_content", target: "typefully", relationship: "publishes via", desc: "Content skills schedule posts via Typefully (Twitter) API."
- source: "playwright", target: "openclaw", relationship: "controlled by", desc: "OpenClaw dispatches browser automation tasks via Playwright."
- source: "docker", target: "openclaw", relationship: "sandboxes for", desc: "Docker container provides isolated execution environment for cron jobs."
- source: "repo_bt", target: "discord_compintel", relationship: "published to", desc: "KB articles and competitive intel from business-tools are shared in Discord."
- source: "cron_security", target: "mem_daily", relationship: "logs to", desc: "Security audit results logged to memory/security-audits/ daily files."
- source: "ssh", target: "mac_mini", relationship: "accesses", desc: "Jeff connects via SSH from MacBook for Claude Code sessions and MCP."

### ========================
### END YOUR SYSTEM
### ========================
