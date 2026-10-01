export type TicketStatus = 'TODO' | 'IN_PROGRESS' | 'REVIEW' | 'DONE';
export type TicketPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
export type ProjectStatus = 'PLANNING' | 'ACTIVE' | 'ON_HOLD' | 'COMPLETED';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  team: string;
  avatar: string;
  activeTickets: number;
  lastActive: string;
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  projectId: string;
  projectName: string;
  assigneeId: string;
  assigneeName: string;
  assigneeAvatar: string;
  status: TicketStatus;
  priority: TicketPriority;
  dueDate: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  priority: TicketPriority;
  memberCount: number;
  ticketCount: number;
  completedTickets: number;
  createdAt: string;
}

export interface Activity {
  id: string;
  type: string;
  ticketId: string;
  ticketTitle: string;
  userId: string;
  userName: string;
  userAvatar: string;
  metadata: Record<string, string>;
  createdAt: string;
}

export const users: User[] = [
  { id: 'u1', name: 'Ana Santos', email: 'ana@pisara.dev', role: 'Admin', team: 'Engineering', avatar: 'AS', activeTickets: 5, lastActive: '2 min ago' },
  { id: 'u2', name: 'Marco Reyes', email: 'marco@pisara.dev', role: 'Lead', team: 'Engineering', avatar: 'MR', activeTickets: 3, lastActive: '15 min ago' },
  { id: 'u3', name: 'Sofia Cruz', email: 'sofia@pisara.dev', role: 'Developer', team: 'Frontend', avatar: 'SC', activeTickets: 7, lastActive: '1 hr ago' },
  { id: 'u4', name: 'Diego Torres', email: 'diego@pisara.dev', role: 'Developer', team: 'Backend', avatar: 'DT', activeTickets: 4, lastActive: '30 min ago' },
  { id: 'u5', name: 'Luna Garcia', email: 'luna@pisara.dev', role: 'Designer', team: 'Design', avatar: 'LG', activeTickets: 2, lastActive: '3 hr ago' },
  { id: 'u6', name: 'Carlos Mendoza', email: 'carlos@pisara.dev', role: 'QA', team: 'Quality', avatar: 'CM', activeTickets: 6, lastActive: '45 min ago' },
];

export const projects: Project[] = [
  { id: 'p1', name: 'API Gateway Migration', description: 'Migrate from Express to NestJS gateway', status: 'ACTIVE', priority: 'HIGH', memberCount: 4, ticketCount: 18, completedTickets: 11, createdAt: '2026-08-15' },
  { id: 'p2', name: 'Dashboard Redesign', description: 'Redesign the analytics dashboard with new design system', status: 'ACTIVE', priority: 'MEDIUM', memberCount: 3, ticketCount: 12, completedTickets: 5, createdAt: '2026-09-01' },
  { id: 'p3', name: 'Auth Service v2', description: 'Implement OAuth 2.0 and SSO support', status: 'PLANNING', priority: 'CRITICAL', memberCount: 2, ticketCount: 8, completedTickets: 0, createdAt: '2026-09-20' },
  { id: 'p4', name: 'Mobile App Beta', description: 'React Native mobile application', status: 'ON_HOLD', priority: 'LOW', memberCount: 2, ticketCount: 24, completedTickets: 16, createdAt: '2026-07-10' },
  { id: 'p5', name: 'CI/CD Pipeline', description: 'Set up automated testing and deployment', status: 'COMPLETED', priority: 'HIGH', memberCount: 3, ticketCount: 10, completedTickets: 10, createdAt: '2026-06-01' },
];

