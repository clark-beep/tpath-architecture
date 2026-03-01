/**
 * System Map Data Template
 *
 * Copy this file, rename to data-{project}.ts, and fill in your infrastructure.
 * Import from lib/mapConfig.ts.
 */

// ============================================================
// Types (also defined in app/map/types.ts — keep in sync)
// ============================================================

export interface MapNodeConfig {
  id: string;
  branch: string;
  nodeType: "root" | "branch" | "leaf";
  parentId: string | null;
  title: string;
  shortDesc: string;       // ≤80 chars, shown inline
  description: string;     // full, shown in detail panel
  icon: string;
  fields?: string[];
  editableIn?: string;
  visibility?: string;
  sortIndex: number;
}

export interface MapEdgeConfig {
  source: string;
  target: string;
  relationship: string;    // e.g. "reads", "feeds", "powers"
  shortDesc: string;       // ≤50 chars, shown on hover
  description: string;     // full, shown in panel
}

export interface BranchConfig {
  id: string;
  color: string;
  angle: number;           // radians
}

// ============================================================
// Configuration
// ============================================================

export const ROOT_NODE: MapNodeConfig = {
  id: "root",
  branch: "root",
  nodeType: "root",
  parentId: null,
  title: "Your Project",
  shortDesc: "One-sentence description",
  description: "Full description of what this system does.",
  icon: "🏛️",
  sortIndex: 0,
};

/**
 * Branches — top-level categories.
 *
 * Angles in radians. Common positions:
 *   -135° = upper-left  (-2.356)
 *    -75° = upper-right  (-1.309)
 *    -15° = right         (-0.262)
 *     45° = lower-right   (0.785)
 *    105° = lower          (1.833)
 *    165° = lower-left     (2.880)
 */
export const BRANCHES: BranchConfig[] = [
  { id: "database",     color: "#3b82f6", angle: -2.356 },
  { id: "services",     color: "#f97316", angle: -1.309 },
  { id: "frontend",     color: "#a855f7", angle: -0.262 },
  { id: "data-sources", color: "#64748b", angle:  0.785 },
  { id: "infra",        color: "#22c55e", angle:  1.833 },
];

export const NODES: MapNodeConfig[] = [
  ROOT_NODE,

  // ── Branch: database ──────────────────────────
  {
    id: "database", branch: "database", nodeType: "branch", parentId: "root",
    title: "Database", shortDesc: "Primary data store",
    description: "Your database description here.",
    icon: "🗄️", sortIndex: 0,
  },
  {
    id: "users", branch: "database", nodeType: "leaf", parentId: "database",
    title: "users", shortDesc: "User accounts, roles, settings",
    description: "User accounts table. Stores email, hashed password, role (admin/user/viewer), preferences JSON, created_at, last_login.",
    icon: "👤", sortIndex: 0,
  },

  // ── Branch: services ──────────────────────────
  {
    id: "services", branch: "services", nodeType: "branch", parentId: "root",
    title: "Services", shortDesc: "External integrations",
    description: "Third-party services and APIs the system depends on.",
    icon: "🔧", sortIndex: 0,
  },

  // Add more branches and leaves following this pattern...
];

export const CROSS_EDGES: MapEdgeConfig[] = [
  {
    source: "users", target: "services",
    relationship: "authenticates via",
    shortDesc: "Auth flow",
    description: "User login triggers OAuth flow through the auth service.",
  },
  // Add your cross-branch connections...
];
