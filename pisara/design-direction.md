# Pisara — UI Design Direction

> **Superseded for implementation by [`design.md`](design.md).**
> That file locks the current system: cream paper, cyan primary (no yellow),
> 6–8px radii, hairline panels. Keep this document as research history only.

> Synthesized from OpenDesign research across Linear, Intercom, Notion,
> Dashboard (cloud-platform), and Neutral Modern design systems.
> This document guided early frontend decisions; do not copy yellow/pill tokens from below.


---

## 1. Design Research Summary

### References Studied

| Reference | Category | Key Takeaway |
|-----------|----------|--------------|
| **Linear** | Project management | Ultra-minimal dark UI, purple accent, 510-weight Inter, semi-transparent borders, luminance-stacking elevation |
| **Intercom** | Customer messaging / helpdesk | Warm off-white canvas, sharp 4px radius buttons, scale hover, SaansMono uppercase labels, report-color palette |
| **Notion** | Workspace / productivity | Warm minimalism, whisper-thin borders (`rgba(0,0,0,0.1)`), multi-layer low-opacity shadows, warm gray scale |
| **Dashboard** | Cloud platform | Dark surface (`#09090B`), IBM Plex Sans, status-color system (success/warning/danger), modular grids |
| **Neutral Modern** | B2B default | Content-first, cobalt accent, 12-col grid, two elevation levels only, Inter font |

### Extracted Design Patterns

**Navigation (from Linear + Intercom)**
- Fixed left sidebar rail with icon + label navigation
- Collapsible to icon-only on smaller viewports
- Active state: accent-colored background pill or left border indicator
- Top bar: search trigger (Cmd+K style), notifications, user avatar

**Data Display (from Linear + Dashboard + Notion)**
- KPI stat cards: large metric number + label + trend indicator
- Tables: clean rows, no heavy zebra striping, hover highlight
- Status chips: colored pills with semantic meaning
- Charts: minimal chrome, data-first, muted gridlines

**Cards & Containers (from Notion + Linear)**
- Whisper-thin borders: `1px solid` at low opacity
- Multi-layer low-opacity shadows for natural depth
- Generous internal padding (16-24px)
- Consistent border radius throughout

**Interaction (from Intercom + Linear)**
- Subtle hover state changes (background opacity shift, not dramatic)
- Focus rings for accessibility
- Loading skeletons matching layout dimensions
- Snackbar for undo/error only (silent success)

---

## 2. Pisara Design Identity

### Personality
Professional, warm, scannable. Not cold enterprise — not playful toy.
A tool that feels trustworthy at scale but approachable for small teams.

### Design Register
**Warm Professional** — cream-toned surfaces with controlled accent colors.
Rounded but not bubbly. Data-dense but not cluttered.

### What Makes Pisara Distinct
- Warm cream canvas instead of stark white or pure dark
- Multi-accent system: pear-yellow highlight, sky-cyan primary action, coral-red alerts
- Plus Jakarta Sans throughout (geometric, friendly, professional)
- Rounded cards (16px radius) with soft shadows
- Spring easing on micro-interactions

---

## 3. Color System

### MUI Theme Palette

```
// Light mode (primary)
background.default:  #FAF8F5   // warm cream canvas
background.paper:    #FFFFFF   // card surfaces
text.primary:        #1A1A2E   // near-black, slight blue undertone
text.secondary:      #64607A   // warm muted purple-gray
text.disabled:       #A09CB0   // light muted

// Primary (sky-cyan — main actions, active states)
primary.main:        #2A9DC2   // sky-cyan
primary.light:       #5BB8D6
primary.dark:        #1B7A9A
primary.contrastText:#FFFFFF

// Secondary (pear-yellow — highlights, badges, accents)
secondary.main:      #D4A843   // warm pear-yellow
secondary.light:     #E4C06A
secondary.dark:      #B08A2E
secondary.contrastText:#1A1A2E

// Error (coral-red — critical, danger, overdue)
error.main:          #D94452
error.light:         #E5737E
error.dark:          #B83240

// Warning (amber — pending, approaching SLA)
warning.main:        #E5A529
warning.light:       #F0C05A
warning.dark:        #C48B18

// Success (teal-green — resolved, completed)
success.main:        #2A9D6E
success.light:       #5BB894
success.dark:        #1B7A54

// Info (slate-blue — informational, neutral status)
info.main:           #5B6BC2
info.light:          #8290D6
info.dark:           #3F4FA6

// Divider & borders
divider:             rgba(26, 26, 46, 0.08)

// Action states
action.hover:        rgba(42, 157, 194, 0.04)
action.selected:     rgba(42, 157, 194, 0.08)
action.focus:        rgba(42, 157, 194, 0.12)
```

