import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import ArrowBackOutlined from '@mui/icons-material/ArrowBackOutlined';
import { projects, tickets } from '@/lib/mock-data';
import { ProjectStatusChip, TicketStatusChip, PriorityChip } from '@/components/common/StatusChip';
import Link from '@/components/Link';

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h3">Project not found</Typography>
      </Box>
    );
  }

  const projectTickets = tickets.filter((t) => t.projectId === project.id);
  const progress = project.ticketCount > 0
    ? Math.round((project.completedTickets / project.ticketCount) * 100)
    : 0;

  return (
    <Box>
      <Button
        component={Link}
        href="/projects"
        startIcon={<ArrowBackOutlined />}
        sx={{ mb: 2, color: 'text.secondary' }}
      >
        Back to projects
      </Button>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box>
            <Typography variant="h2">{project.name}</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mt: 0.5 }}>
              {project.description}
            </Typography>
          </Box>
          <ProjectStatusChip status={project.status} />
        </Box>

        <Grid container spacing={3} sx={{ mb: 2 }}>
          <Grid size={{ xs: 6, sm: 3 }}>
            <Typography variant="overline" sx={{ color: 'text.secondary' }}>Tickets</Typography>
            <Typography sx={{ fontWeight: 700, fontFamily: '"JetBrains Mono", monospace', fontSize: '1.25rem' }}>
              {project.ticketCount}
            </Typography>
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <Typography variant="overline" sx={{ color: 'text.secondary' }}>Completed</Typography>
            <Typography sx={{ fontWeight: 700, fontFamily: '"JetBrains Mono", monospace', fontSize: '1.25rem' }}>
              {project.completedTickets}
            </Typography>
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <Typography variant="overline" sx={{ color: 'text.secondary' }}>Members</Typography>
            <Typography sx={{ fontWeight: 700, fontFamily: '"JetBrains Mono", monospace', fontSize: '1.25rem' }}>
              {project.memberCount}
            </Typography>
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <Typography variant="overline" sx={{ color: 'text.secondary' }}>Progress</Typography>
            <Typography sx={{ fontWeight: 700, fontFamily: '"JetBrains Mono", monospace', fontSize: '1.25rem' }}>
              {progress}%
            </Typography>
          </Grid>
        </Grid>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 6,
            borderRadius: 3,
            backgroundColor: 'rgba(26, 26, 46, 0.06)',
            '& .MuiLinearProgress-bar': {
              borderRadius: 3,
              backgroundColor: progress === 100 ? 'success.main' : 'primary.main',
            },
          }}
        />
      </Paper>

      <Typography variant="h4" sx={{ mb: 2 }}>
        Tickets ({projectTickets.length})
      </Typography>

      {projectTickets.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            No tickets in this project yet
          </Typography>
        </Paper>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {projectTickets.map((ticket) => (
            <Paper
              key={ticket.id}
              component={Link}
              href={`/tickets/${ticket.id}`}
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                textDecoration: 'none',
                color: 'inherit',
                '&:hover': { backgroundColor: 'rgba(42, 157, 194, 0.02)' },
              }}
            >
              <Typography
                variant="caption"
                sx={{ fontFamily: '"JetBrains Mono", monospace', fontWeight: 600, color: 'primary.main', minWidth: 72 }}
              >
                {ticket.id}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500, flex: 1 }}>
                {ticket.title}
              </Typography>
              <PriorityChip priority={ticket.priority} />
              <TicketStatusChip status={ticket.status} />
            </Paper>
          ))}
        </Box>
      )}
    </Box>
  );
}
