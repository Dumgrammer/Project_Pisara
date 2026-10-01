'use client';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { dashboardStats } from '@/lib/mock-data';

const priorityColors: Record<string, string> = {
  CRITICAL: '#ff3a5d',
  HIGH: '#ff3a5d',
  MEDIUM: '#009fef',
  LOW: '#8a9096',
};

export default function PriorityChart() {
  const maxCount = Math.max(...dashboardStats.ticketsByPriority.map((p) => p.count));

  return (
    <Paper sx={{ p: 2.5 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        By Priority
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {dashboardStats.ticketsByPriority.map((item) => (
          <Box key={item.priority}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <Typography variant="caption" sx={{ fontWeight: 500 }}>
                {item.priority.charAt(0) + item.priority.slice(1).toLowerCase()}
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
            <Box
              sx={{
                height: 6,
                borderRadius: 0.5,
                backgroundColor: 'rgba(26, 26, 46, 0.04)',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  height: '100%',
                  width: `${(item.count / maxCount) * 100}%`,
                  backgroundColor: priorityColors[item.priority],
                  borderRadius: 0.5,
                  transition: 'width 200ms ease',
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
