/**
 * Clark Agent Infrastructure — System Map Data
 *
 * 24/7 AI agent on Mac mini. CEO co-pilot for TreasuryPath.
 * 65 skills, 20 cron jobs, multi-channel communication.
 */

import type { MapNodeConfig, MapEdgeConfig, BranchConfig } from "./data-template";

// ============================================================
// Branch Layout (8 branches, radial positioning)
// ============================================================

export const BRANCHES: BranchConfig[] = [
  { id: "brain",        color: "#a855f7", angle: -2.356 },  // upper-left
  { id: "channels",     color: "#f97316", angle: -1.571 },  // top
  { id: "integrations", color: "#3b82f6", angle: -0.785 },  // upper-right
  { id: "crons",        color: "#eab308", angle:  0.000 },  // right
  { id: "skills",       color: "#ec4899", angle:  0.785 },  // lower-right
  { id: "infra",        color: "#22c55e", angle:  1.571 },  // bottom
  { id: "memory",       color: "#06b6d4", angle:  2.356 },  // lower-left
  { id: "repos",        color: "#64748b", angle:  3.142 },  // left
];

// ============================================================
// Nodes
// ============================================================

export const NODES: MapNodeConfig[] = [
  // ── Root ──────────────────────────────────────
  {
    id: "root", branch: "root", nodeType: "root", parentId: null,
    title: "Clark", shortDesc: "24/7 AI agent — CEO co-pilot for TreasuryPath",
    description: "Persistent AI agent running on a Mac mini in Jeff's home office. Not a chatbot — a process with its own identity, credentials, memory, and 20 autonomous cron jobs. Mission: make Jeff the most leveraged solo CEO in fintech.",
    icon: "🎄", sortIndex: 0,
  },

  // ── Brain ─────────────────────────────────────
  {
    id: "brain", branch: "brain", nodeType: "branch", parentId: "root",
    title: "AI Models", shortDesc: "LLMs powering reasoning and generation",
    description: "Three-tier model strategy: Opus for complex work, Sonnet for lighter tasks, Minimax for budget monitoring jobs.",
    icon: "🧠", sortIndex: 0,
  },
  {
    id: "claude_opus", branch: "brain", nodeType: "leaf", parentId: "brain",
    title: "Claude Opus 4", shortDesc: "Primary brain. 200K context. All conversations.",
    description: "Primary reasoning model via Anthropic API. Handles all direct conversations with Jeff, complex analysis, code review, strategic planning, content writing, and multi-step tool use. 200K context window.",
    icon: "🟣", sortIndex: 0,
  },
  {
    id: "claude_sonnet", branch: "brain", nodeType: "leaf", parentId: "brain",
    title: "Claude Sonnet 4.5", shortDesc: "Secondary model for lighter cron tasks",
    description: "Used for less complex cron jobs and sub-agent work. Faster and cheaper than Opus while maintaining strong reasoning for monitoring, triage, and report generation.",
    icon: "🔵", sortIndex: 1,
  },
  {
    id: "minimax", branch: "brain", nodeType: "leaf", parentId: "brain",
    title: "Minimax M2.5", shortDesc: "Budget model for simple monitoring crons",
    description: "Via OpenRouter. Runs the cheapest cron jobs: Slack scanning, heartbeat checks, routine monitoring where complex reasoning isn't needed. Keeps API costs down.",
    icon: "⚡", sortIndex: 2,
  },
  {
    id: "supermemory", branch: "brain", nodeType: "leaf", parentId: "brain",
    title: "SuperMemory", shortDesc: "Vector-indexed semantic recall plugin",
    description: "OpenClaw plugin providing persistent vector memory. Stores facts, preferences, decisions, entity relationships. Automatically recalled based on conversation relevance before every response.",
    icon: "🧲", sortIndex: 3,
  },

  // ── Channels ──────────────────────────────────
  {
    id: "channels", branch: "channels", nodeType: "branch", parentId: "root",
    title: "Communication", shortDesc: "How Jeff and team interact with Clark",
    description: "Multi-channel communication layer. Telegram for private chat, Discord for team broadcasts, Slack for engineering team monitoring.",
    icon: "📡", sortIndex: 0,
  },
  {
    id: "telegram", branch: "channels", nodeType: "leaf", parentId: "channels",
    title: "Telegram DM", shortDesc: "Primary interface with Jeff. Real-time.",
    description: "Direct message channel with Jeff. Primary command interface. Supports inline buttons, reactions, file sharing. All proactive alerts and check-ins route here unless directed to Discord.",
    icon: "✈️", sortIndex: 0,
  },
  {
    id: "discord_clark", branch: "channels", nodeType: "leaf", parentId: "channels",
    title: "Discord #clark", shortDesc: "Main broadcast: alerts, crons, briefs",
    description: "Clark's primary broadcast channel in the TreasuryPath Discord server. Morning briefings, cron output, security alerts, check-ins. Team-visible.",
    icon: "💬", sortIndex: 1,
  },
  {
    id: "discord_content", branch: "channels", nodeType: "leaf", parentId: "channels",
    title: "Discord #content", shortDesc: "Content drafts and publishing queue",
    description: "Bound to the content agent. Content intel findings, draft posts, publishing queue updates. Separate from main agent.",
    icon: "📝", sortIndex: 2,
  },
  {
    id: "discord_sales", branch: "channels", nodeType: "leaf", parentId: "channels",
    title: "Discord #sales", shortDesc: "Pipeline reports and deal updates",
    description: "Weekly pipeline reports, deal stage changes, meeting prep packets, revenue forecasts.",
    icon: "💰", sortIndex: 3,
  },
  {
    id: "discord_ops", branch: "channels", nodeType: "leaf", parentId: "channels",
    title: "Discord #ops", shortDesc: "Security audits and infrastructure reports",
    description: "Security audit results, AI intel briefs, ops reports, infrastructure health checks.",
    icon: "🔒", sortIndex: 4,
  },
  {
    id: "discord_compintel", branch: "channels", nodeType: "leaf", parentId: "channels",
    title: "Discord #competitive-intel", shortDesc: "Competitor news and market moves",
    description: "Automated competitive intelligence. Monitors: Trovata, Atlar, Bracket, Finmo, Agicap, Kamino, Kyriba, Ramp, Modern Treasury, and others. Funding rounds, product launches, acquisitions.",
    icon: "🔍", sortIndex: 5,
  },
  {
    id: "slack", branch: "channels", nodeType: "leaf", parentId: "channels",
    title: "Slack (TreasuryPath)", shortDesc: "Engineering team monitoring and posting",
    description: "Clark bot in TreasuryPath Slack. Monitors #development, #agent-architecture, #general. Can post messages and react. Primarily read-heavy with occasional responses.",
    icon: "💼", sortIndex: 6,
  },

  // ── Integrations ──────────────────────────────
  {
    id: "integrations", branch: "integrations", nodeType: "branch", parentId: "root",
    title: "External Services", shortDesc: "APIs and platforms Clark connects to",
    description: "External service integrations. Each has its own auth (Clark's identity, not Jeff's) for SOC 2 compliance and audit trail.",
    icon: "🔌", sortIndex: 0,
  },
  {
    id: "github", branch: "integrations", nodeType: "leaf", parentId: "integrations",
    title: "GitHub (clark-beep)", shortDesc: "Read-only TreasuryPath org. Write on own repos.",
    description: "GitHub account: clark-beep. Read-only access to TreasuryPath org (deliberate SOC 2 policy). Write access on own repos: tpath-sales, tpath-architecture. PR reviews and issue comments on org repos.",
    icon: "🐙", fields: ["read-only: TreasuryPath/*", "write: clark-beep/*"], sortIndex: 0,
  },
  {
    id: "google", branch: "integrations", nodeType: "leaf", parentId: "integrations",
    title: "Google Workspace", shortDesc: "Gmail, Calendar, Drive via gog CLI",
    description: "clark@treasurypath.com. Full access to Gmail, Calendar (reads Jeff's calendar via calendarId), Drive. All via gog CLI with OAuth token.",
    icon: "📧", sortIndex: 1,
  },
  {
    id: "hubspot", branch: "integrations", nodeType: "leaf", parentId: "integrations",
    title: "HubSpot CRM", shortDesc: "Deals, contacts, companies. API access.",
    description: "CRM read/write via Personal Access Token. Pipeline monitoring, deal autopilot (stale deal alerts), contact/company data hygiene. $143K+ active pipeline tracked.",
    icon: "🧡", sortIndex: 2,
  },
  {
    id: "vanta", branch: "integrations", nodeType: "leaf", parentId: "integrations",
    title: "Vanta", shortDesc: "SOC 2 Type II compliance monitoring",
    description: "Editor access via Google SSO (clark@treasurypath.com). Daily automated checks on control pass/fail status. SOC 2 observation period active with Advantage Partners.",
    icon: "🛡️", sortIndex: 3,
  },
  {
    id: "onepw", branch: "integrations", nodeType: "leaf", parentId: "integrations",
    title: "1Password", shortDesc: "Clark Vault. Isolated credentials.",
    description: "Dedicated 'Clark Vault' in 1Password. Credential storage isolated from Jeff's personal vaults. op CLI access for automated secret retrieval.",
    icon: "🔐", sortIndex: 4,
  },
  {
    id: "brave", branch: "integrations", nodeType: "leaf", parentId: "integrations",
    title: "Brave Search", shortDesc: "Web search API for research and intel",
    description: "Brave Search API. Powers competitive intelligence scanning, content research, news monitoring, and general web queries.",
    icon: "🌐", sortIndex: 5,
  },
  {
    id: "taplio", branch: "integrations", nodeType: "leaf", parentId: "integrations",
    title: "Taplio", shortDesc: "LinkedIn post scheduling. API key.",
    description: "LinkedIn scheduling tool. Jeff's personal profile + TreasuryPath company page. API key stored in macOS Keychain. 3x/week personal, 2x/week company cadence.",
    icon: "🔗", sortIndex: 6,
  },
  {
    id: "typefully", branch: "integrations", nodeType: "leaf", parentId: "integrations",
    title: "Typefully", shortDesc: "Twitter/X scheduling. Daily posts.",
    description: "Twitter/X scheduling and publishing. API key in Keychain. Daily posts + weekly threads. Content auto-drafted by cron pipeline.",
    icon: "🐦", sortIndex: 7,
  },
  {
    id: "fathom", branch: "integrations", nodeType: "leaf", parentId: "integrations",
    title: "Fathom", shortDesc: "Meeting transcripts. Daily sync cron.",
    description: "Meeting recording and transcription. Daily cron syncs new meetings, extracts action items. Clark has separate account (clark@) — can't see Jeff's recordings until workspace sharing is set up.",
    icon: "🎙️", sortIndex: 8,
  },

  // ── Crons ─────────────────────────────────────
  {
    id: "crons", branch: "crons", nodeType: "branch", parentId: "root",
    title: "Cron Jobs (20)", shortDesc: "Autonomous scheduled tasks",
    description: "20 scheduled jobs running without human intervention. Morning briefings, deal monitoring, security audits, content pipeline, competitive intel. The backbone of Clark's autonomous value.",
    icon: "⏰", sortIndex: 0,
  },
  {
    id: "cron_morning", branch: "crons", nodeType: "leaf", parentId: "crons",
    title: "Morning Briefing", shortDesc: "7AM weekdays. News + GitHub + HubSpot.",
    description: "Compiles overnight FinTech/Treasury news, GitHub activity (PRs, CI), and HubSpot pipeline changes into a 2-3 item brief. Posts to Jeff.",
    icon: "☀️", sortIndex: 0,
  },
  {
    id: "cron_checkin", branch: "crons", nodeType: "leaf", parentId: "crons",
    title: "Morning Check-in", shortDesc: "8AM weekdays. Today's 2-3 essentials.",
    description: "Essentialist framing: what are the 2-3 things that matter today? Pulls from calendar, pipeline, open items. Stoic/essentialist style per Jeff's preference.",
    icon: "📋", sortIndex: 1,
  },
  {
    id: "cron_deal", branch: "crons", nodeType: "leaf", parentId: "crons",
    title: "Deal Autopilot", shortDesc: "8AM weekdays. Stale deal detection.",
    description: "Queries HubSpot for deals with no activity in 7+ days, missing follow-ups, or upcoming meetings without prep. Alerts Jeff only when action needed.",
    icon: "🤝", sortIndex: 2,
  },
  {
    id: "cron_inbox", branch: "crons", nodeType: "leaf", parentId: "crons",
    title: "Inbox Triage", shortDesc: "8:30AM weekdays. Email prioritization.",
    description: "Scans ea@treasurypath.com shared inbox via gog CLI. Categorizes by urgency, surfaces what needs Jeff's attention, handles routine items autonomously.",
    icon: "📬", sortIndex: 3,
  },
  {
    id: "cron_security", branch: "crons", nodeType: "leaf", parentId: "crons",
    title: "Security Audit", shortDesc: "7AM daily. System health + permissions.",
    description: "Daily automated security check. Firewall status, file permissions, open ports, credential exposure, brew updates. Logs to memory/security-audits/.",
    icon: "🔐", sortIndex: 4,
  },
  {
    id: "cron_vanta", branch: "crons", nodeType: "leaf", parentId: "crons",
    title: "Vanta SOC 2 Check", shortDesc: "9AM daily. Compliance monitoring.",
    description: "Monitors Vanta dashboard for SOC 2 control pass/fail status. Alerts on regressions. Tracks observation period progress with Advantage Partners.",
    icon: "✅", sortIndex: 5,
  },
  {
    id: "cron_slack", branch: "crons", nodeType: "leaf", parentId: "crons",
    title: "Slack Scan", shortDesc: "9AM/5PM daily. Channel monitoring.",
    description: "Scans all TreasuryPath Slack channels for messages needing attention or Clark response. Two fixed scans plus heartbeat checks.",
    icon: "💬", sortIndex: 6,
  },
  {
    id: "cron_content_intel", branch: "crons", nodeType: "leaf", parentId: "crons",
    title: "Content Intel", shortDesc: "6AM Mon/Wed/Fri/Sat. Topic discovery.",
    description: "Scans industry news for content opportunities matching TreasuryPath pillars: FX risk, idle cash, treasury ops, AI in finance, platform infrastructure.",
    icon: "📰", sortIndex: 7,
  },
  {
    id: "cron_content_draft", branch: "crons", nodeType: "leaf", parentId: "crons",
    title: "Content Auto-Draft", shortDesc: "6:30AM. Turns intel into posts.",
    description: "Takes Content Intel output and auto-drafts LinkedIn/Twitter posts following Jeff's voice (Greg Isenberg style). Saves to content queue as 'pending' for review.",
    icon: "✍️", sortIndex: 8,
  },
  {
    id: "cron_fx", branch: "crons", nodeType: "leaf", parentId: "crons",
    title: "FX Monitor", shortDesc: "Hourly Sun-Thu. USD/ILS tracking.",
    description: "Monitors USD/ILS exchange rate. Alerts on significant moves. Relevant for TreasuryPath's FX risk management positioning.",
    icon: "💱", sortIndex: 9,
  },
  {
    id: "cron_ai_intel", branch: "crons", nodeType: "leaf", parentId: "crons",
    title: "AI Agent Intel", shortDesc: "6AM daily. Industry news scan.",
    description: "Daily scan of AI/agent industry news via Brave Search. Competitor moves, new tools, research papers. Posts notable findings to #ops.",
    icon: "🤖", sortIndex: 10,
  },
  {
    id: "cron_gh_worker", branch: "crons", nodeType: "leaf", parentId: "crons",
    title: "GitHub Issue Worker", shortDesc: "Every 2hr. Assigned issue execution.",
    description: "Polls TreasuryPath repos for issues assigned to clark-beep. Investigates, executes if possible, reports results back as comments.",
    icon: "🐙", sortIndex: 11,
  },
  {
    id: "cron_pipeline", branch: "crons", nodeType: "leaf", parentId: "crons",
    title: "Monday Pipeline", shortDesc: "9AM Monday. Weekly deal report.",
    description: "Full pipeline report: deal stages, revenue forecast, win/loss analysis, action items. Posts before Jeff's Monday Sales Review.",
    icon: "📈", sortIndex: 12,
  },
  {
    id: "cron_memory", branch: "crons", nodeType: "leaf", parentId: "crons",
    title: "Memory Compaction", shortDesc: "6AM Sunday. Weekly memory cleanup.",
    description: "Reviews recent daily logs (memory/YYYY-MM-DD.md), distills significant events/lessons into MEMORY.md, prunes outdated entries. Keeps long-term memory curated.",
    icon: "🧹", sortIndex: 13,
  },

  // ── Skills ────────────────────────────────────
  {
    id: "skills", branch: "skills", nodeType: "branch", parentId: "root",
    title: "Skills (117)", shortDesc: "Instruction files guiding task execution",
    description: "117 total skills: 65 custom (Jeff's C-suite) + 52 built-in (OpenClaw). Each is a SKILL.md file with specific instructions for a task domain.",
    icon: "🎯", sortIndex: 0,
  },
  {
    id: "skill_csuite", branch: "skills", nodeType: "leaf", parentId: "skills",
    title: "C-Suite (6)", shortDesc: "CEO, CFO, CMO, CPO, CTO, CISO lenses",
    description: "Virtual executive team. Each skill provides a leadership lens Jeff can invoke: strategy, finance, go-to-market, product, technology, security. Adopts the persona and frameworks of that role.",
    icon: "👔", sortIndex: 0,
  },
  {
    id: "skill_gtm", branch: "skills", nodeType: "leaf", parentId: "skills",
    title: "GTM Pipeline (11)", shortDesc: "Full sales funnel from ICP to lifecycle",
    description: "Complete go-to-market pipeline: ICP definition, Prospecting, Content, Outbound, Lead Capture, Deal Intel, Onboarding, Lifecycle, Analytics, Monetization, Infrastructure. Each stage has its own skill.",
    icon: "🚀", sortIndex: 1,
  },
  {
    id: "skill_dev", branch: "skills", nodeType: "leaf", parentId: "skills",
    title: "Development (8)", shortDesc: "Code execution, review, and planning",
    description: "Execute, Explore, Review, Peer Review, Create Plan, Create Issue, Document, Session End. Covers the full dev lifecycle from investigation through PR review.",
    icon: "💻", sortIndex: 2,
  },
  {
    id: "skill_personal", branch: "skills", nodeType: "leaf", parentId: "skills",
    title: "Personal (5)", shortDesc: "Life management and coaching",
    description: "Coach (Stoic philosophy — Marcus Aurelius, Seneca, Epictetus), Personal CFO (household finance), Travel (family trip planning), Home (maintenance), Journal (reflection).",
    icon: "🧘", sortIndex: 3,
  },
  {
    id: "skill_content", branch: "skills", nodeType: "leaf", parentId: "skills",
    title: "Content (3)", shortDesc: "Writing, humanizing, and design review",
    description: "Content Pipeline (research-to-publication), Humanizer (remove AI writing tells), Designer (UI/UX review). Ensures all output sounds human and looks professional.",
    icon: "✏️", sortIndex: 4,
  },
  {
    id: "skill_strategy", branch: "skills", nodeType: "leaf", parentId: "skills",
    title: "Strategy (7)", shortDesc: "Board decks, fundraising, cap table",
    description: "Product Discovery, Architecture Decision Records, Board Deck generation, Investor Update, Finance Forecast, Fundraise Prep, Cap Table management.",
    icon: "📐", sortIndex: 5,
  },
  {
    id: "skill_builtin", branch: "skills", nodeType: "leaf", parentId: "skills",
    title: "Built-in (52)", shortDesc: "OpenClaw framework skills",
    description: "Ship with OpenClaw: GitHub ops, Google Workspace (gog), Apple Notes/Reminders, iMessage, email (himalaya), weather, coding-agent delegation, tmux, video-frames, 1Password, and more.",
    icon: "📦", sortIndex: 6,
  },

  // ── Infrastructure ────────────────────────────
  {
    id: "infra", branch: "infra", nodeType: "branch", parentId: "root",
    title: "Infrastructure", shortDesc: "Hardware and runtime environment",
    description: "Physical and software infrastructure. Consumer Mac mini running 24/7 in a home office. No cloud VMs, no GPU cluster.",
    icon: "🖥️", sortIndex: 0,
  },
  {
    id: "mac_mini", branch: "infra", nodeType: "leaf", parentId: "infra",
    title: "Mac mini (M4)", shortDesc: "10-core ARM, 11GB RAM, 228GB SSD",
    description: "Apple Mac mini M4. 10-core CPU, ~11GB RAM, 228GB SSD (90% free). macOS 26.3 Tahoe. IP: 192.168.7.172. Uptime typically 13+ days. FileVault encryption enabled.",
    icon: "🖥️", fields: ["M4 10-core", "11GB RAM", "228GB SSD", "FileVault ON"], sortIndex: 0,
  },
  {
    id: "openclaw", branch: "infra", nodeType: "leaf", parentId: "infra",
    title: "OpenClaw v2026.2.26", shortDesc: "Agent runtime. Gateway + sessions + crons.",
    description: "Core agent framework. WebSocket gateway at ws://127.0.0.1:18789 (local loopback only). Manages sessions (117 active), cron scheduling, channel routing, tool dispatch. Runs as macOS LaunchAgent.",
    icon: "🤖", fields: ["117 sessions", "20 crons", "LaunchAgent"], sortIndex: 1,
  },
  {
    id: "docker", branch: "infra", nodeType: "leaf", parentId: "infra",
    title: "Docker (OrbStack)", shortDesc: "Sandbox container for isolated cron execution",
    description: "OrbStack-managed Docker. One persistent sandbox container for isolated cron job execution. Prevents cron tasks from accessing main system files.",
    icon: "🐳", sortIndex: 2,
  },
  {
    id: "playwright", branch: "infra", nodeType: "leaf", parentId: "infra",
    title: "Playwright + Chrome", shortDesc: "Browser automation and API capture",
    description: "Headless and headed browser automation. Web scraping, form filling, login flows, API reverse-engineering (unbrowse). Dedicated 'openclaw' browser profile.",
    icon: "🌐", sortIndex: 3,
  },
  {
    id: "homebrew", branch: "infra", nodeType: "leaf", parentId: "infra",
    title: "Homebrew", shortDesc: "System packages: gh, gog, ffmpeg, etc.",
    description: "System package manager. 50+ packages including gh (GitHub CLI), gog (Google CLI), ffmpeg, python3, docker, himalaya (email), imsg (iMessage), and more.",
    icon: "🍺", sortIndex: 4,
  },
  {
    id: "ssh", branch: "infra", nodeType: "leaf", parentId: "infra",
    title: "SSH", shortDesc: "Remote access from Jeff's MacBook",
    description: "SSH server for remote access. Jeff connects from MacBook (192.168.7.246) for Claude Code sessions and MCP. Clark's GitHub key: clark_github (ed25519).",
    icon: "🔑", sortIndex: 5,
  },

  // ── Memory ────────────────────────────────────
  {
    id: "memory", branch: "memory", nodeType: "branch", parentId: "root",
    title: "Memory System", shortDesc: "How Clark remembers across sessions",
    description: "Three-layer memory: vector store for semantic recall, daily markdown logs for raw history, curated MEMORY.md for distilled long-term knowledge. Clark wakes fresh every session — these files are continuity.",
    icon: "🧠", sortIndex: 0,
  },
  {
    id: "mem_super", branch: "memory", nodeType: "leaf", parentId: "memory",
    title: "SuperMemory (Vector)", shortDesc: "Auto-recalled semantic memory store",
    description: "Vector-indexed store. Facts, preferences, decisions, entity relationships. Automatically searched and injected into context based on conversation relevance. Persistent across sessions.",
    icon: "🧲", sortIndex: 0,
  },
  {
    id: "mem_daily", branch: "memory", nodeType: "leaf", parentId: "memory",
    title: "Daily Logs (43 files)", shortDesc: "memory/YYYY-MM-DD.md. Raw event log.",
    description: "Chronological daily notes. What happened, what was decided, what broke, what was learned. 43 files spanning Clark's entire existence. The raw journal.",
    icon: "📅", sortIndex: 1,
  },
  {
    id: "mem_longterm", branch: "memory", nodeType: "leaf", parentId: "memory",
    title: "MEMORY.md", shortDesc: "Curated long-term knowledge. Private.",
    description: "Distilled long-term memory. Communication rules, tool access notes, Jeff's preferences, lessons learned, policy decisions. Only loaded in private sessions (security). Periodically updated from daily logs.",
    icon: "📚", sortIndex: 2,
  },
  {
    id: "mem_heartbeat", branch: "memory", nodeType: "leaf", parentId: "memory",
    title: "heartbeat-state.json", shortDesc: "Last-check timestamps. Anti-redundancy.",
    description: "Tracks when email, calendar, weather, Slack were last checked. Prevents redundant API calls. Updated after each check.",
    icon: "💓", sortIndex: 3,
  },
  {
    id: "mem_activity", branch: "memory", nodeType: "leaf", parentId: "memory",
    title: "activity-feed.md", shortDesc: "One-line-per-event audit trail",
    description: "Append-only log. Every cron result, heartbeat action, task completion, and error gets one timestamped line. Jeff scans this for full activity history.",
    icon: "📜", sortIndex: 4,
  },
  {
    id: "mem_soul", branch: "memory", nodeType: "leaf", parentId: "memory",
    title: "SOUL.md + USER.md", shortDesc: "Identity and user context. Every session.",
    description: "SOUL.md defines Clark's personality, directives, failure protocols. USER.md describes Jeff: role, preferences, operating philosophy, family, tools. Both loaded at the start of every session.",
    icon: "👤", sortIndex: 5,
  },

  // ── Repos ─────────────────────────────────────
  {
    id: "repos", branch: "repos", nodeType: "branch", parentId: "root",
    title: "Git Repos", shortDesc: "Code and content repositories",
    description: "GitHub repositories Clark interacts with. Mix of TreasuryPath org repos (read-only) and Clark's own repos (write).",
    icon: "📂", sortIndex: 0,
  },
  {
    id: "repo_bt", branch: "repos", nodeType: "leaf", parentId: "repos",
    title: "TreasuryPath/business-tools", shortDesc: "KB, sales materials, competitive intel",
    description: "Knowledge base (20+ HTML articles), sales materials, competitive intelligence. GitHub Pages deployed. Clark has write access. Houses the team's internal documentation.",
    icon: "📚", sortIndex: 0,
  },
  {
    id: "repo_sales", branch: "repos", nodeType: "leaf", parentId: "repos",
    title: "clark-beep/tpath-sales", shortDesc: "Public sales site. Solution overview.",
    description: "Public-facing sales materials. Solution overview, platform page. GitHub Pages at clark-beep.github.io/tpath-sales/. Clark owns this repo.",
    icon: "🏪", sortIndex: 1,
  },
  {
    id: "repo_arch", branch: "repos", nodeType: "leaf", parentId: "repos",
    title: "clark-beep/tpath-architecture", shortDesc: "WorkOS skills tree. Public.",
    description: "Skills tree visualization, KB articles, system-map skill. Public repo. Architecture documentation and interactive visualizations.",
    icon: "🏛️", sortIndex: 2,
  },
  {
    id: "repo_lifeos", branch: "repos", nodeType: "leaf", parentId: "repos",
    title: "jforksy/lifeOS", shortDesc: "Personal infra KB. Family privacy.",
    description: "Jeff's personal infrastructure knowledge base. Family Privacy Cloud spec, Mac Studio migration plan, Clark architecture documentation. Private repo.",
    icon: "🏠", sortIndex: 3,
  },
  {
    id: "repo_app", branch: "repos", nodeType: "leaf", parentId: "repos",
    title: "TreasuryPath/app", shortDesc: "Rails backend. Read-only. PR reviews.",
    description: "Main Rails application. Clark has read-only access per SOC 2 policy. Posts PR review comments but cannot merge or push.",
    icon: "💎", sortIndex: 4,
  },
  {
    id: "repo_frontend", branch: "repos", nodeType: "leaf", parentId: "repos",
    title: "TreasuryPath/frontend", shortDesc: "Next.js frontend. Read-only.",
    description: "Next.js frontend application. Read-only access. PR reviews covering component architecture, performance, and TypeScript quality.",
    icon: "⚛️", sortIndex: 5,
  },
];

