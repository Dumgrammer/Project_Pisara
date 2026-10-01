'use client';

import Box from '@mui/material/Box';
import type { TicketStatus, TicketPriority, ProjectStatus } from '@/lib/mock-data';

const statusConfig: Record<TicketStatus, { label: string; bg: string; color: string; pip: string }> = {
  TODO: {
    label: 'To do',
    bg: 'transparent',
    color: 'oklch(20% 0.012 250)',
    pip: 'oklch(74% 0.16 305)',
  },
  IN_PROGRESS: {
    label: 'In progress',
    bg: 'oklch(20% 0.012 250 / 0.05)',
    color: 'oklch(20% 0.012 250)',
    pip: 'oklch(66% 0.18 235)',
  },
  REVIEW: {
    label: 'Review',
    bg: 'transparent',
    color: 'oklch(20% 0.012 250 / 0.7)',
    pip: 'oklch(74% 0.16 305)',
  },
  DONE: {
    label: 'Done',
    bg: 'oklch(80% 0.16 150 / 0.16)',
    color: 'oklch(32% 0.08 150)',
    pip: 'oklch(80% 0.16 150)',
  },
};

const priorityConfig: Record<TicketPriority, { label: string; color: string; pip: string }> = {
  CRITICAL: { label: 'Critical', color: 'oklch(50% 0.2 18)', pip: 'oklch(68% 0.24 18)' },
  HIGH: { label: 'High', color: 'oklch(20% 0.012 250)', pip: 'oklch(68% 0.24 18)' },
  MEDIUM: { label: 'Medium', color: 'oklch(20% 0.012 250 / 0.7)', pip: 'oklch(74% 0.16 305)' },
  LOW: { label: 'Low', color: 'oklch(20% 0.012 250 / 0.52)', pip: 'oklch(20% 0.012 250 / 0.22)' },
};

const projectStatusConfig: Record<ProjectStatus, { label: string; bg: string; color: string; pip: string }> = {
  PLANNING: { ...statusConfig.TODO, label: 'Planning' },
  ACTIVE: { ...statusConfig.IN_PROGRESS, label: 'Active' },
  ON_HOLD: { ...statusConfig.REVIEW, label: 'On hold' },
  COMPLETED: { ...statusConfig.DONE, label: 'Completed' },
};

function Tag({ label, bg, color, pip }: { label: string; bg: string; color: string; pip: string }) {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        borderRadius: '3px',
        px: '7px',
        py: '3px',
        fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
        fontSize: 10.5,
        fontWeight: 500,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        backgroundColor: bg,
        color,
        border: '1px solid oklch(20% 0.012 250 / 0.22)',
        whiteSpace: 'nowrap',
      }}
    >
      <Box component="span" sx={{ width: 5, height: 5, borderRadius: '1px', backgroundColor: pip }} />
      {label}
    </Box>
  );
}

export function TicketStatusChip({ status }: { status: TicketStatus }) {
  return <Tag {...statusConfig[status]} />;
}

export function PriorityChip({ priority }: { priority: TicketPriority }) {
  const config = priorityConfig[priority];
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: config.color,
        whiteSpace: 'nowrap',
      }}
    >
      <Box component="span" sx={{ width: 6, height: 6, borderRadius: '1px', backgroundColor: config.pip }} />
      {config.label}
    </Box>
  );
}

export function ProjectStatusChip({ status }: { status: ProjectStatus }) {
  const config = projectStatusConfig[status];
  return <Tag label={config.label} bg={config.bg} color={config.color} pip={config.pip} />;
}
