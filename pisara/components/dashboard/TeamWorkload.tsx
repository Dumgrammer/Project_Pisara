'use client';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { dashboardStats } from '@/lib/mock-data';

export default function TeamWorkload() {
  const maxTickets = Math.max(...dashboardStats.teamWorkload.map((m) => m.tickets));

  return (
    <Paper sx={{ p: 2.5 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Team Workload
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 1 }}>
        {dashboardStats.teamWorkload.map((member) => (
          <Box
            key={member.name}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              minWidth: 80,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 120,
                borderRadius: 1,
                backgroundColor: 'rgba(26, 26, 46, 0.04)',
                display: 'flex',
                alignItems: 'flex-end',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: `${(member.tickets / maxTickets) * 100}%`,
                  backgroundColor: member.tickets >= 6 ? 'oklch(68% 0.24 18)' : 'oklch(66% 0.18 235)',
                  borderRadius: '2px 2px 0 0',
                  transition: 'height 200ms ease',
                }}
              />
            </Box>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                fontFamily: '"JetBrains Mono", monospace',
              }}
            >
              {member.tickets}
            </Typography>
            <Avatar
              sx={{
                width: 28,
                height: 28,
                fontSize: '0.625rem',
                fontWeight: 600,
                bgcolor: 'primary.light',
              }}
            >
              {member.name.split(' ').map(n => n[0]).join('')}
            </Avatar>
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                textAlign: 'center',
                fontSize: '0.6875rem',
                maxWidth: 80,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {member.name.split(' ')[0]}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
