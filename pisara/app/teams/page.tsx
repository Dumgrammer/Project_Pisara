import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { users } from '@/lib/mock-data';

const teams = [
  { name: 'Engineering', description: 'Core platform development', color: '#009fef' },
  { name: 'Frontend', description: 'Web and mobile UI', color: '#c28efb' },
  { name: 'Backend', description: 'APIs and infrastructure', color: '#66da85' },
  { name: 'Design', description: 'Product design and UX', color: '#009fef' },
  { name: 'Quality', description: 'QA and testing', color: '#ff3a5d' },
];

export default function TeamsPage() {
  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h1">Teams</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
          Organization teams and members
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {teams.map((team) => {
          const members = users.filter((u) => u.team === team.name);
          const totalTickets = members.reduce((sum, m) => sum + m.activeTickets, 0);

          return (
            <Grid key={team.name} size={{ xs: 12, sm: 6, lg: 4 }}>
              <Paper
                sx={{
                  p: 2.5,
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: '0px 4px 12px rgba(26, 26, 46, 0.06), 0px 12px 28px rgba(26, 26, 46, 0.04)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      backgroundColor: team.color,
                    }}
                  />
                  <Typography variant="h4">{team.name}</Typography>
                </Box>

                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  {team.description}
                </Typography>

                <AvatarGroup max={4} sx={{ mb: 2, justifyContent: 'flex-start' }}>
                  {members.map((member) => (
                    <Avatar
                      key={member.id}
                      sx={{
                        width: 28,
                        height: 28,
                        fontSize: '0.625rem',
                        fontWeight: 600,
                        bgcolor: team.color,
                      }}
                    >
                      {member.avatar}
                    </Avatar>
                  ))}
                </AvatarGroup>

                <Box sx={{ display: 'flex', gap: 3 }}>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ fontWeight: 700, fontFamily: '"JetBrains Mono", monospace', display: 'block' }}
                    >
                      {members.length}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.6875rem' }}>
                      members
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ fontWeight: 700, fontFamily: '"JetBrains Mono", monospace', display: 'block' }}
                    >
                      {totalTickets}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.6875rem' }}>
                      active tickets
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