### Semantic Status Colors (for tickets)

| Status | Color | Token |
|--------|-------|-------|
| TODO | `#8290D6` (info.light) | Slate blue pill |
| IN_PROGRESS | `#2A9DC2` (primary.main) | Cyan pill |
| REVIEW | `#E5A529` (warning.main) | Amber pill |
| DONE | `#2A9D6E` (success.main) | Green pill |
| BLOCKED | `#D94452` (error.main) | Red pill |

### Priority Colors

| Priority | Color | Chip Style |
|----------|-------|------------|
| CRITICAL | `#D94452` | Filled red chip |
| HIGH | `#E5A529` | Filled amber chip |
| MEDIUM | `#2A9DC2` | Outlined cyan chip |
| LOW | `#A09CB0` | Outlined gray chip |

---

## 4. Typography

### Font Stack
```
fontFamily: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
monoFontFamily: '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace'
```

### MUI Typography Variants

| Variant | Size | Weight | Line Height | Letter Spacing | Use |
|---------|------|--------|-------------|----------------|-----|
| h1 | 32px | 600 | 1.2 | -0.02em | Page titles |
| h2 | 24px | 600 | 1.25 | -0.015em | Section headings |
| h3 | 20px | 600 | 1.3 | -0.01em | Card titles |
| h4 | 18px | 600 | 1.35 | normal | Sub-section titles |
| h5 | 16px | 600 | 1.4 | normal | Widget titles |
| h6 | 14px | 600 | 1.4 | normal | Small headings |
| body1 | 15px | 400 | 1.6 | normal | Standard body |
| body2 | 13px | 400 | 1.5 | normal | Secondary body |
| subtitle1 | 15px | 500 | 1.5 | normal | Emphasized body |
| subtitle2 | 13px | 500 | 1.5 | normal | Labels |
| caption | 12px | 400 | 1.4 | 0.01em | Metadata, timestamps |
| overline | 11px | 600 | 1.4 | 0.08em | Uppercase labels |
| button | 14px | 600 | 1.4 | 0.01em | Button text |

### Data Display
- KPI metrics: 28-32px, weight 700, JetBrains Mono
- Table headers: 12px, weight 600, uppercase, letter-spacing 0.06em
- Table cells: 13-14px, weight 400

---

## 5. Spacing & Layout

### Base Grid
8px base unit. Named tokens:

| Token | Value | Use |
|-------|-------|-----|
| xs | 4px | Inline element gaps |
| sm | 8px | Compact element spacing |
| md | 16px | Standard padding, card gaps |
| lg | 24px | Section padding |
| xl | 32px | Major section separation |
| 2xl | 48px | Page-level vertical rhythm |

### App Shell Layout
```
┌──────────────────────────────────────────────┐
│ Top Bar (56px height)                        │
├────────┬─────────────────────────────────────┤
│        │                                     │
│ Side   │  Main Content Area                  │
│ Rail   │  (scrollable)                       │
│ (240px │                                     │
│  or    │  max-width: 1400px                  │
│  64px  │  padding: 24px                      │
│  icon) │                                     │
│        │                                     │
├────────┴─────────────────────────────────────┤
│ (no footer in app views)                     │
└──────────────────────────────────────────────┘
```

- Sidebar: 240px expanded, 64px collapsed (icon only)
- Top bar: 56px height, fixed
- Content area: 24px padding, fluid width
- Dashboard grid: CSS Grid or MUI Grid2, 16px gap
- Max content width: 1400px (centered in large viewports)

---

## 6. Component Styling (MUI Overrides)

