'use client';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { dashboardStats } from '@/lib/mock-data';

const statusColors: Record<string, string> = {
  TODO: '#c28efb',
  IN_PROGRESS: '#009fef',
  REVIEW: '#c28efb',
  DONE: '#66da85',
};

const statusLabels: Record<string, string> = {
  TODO: 'To Do',
  IN_PROGRESS: 'In Progress',
  REVIEW: 'Review',
  DONE: 'Done',
};

export default function StatusChart() {
  const total = dashboardStats.ticketsByStatus.reduce((sum, s) => sum + s.count, 0);

  return (
    <Paper sx={{ p: 2.5 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Tickets by Status
      </Typography>

      <Box sx={{ display: 'flex', gap: 0.5, mb: 2, borderRadius: 1, overflow: 'hidden', height: 8 }}>
        {dashboardStats.ticketsByStatus.map((item) => (
          <Box
            key={item.status}
            sx={{
              flex: item.count,
              backgroundColor: statusColors[item.status],
              borderRadius: 0.5,
            }}
          />
        ))}
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {dashboardStats.ticketsByStatus.map((item) => (
          <Box key={item.status} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: statusColors[item.status],
              }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {statusLabels[item.status]}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                fontFamily: '"JetBrains Mono", monospace',
              }}
            >
              {item.count}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
