import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import { projects } from '@/lib/mock-data';
import { ProjectStatusChip } from '@/components/common/StatusChip';
import Link from '@/components/Link';

export default function ProjectsPage() {
  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h1">Projects</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
          All team projects and their progress
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {projects.map((project) => {
          const progress = project.ticketCount > 0
            ? Math.round((project.completedTickets / project.ticketCount) * 100)
            : 0;

          return (
            <Grid key={project.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <Paper
                component={Link}
                href={`/projects/${project.id}`}
                sx={{
                  p: 2.5,
                  display: 'block',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  '&:hover': {
                    boxShadow: '0px 4px 12px rgba(26, 26, 46, 0.06), 0px 12px 28px rgba(26, 26, 46, 0.04)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    {project.name}
                  </Typography>
                  <ProjectStatusChip status={project.status} />
                </Box>

                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, minHeight: 40 }}>
                  {project.description}
                </Typography>

                <Box sx={{ mb: 1.5 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      Progress
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ fontWeight: 600, fontFamily: '"JetBrains Mono", monospace' }}
                    >
                      {progress}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: 'rgba(26, 26, 46, 0.06)',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 2,
                        backgroundColor: progress === 100 ? 'success.main' : 'primary.main',
                      },
                    }}
                  />
                </Box>

                <Box sx={{ display: 'flex', gap: 3 }}>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ fontWeight: 700, fontFamily: '"JetBrains Mono", monospace', display: 'block' }}
                    >
                      {project.ticketCount}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.6875rem' }}>
                      tickets
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ fontWeight: 700, fontFamily: '"JetBrains Mono", monospace', display: 'block' }}
                    >
                      {project.memberCount}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.6875rem' }}>
                      members
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
