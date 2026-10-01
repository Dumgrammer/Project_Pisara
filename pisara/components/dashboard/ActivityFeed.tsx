'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { activities } from '@/lib/mock-data';
import Link from '@/components/Link';

const tints = [
  { bg: 'oklch(66% 0.18 235 / 0.35)', fg: 'oklch(22% 0.05 235)' },
  { bg: 'oklch(80% 0.16 150)', fg: 'oklch(25% 0.05 150)' },
  { bg: 'oklch(74% 0.16 305)', fg: 'oklch(25% 0.06 305)' },
  { bg: 'oklch(68% 0.24 18)', fg: 'oklch(22% 0.06 18)' },
  { bg: 'oklch(20% 0.012 250 / 0.12)', fg: 'oklch(20% 0.012 250)' },
];

function describe(activity: (typeof activities)[number]): string {
  switch (activity.type) {
    case 'TICKET_STATUS_CHANGED':
      return `moved ${activity.ticketId} to ${activity.metadata.to}`;
    case 'TICKET_COMMENT_ADDED':
      return `commented on ${activity.ticketId}`;
    case 'TICKET_ASSIGNED':
      return `assigned ${activity.ticketId}`;
    case 'TICKET_CREATED':
      return `opened ${activity.ticketId}`;
    case 'TICKET_PRIORITY_CHANGED':
      return `escalated ${activity.ticketId} to ${activity.metadata.to}`;
    default:
      return `updated ${activity.ticketId}`;
  }
}

export default function ActivityFeed() {
  return (
    <Box
      sx={{
        backgroundColor: 'oklch(97% 0.012 95)',
        borderRadius: '8px',
        border: '1px solid oklch(20% 0.012 250 / 0.12)',
        boxShadow: '0 1px 0 oklch(20% 0.012 250 / 0.03)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 1.5,
          px: 2.5,
          py: '14px',
          borderBottom: '1px solid oklch(20% 0.012 250 / 0.12)',
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.015em' }}>Activity</Typography>
        <Typography
          sx={{
            fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
            fontSize: 11.5,
            color: 'oklch(20% 0.012 250 / 0.52)',
          }}
        >
          live
        </Typography>
      </Box>
      <Box sx={{ px: 1.5, pt: 1, pb: 1.5, display: 'flex', flexDirection: 'column' }}>
        {activities.slice(0, 5).map((activity, index) => {
          const tint = tints[index % tints.length];
          const time = new Date(activity.createdAt).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          });
          return (
            <Box
              key={activity.id}
              sx={{
                display: 'grid',
                gridTemplateColumns: '30px 1fr',
                gap: '11px',
                px: 1,
                py: '11px',
                borderRadius: '14px',
                borderTop: index === 0 ? 'none' : '1px solid oklch(20% 0.012 250 / 0.1)',
                '&:hover': { backgroundColor: 'oklch(20% 0.012 250 / 0.04)' },
              }}
            >
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  backgroundColor: tint.bg,
                  color: tint.fg,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                {activity.userAvatar}
              </Box>
              <Box>
                <Typography sx={{ fontSize: 12.5, lineHeight: 1.5, color: 'oklch(20% 0.012 250 / 0.7)' }}>
                  <Box component="b" sx={{ color: 'oklch(20% 0.012 250)', fontWeight: 600 }}>
                    {activity.userName}
                  </Box>{' '}
                  {describe(activity)}
                </Typography>
                <Typography
                  sx={{
                    mt: '3px',
                    fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
                    fontSize: 10.5,
                    color: 'oklch(20% 0.012 250 / 0.52)',
                  }}
                >
                  {time}
                </Typography>
              </Box>
            </Box>
          );
        })}
        <Typography
          component={Link}
          href="/activity"
          sx={{
            display: 'block',
            textAlign: 'center',
            py: '10px',
            fontSize: 12.5,
            fontWeight: 500,
            color: 'oklch(66% 0.18 235)',
            textDecoration: 'none',
            borderRadius: '14px',
            '&:hover': { backgroundColor: 'oklch(66% 0.18 235 / 0.1)' },
          }}
        >
          View all activity
        </Typography>
      </Box>
    </Box>
  );
}