### Border Radius Scale
```
shape.borderRadius: 8   // MUI default base
--radius-sm:    6px      // Chips, small badges
--radius-md:    8px      // Buttons, inputs
--radius-lg:    12px     // Cards, dialogs
--radius-xl:    16px     // Feature cards, panels
--radius-pill:  999px    // Pills, status badges
```

### Cards (MUI Paper)
```
background: #FFFFFF
border: 1px solid rgba(26, 26, 46, 0.06)
borderRadius: 12px
boxShadow: 0px 1px 3px rgba(26, 26, 46, 0.04),
            0px 4px 12px rgba(26, 26, 46, 0.02)
padding: 20px
```
Hover state: shadow intensifies slightly, no motion.

### Buttons
- **Primary (Contained)**: sky-cyan fill, white text, 8px radius, 600 weight
- **Secondary (Outlined)**: 1px cyan border, cyan text, transparent fill
- **Tertiary (Text)**: no border, cyan text, hover background shift
- **Danger**: coral-red fill for destructive actions only
- All buttons: 10px vertical padding, 20px horizontal, no uppercase transform

### Chips (Status/Priority)
```
// Status chip
borderRadius: 999px
padding: 2px 10px
fontSize: 12px
fontWeight: 600
height: 24px

// Filled variant: background is status color at 100%, white text
// Soft variant: background is status color at 12% opacity, status color text
```

### Data Grid (MUI X DataGrid)
```
border: none
background: transparent
'& .MuiDataGrid-columnHeaders':
  background: rgba(26, 26, 46, 0.03)
  borderBottom: 1px solid rgba(26, 26, 46, 0.08)
  fontSize: 12px
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.06em
  color: text.secondary

'& .MuiDataGrid-row':
  borderBottom: 1px solid rgba(26, 26, 46, 0.04)
  '&:hover':
    background: rgba(42, 157, 194, 0.03)

'& .MuiDataGrid-cell':
  fontSize: 13px
  padding: 12px 16px
```

### Inputs (TextField)
```
borderRadius: 8px
border: 1px solid rgba(26, 26, 46, 0.12)
background: #FFFFFF
fontSize: 15px
padding: 10px 14px

// Focus state
borderColor: primary.main
boxShadow: 0 0 0 3px rgba(42, 157, 194, 0.12)
```

### Navigation Sidebar
```
// Container
background: #FFFFFF (or #FAF8F5 for subtle warmth)
borderRight: 1px solid rgba(26, 26, 46, 0.06)
width: 240px (expanded) / 64px (collapsed)

// Nav item
padding: 8px 12px
borderRadius: 8px
fontSize: 14px
fontWeight: 500
color: text.secondary

// Active nav item
background: rgba(42, 157, 194, 0.08)
color: primary.main
fontWeight: 600
```

### Top Bar
```
background: #FFFFFF
borderBottom: 1px solid rgba(26, 26, 46, 0.06)
height: 56px
padding: 0 24px
display: flex
alignItems: center
justifyContent: space-between
```

---

## 7. Elevation & Depth

Two primary elevation levels (adapted from Neutral Modern simplicity):

| Level | Shadow | Use |
|-------|--------|-----|
| **Flat (0)** | None | Page background, inline elements |
| **Card (1)** | `0 1px 3px rgba(26,26,46,0.04), 0 4px 12px rgba(26,26,46,0.02)` | Cards, panels, sidebar |
| **Elevated (2)** | `0 4px 12px rgba(26,26,46,0.06), 0 12px 28px rgba(26,26,46,0.04)` | Dropdowns, popovers, dialogs |
| **Modal (3)** | `0 8px 24px rgba(26,26,46,0.08), 0 24px 48px rgba(26,26,46,0.06)` | Modal dialogs, command palette |

Overlay backdrop: `rgba(26, 26, 46, 0.4)`

---

## 8. Page Layout Specifications

### Dashboard (`/dashboard`)
```
Grid layout:
Row 1: [KPI Card] [KPI Card] [KPI Card] [KPI Card] [KPI Card]
Row 2: [Status Chart (span 3)] [Priority Chart (span 2)]
Row 3: [Recent Tickets Table (span 3)] [Activity Feed (span 2)]
Row 4: [Team Workload (span 5)]
```