export const tickets: Ticket[] = [
  { id: 'TKT-001', title: 'Fix authentication timeout on production', description: 'Users report being logged out after 5 minutes', projectId: 'p1', projectName: 'API Gateway Migration', assigneeId: 'u2', assigneeName: 'Marco Reyes', assigneeAvatar: 'MR', status: 'IN_PROGRESS', priority: 'CRITICAL', dueDate: '2026-10-02', tags: ['bug', 'auth'], createdAt: '2026-09-28T10:30:00Z', updatedAt: '2026-09-30T14:20:00Z' },
  { id: 'TKT-002', title: 'Implement rate limiting middleware', description: 'Add configurable rate limiting for all API endpoints', projectId: 'p1', projectName: 'API Gateway Migration', assigneeId: 'u4', assigneeName: 'Diego Torres', assigneeAvatar: 'DT', status: 'REVIEW', priority: 'HIGH', dueDate: '2026-10-05', tags: ['feature', 'security'], createdAt: '2026-09-25T09:00:00Z', updatedAt: '2026-09-30T11:45:00Z' },
  { id: 'TKT-003', title: 'Design new ticket detail view', description: 'Create mockups for the redesigned ticket detail page', projectId: 'p2', projectName: 'Dashboard Redesign', assigneeId: 'u5', assigneeName: 'Luna Garcia', assigneeAvatar: 'LG', status: 'IN_PROGRESS', priority: 'MEDIUM', dueDate: '2026-10-08', tags: ['design', 'ui'], createdAt: '2026-09-29T08:15:00Z', updatedAt: '2026-09-30T16:00:00Z' },
  { id: 'TKT-004', title: 'Add WebSocket support for real-time updates', description: 'Implement WebSocket connections for live ticket updates', projectId: 'p1', projectName: 'API Gateway Migration', assigneeId: 'u3', assigneeName: 'Sofia Cruz', assigneeAvatar: 'SC', status: 'TODO', priority: 'MEDIUM', dueDate: '2026-10-12', tags: ['feature', 'real-time'], createdAt: '2026-09-30T07:00:00Z', updatedAt: '2026-09-30T07:00:00Z' },
  { id: 'TKT-005', title: 'Write E2E tests for login flow', description: 'Cover happy path and error scenarios with Playwright', projectId: 'p3', projectName: 'Auth Service v2', assigneeId: 'u6', assigneeName: 'Carlos Mendoza', assigneeAvatar: 'CM', status: 'TODO', priority: 'HIGH', dueDate: '2026-10-10', tags: ['testing', 'auth'], createdAt: '2026-09-29T14:30:00Z', updatedAt: '2026-09-29T14:30:00Z' },
  { id: 'TKT-006', title: 'Optimize MongoDB aggregation queries', description: 'Dashboard queries taking >3s, need index review', projectId: 'p2', projectName: 'Dashboard Redesign', assigneeId: 'u4', assigneeName: 'Diego Torres', assigneeAvatar: 'DT', status: 'IN_PROGRESS', priority: 'HIGH', dueDate: '2026-10-03', tags: ['performance', 'database'], createdAt: '2026-09-27T11:00:00Z', updatedAt: '2026-09-30T09:30:00Z' },
  { id: 'TKT-007', title: 'Update user avatar upload component', description: 'Support drag-and-drop and image cropping', projectId: 'p2', projectName: 'Dashboard Redesign', assigneeId: 'u3', assigneeName: 'Sofia Cruz', assigneeAvatar: 'SC', status: 'DONE', priority: 'LOW', dueDate: '2026-09-30', tags: ['feature', 'ui'], createdAt: '2026-09-20T13:00:00Z', updatedAt: '2026-09-29T17:45:00Z' },
  { id: 'TKT-008', title: 'Set up Sentry error tracking', description: 'Integrate Sentry for production error monitoring', projectId: 'p1', projectName: 'API Gateway Migration', assigneeId: 'u1', assigneeName: 'Ana Santos', assigneeAvatar: 'AS', status: 'DONE', priority: 'MEDIUM', dueDate: '2026-09-28', tags: ['devops', 'monitoring'], createdAt: '2026-09-18T10:00:00Z', updatedAt: '2026-09-28T15:00:00Z' },
  { id: 'TKT-009', title: 'Implement SSO with Google Workspace', description: 'Add Google OAuth as SSO provider for enterprise users', projectId: 'p3', projectName: 'Auth Service v2', assigneeId: 'u2', assigneeName: 'Marco Reyes', assigneeAvatar: 'MR', status: 'TODO', priority: 'CRITICAL', dueDate: '2026-10-15', tags: ['feature', 'auth', 'enterprise'], createdAt: '2026-09-30T08:00:00Z', updatedAt: '2026-09-30T08:00:00Z' },
  { id: 'TKT-010', title: 'Fix responsive layout on ticket list', description: 'DataGrid columns overlap on tablet viewports', projectId: 'p2', projectName: 'Dashboard Redesign', assigneeId: 'u3', assigneeName: 'Sofia Cruz', assigneeAvatar: 'SC', status: 'REVIEW', priority: 'LOW', dueDate: '2026-10-06', tags: ['bug', 'responsive'], createdAt: '2026-09-28T16:00:00Z', updatedAt: '2026-09-30T13:15:00Z' },
];

