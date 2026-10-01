import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import StatCard from '@/components/common/StatCard';
import { dashboardStats, projects, tickets } from '@/lib/mock-data';

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

export default function AnalyticsPage() {
  const totalTickets = tickets.length;
  const completedTickets = tickets.filter((t) => t.status === 'DONE').length;
  const completionRate = Math.round((completedTickets / totalTickets) * 100);

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h1">Analytics</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
          Insights across tickets, projects, and team performance
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Completion rate"
            value={`${completionRate}%`}
            foot="Closed tickets in the current set"
            pip="oklch(80% 0.16 150)"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Avg resolution"
            value="2.4h"
            foot="Target 4h 00m"
            pip="oklch(74% 0.16 305)"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="SLA compliance"
            value="94.2%"
            foot="One breach still open"
            pip="oklch(68% 0.24 18)"
            warn
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Throughput"
            value="8.3"
            foot="Tickets closed this week"
            pip="oklch(66% 0.18 235)"
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2.5 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Status Distribution
            </Typography>
            {dashboardStats.ticketsByStatus.map((item) => {
              const pct = Math.round((item.count / totalTickets) * 100);
              return (
                <Box key={item.status} sx={{ mb: 1.5 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {statusLabels[item.status]}
                    </Typography>
                    <Typography variant="caption" sx={{ fontFamily: '"JetBrains Mono", monospace', fontWeight: 700 }}>
                      {item.count} ({pct}%)
                    </Typography>
                  </Box>
                  <Box sx={{ height: 8, borderRadius: 1, backgroundColor: 'rgba(26,26,46,0.04)', overflow: 'hidden' }}>
                    <Box
                      sx={{
                        height: '100%',
                        width: `${pct}%`,
                        backgroundColor: statusColors[item.status],
                        borderRadius: 1,
                      }}
                    />
                  </Box>
                </Box>
              );
            })}
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2.5 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Project Progress
            </Typography>
            {projects.map((project) => {
              const pct = project.ticketCount > 0
                ? Math.round((project.completedTickets / project.ticketCount) * 100)
                : 0;
              return (
                <Box key={project.id} sx={{ mb: 1.5 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {project.name}
                    </Typography>
                    <Typography variant="caption" sx={{ fontFamily: '"JetBrains Mono", monospace', fontWeight: 700 }}>
                      {project.completedTickets}/{project.ticketCount}
                    </Typography>
                  </Box>
                  <Box sx={{ height: 8, borderRadius: 1, backgroundColor: 'rgba(26,26,46,0.04)', overflow: 'hidden' }}>
                    <Box
                      sx={{
                        height: '100%',
                        width: `${pct}%`,
                        backgroundColor: pct === 100 ? '#2A9D6E' : '#2A9DC2',
                        borderRadius: 1,
                      }}
                    />
                  </Box>
                </Box>
              );
            })}
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Paper sx={{ p: 2.5 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Tickets by Assignee
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {dashboardStats.teamWorkload.map((member) => (
                <Paper
                  key={member.name}
                  elevation={0}
                  sx={{
                    p: 2,
                    flex: '1 1 140px',
                    textAlign: 'center',
                    backgroundColor: 'rgba(26, 26, 46, 0.02)',
                    border: '1px solid rgba(26, 26, 46, 0.06)',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      fontFamily: '"JetBrains Mono", monospace',
                      color: member.tickets >= 6 ? 'warning.main' : 'text.primary',
                    }}
                  >
                    {member.tickets}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {member.name}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