// ============================================================
// Cross-Branch Edges
// ============================================================

export const CROSS_EDGES: MapEdgeConfig[] = [
  // Brain → Infra
  {
    source: "claude_opus", target: "openclaw",
    relationship: "runs on",
    shortDesc: "Primary model via gateway",
    description: "Claude Opus is the default model routed through OpenClaw gateway for all main agent sessions.",
  },
  {
    source: "claude_sonnet", target: "cron_morning",
    relationship: "powers",
    shortDesc: "Lighter model for cron tasks",
    description: "Sonnet handles cron jobs like morning briefings where full Opus reasoning isn't needed.",
  },
  {
    source: "minimax", target: "cron_slack",
    relationship: "powers",
    shortDesc: "Budget model for monitoring",
    description: "Minimax runs the cheapest monitoring crons (Slack scanning) to minimize API costs.",
  },
  {
    source: "supermemory", target: "mem_super",
    relationship: "stores in",
    shortDesc: "Plugin writes to vector DB",
    description: "SuperMemory plugin writes facts/preferences to the vector store and reads them back based on conversation relevance.",
  },

  // Channels → Infra
  {
    source: "telegram", target: "openclaw",
    relationship: "routes through",
    shortDesc: "Messages dispatch via gateway",
    description: "Telegram messages arrive at OpenClaw gateway which dispatches them to the appropriate agent session.",
  },
  {
    source: "discord_clark", target: "cron_morning",
    relationship: "receives from",
    shortDesc: "Cron output posts here",
    description: "Morning briefings and other cron job output post to #clark as the default broadcast channel.",
  },

  // Integrations → Crons
  {
    source: "hubspot", target: "cron_deal",
    relationship: "queried by",
    shortDesc: "Deal data for pipeline checks",
    description: "Deal Autopilot queries HubSpot API every morning for stale deals, missing follow-ups, and pipeline changes.",
  },
  {
    source: "github", target: "cron_gh_worker",
    relationship: "polled by",
    shortDesc: "Issue assignment polling",
    description: "GitHub Issue Worker polls TreasuryPath repos every 2 hours for issues assigned to clark-beep.",
  },
  {
    source: "google", target: "cron_inbox",
    relationship: "queried by",
    shortDesc: "Email triage via gog CLI",
    description: "Inbox Triage scans ea@treasurypath.com shared inbox via gog CLI for urgent messages.",
  },
  {
    source: "vanta", target: "cron_vanta",
    relationship: "monitored by",
    shortDesc: "Daily SOC 2 compliance check",
    description: "Vanta SOC 2 cron checks control pass/fail status daily and alerts on any regressions.",
  },
  {
    source: "slack", target: "cron_slack",
    relationship: "scanned by",
    shortDesc: "Channel message monitoring",
    description: "Slack Scan checks all TreasuryPath channels for messages needing Clark's attention or response.",
  },
  {
    source: "brave", target: "cron_ai_intel",
    relationship: "queried by",
    shortDesc: "Web search for AI news",
    description: "AI Agent Intel cron uses Brave Search API for daily industry news scanning.",
  },
  {
    source: "brave", target: "cron_content_intel",
    relationship: "queried by",
    shortDesc: "Web search for content topics",
    description: "Content Intel cron uses Brave Search to discover trending topics matching TreasuryPath content pillars.",
  },
  {
    source: "fathom", target: "cron_morning",
    relationship: "synced by",
    shortDesc: "Meeting transcript extraction",
    description: "Fathom Sync pulls recent meeting transcripts and extracts action items for the morning briefing.",
  },

  // Content pipeline
  {
    source: "cron_content_intel", target: "cron_content_draft",
    relationship: "feeds",
    shortDesc: "Intel → auto-drafted posts",
    description: "Content Intel discovers topics, Auto-Draft turns them into LinkedIn/Twitter posts following Jeff's voice guidelines.",
  },
  {
    source: "skill_content", target: "taplio",
    relationship: "publishes via",
    shortDesc: "LinkedIn scheduling",
    description: "Content skills schedule finished posts via Taplio API for LinkedIn publishing.",
  },
  {
    source: "skill_content", target: "typefully",
    relationship: "publishes via",
    shortDesc: "Twitter scheduling",
    description: "Content skills schedule finished posts via Typefully API for Twitter/X publishing.",
  },

  // Memory flows
  {
    source: "mem_daily", target: "cron_memory",
    relationship: "compacted by",
    shortDesc: "Weekly log → long-term distillation",
    description: "Memory Compaction reviews recent daily logs and distills significant events/lessons into MEMORY.md.",
  },
  {
    source: "mem_soul", target: "openclaw",
    relationship: "loaded by",
    shortDesc: "Identity injected every session",
    description: "SOUL.md and USER.md are loaded as system context at the start of every agent session.",
  },
  {
    source: "cron_security", target: "mem_daily",
    relationship: "logs to",
    shortDesc: "Audit results → daily log",
    description: "Security audit results are logged to memory/security-audits/ daily files for historical tracking.",
  },

  // Skills → Services
  {
    source: "skill_gtm", target: "hubspot",
    relationship: "operates on",
    shortDesc: "GTM skills use CRM data",
    description: "GTM pipeline skills use HubSpot for prospecting, pipeline management, deal tracking, and customer lifecycle operations.",
  },
  {
    source: "skill_csuite", target: "claude_opus",
    relationship: "invoked on",
    shortDesc: "Skills guide Opus reasoning",
    description: "C-Suite skills are instruction files that shape how Claude Opus reasons about strategic questions.",
  },

  // Infra connections
  {
    source: "docker", target: "openclaw",
    relationship: "sandboxes for",
    shortDesc: "Isolated cron execution",
    description: "Docker sandbox container provides isolated execution environment for cron jobs, preventing access to main system files.",
  },
  {
    source: "playwright", target: "openclaw",
    relationship: "controlled by",
    shortDesc: "Browser automation dispatch",
    description: "OpenClaw dispatches browser automation tasks (web scraping, form filling, API capture) via Playwright.",
  },
  {
    source: "ssh", target: "mac_mini",
    relationship: "accesses",
    shortDesc: "Jeff's MacBook remote access",
    description: "Jeff connects via SSH from his MacBook for Claude Code sessions and MCP tool access.",
  },

  // Repos
  {
    source: "repo_bt", target: "discord_compintel",
    relationship: "published to",
    shortDesc: "KB articles shared in Discord",
    description: "Knowledge base articles and competitive intelligence from business-tools are cross-posted to #competitive-intel.",
  },
];