export const activities: Activity[] = [
  { id: 'a1', type: 'TICKET_STATUS_CHANGED', ticketId: 'TKT-001', ticketTitle: 'Fix authentication timeout on production', userId: 'u2', userName: 'Marco Reyes', userAvatar: 'MR', metadata: { from: 'TODO', to: 'IN_PROGRESS' }, createdAt: '2026-09-30T14:20:00Z' },
  { id: 'a2', type: 'TICKET_COMMENT_ADDED', ticketId: 'TKT-002', ticketTitle: 'Implement rate limiting middleware', userId: 'u4', userName: 'Diego Torres', userAvatar: 'DT', metadata: { comment: 'Ready for code review' }, createdAt: '2026-09-30T11:45:00Z' },
  { id: 'a3', type: 'TICKET_ASSIGNED', ticketId: 'TKT-006', ticketTitle: 'Optimize MongoDB aggregation queries', userId: 'u1', userName: 'Ana Santos', userAvatar: 'AS', metadata: { assignee: 'Diego Torres' }, createdAt: '2026-09-30T09:30:00Z' },
  { id: 'a4', type: 'TICKET_CREATED', ticketId: 'TKT-009', ticketTitle: 'Implement SSO with Google Workspace', userId: 'u2', userName: 'Marco Reyes', userAvatar: 'MR', metadata: {}, createdAt: '2026-09-30T08:00:00Z' },
  { id: 'a5', type: 'TICKET_STATUS_CHANGED', ticketId: 'TKT-007', ticketTitle: 'Update user avatar upload component', userId: 'u3', userName: 'Sofia Cruz', userAvatar: 'SC', metadata: { from: 'REVIEW', to: 'DONE' }, createdAt: '2026-09-29T17:45:00Z' },
  { id: 'a6', type: 'TICKET_PRIORITY_CHANGED', ticketId: 'TKT-001', ticketTitle: 'Fix authentication timeout on production', userId: 'u1', userName: 'Ana Santos', userAvatar: 'AS', metadata: { from: 'HIGH', to: 'CRITICAL' }, createdAt: '2026-09-29T16:00:00Z' },
  { id: 'a7', type: 'TICKET_COMMENT_ADDED', ticketId: 'TKT-003', ticketTitle: 'Design new ticket detail view', userId: 'u5', userName: 'Luna Garcia', userAvatar: 'LG', metadata: { comment: 'First draft wireframes attached' }, createdAt: '2026-09-29T15:30:00Z' },
  { id: 'a8', type: 'TICKET_CREATED', ticketId: 'TKT-005', ticketTitle: 'Write E2E tests for login flow', userId: 'u6', userName: 'Carlos Mendoza', userAvatar: 'CM', metadata: {}, createdAt: '2026-09-29T14:30:00Z' },
];

export const dashboardStats = {
  openTickets: 6,
  inProgress: 3,
  resolvedToday: 2,
  avgResponseTime: '2.4h',
  slaCompliance: 94.2,
  ticketsByStatus: [
    { status: 'TODO', count: 3 },
    { status: 'IN_PROGRESS', count: 3 },
    { status: 'REVIEW', count: 2 },
    { status: 'DONE', count: 2 },
  ],
  ticketsByPriority: [
    { priority: 'CRITICAL', count: 2 },
    { priority: 'HIGH', count: 3 },
    { priority: 'MEDIUM', count: 3 },
    { priority: 'LOW', count: 2 },
  ],
  teamWorkload: [
    { name: 'Ana Santos', tickets: 5 },
    { name: 'Marco Reyes', tickets: 3 },
    { name: 'Sofia Cruz', tickets: 7 },
    { name: 'Diego Torres', tickets: 4 },
    { name: 'Luna Garcia', tickets: 2 },
    { name: 'Carlos Mendoza', tickets: 6 },
  ],
};