### Ticket List (`/tickets`)
```
┌─────────────────────────────────────────────┐
│ Tickets                        [+ Create]   │
├─────────────────────────────────────────────┤
│ [Search] [Status ▼] [Priority ▼] [Assignee]│
├─────────────────────────────────────────────┤
│ DataGrid with columns:                      │
│ ID | Title | Project | Priority | Status |  │
│ Assignee | Due Date | Created              │
└─────────────────────────────────────────────┘
```

### Ticket Detail (`/tickets/[id]`)
```
┌─────────────────────────┬───────────────────┐
│ Ticket Title             │ Properties Panel  │
│ Description (editable)   │ Status: [pill]    │
│                          │ Priority: [chip]  │
│ Activity Timeline        │ Assignee: [avatar]│
│ └─ Status changed...     │ Project: [link]   │
│ └─ Comment added...      │ Due Date: [date]  │
│ └─ Assigned to...        │ Tags: [chips]     │
│                          │ Created: [time]   │
│ [Add Comment]            │ Updated: [time]   │
└─────────────────────────┴───────────────────┘
```

### Create Ticket (`/tickets/new` or Dialog)
```
Dialog or full page:
- Title (required)
- Description (textarea)
- Project (select)
- Assignee (select with avatar)
- Priority (select with color indicators)
- Status (select)
- Due Date (date picker)
- Tags (multi-select / chip input)
```

### Analytics (`/analytics`)
```
Row 1: [Completion Rate] [Avg Resolution Time] [SLA Compliance]
Row 2: [Tickets Over Time line chart (span 3)]
Row 3: [By Status donut] [By Priority bar] [By Assignee bar]
Row 4: [By Project horizontal bar (span 3)]
```

### User Management (`/users`)
```
DataGrid: Name | Email | Role | Team | Active Tickets | Last Active
Actions: Edit role, Deactivate
```

### Teams (`/teams`)
```
Card grid: Team cards showing name, member count, active tickets
Click → Team detail with member list + team analytics
```

---

## 9. Iconography

Use `@mui/icons-material` throughout. Preferred icon style: **Outlined**.

| Context | Icon |
|---------|------|
| Dashboard | DashboardOutlined |
| Tickets | ConfirmationNumberOutlined |
| Projects | FolderOutlined |
| Teams | GroupsOutlined |
| Users | PeopleOutlined |
| Analytics | BarChartOutlined |
| Activity | HistoryOutlined |
| Notifications | NotificationsOutlined |
| Settings | SettingsOutlined |
| Search | SearchOutlined |
| Create | AddOutlined |
| Filter | FilterListOutlined |
| Sort | SortOutlined |

---

## 10. Motion & Interaction

### Easing
```
--ease-default: cubic-bezier(0.4, 0, 0.2, 1)    // MUI standard
--ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1) // Pisara spring
```

### Durations
- Hover states: 150ms
- Panel open/close: 200ms
- Page transitions: 250ms
- Drawer slide: 225ms (MUI default)

### Principles
- Silent success: no toast on save unless undo is available
- Skeleton loading: match layout dimensions exactly
- Optimistic updates where safe (status changes)
- Error snackbar: coral-red, bottom-left, auto-dismiss 6s

---

## 11. Dark Mode (Future)

The color system is designed to support dark mode later:
```
background.default:  #1A1A2E
background.paper:    #252540
text.primary:        #F0EDE8
text.secondary:      #9A96B0
divider:             rgba(240, 237, 232, 0.08)
```
All semantic status/priority colors remain the same.

---

## 12. Anti-Patterns

- Do NOT use pure black (#000000) for text
- Do NOT use pure white (#FFFFFF) for page background (use #FAF8F5)
- Do NOT use more than 2 accent colors in a single view
- Do NOT add decorative gradients
- Do NOT use heavy borders (>1px or >10% opacity)
- Do NOT uppercase button text (sentence case always)
- Do NOT use zebra striping on tables (hover highlight only)
- Do NOT show success toasts for routine operations
- Do NOT use serif fonts anywhere
- Do NOT use icon-only buttons without tooltips
