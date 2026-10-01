import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ArrowBackOutlined from '@mui/icons-material/ArrowBackOutlined';
import { tickets, activities } from '@/lib/mock-data';
import { TicketStatusChip, PriorityChip } from '@/components/common/StatusChip';
import Link from '@/components/Link';

export default async function TicketDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ticket = tickets.find((t) => t.id === id);

  if (!ticket) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h3" sx={{ mb: 1 }}>Ticket not found</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          The ticket {id} does not exist.
        </Typography>
      </Box>
    );
  }

  const ticketActivities = activities.filter((a) => a.ticketId === ticket.id);

  return (
    <Box>
      <Button
        component={Link}
        href="/tickets"
        startIcon={<ArrowBackOutlined />}
        sx={{ mb: 2, color: 'text.secondary' }}
      >
        Back to tickets
      </Button>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontWeight: 600,
                  color: 'primary.main',
                }}
              >
                {ticket.id}
              </Typography>
              <TicketStatusChip status={ticket.status} />
              <PriorityChip priority={ticket.priority} />
            </Box>

            <Typography variant="h2" sx={{ mb: 2 }}>
              {ticket.title}
            </Typography>

            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
              {ticket.description}
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
              {ticket.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  variant="outlined"
                  sx={{
                    borderRadius: '3px',
                    fontSize: '0.6875rem',
                    height: 22,
                    borderColor: 'rgba(26, 26, 46, 0.12)',
                  }}
                />
              ))}
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" sx={{ mb: 2 }}>
              Activity
            </Typography>

            {ticketActivities.length === 0 ? (
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                No activity yet
              </Typography>
            ) : (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {ticketActivities.map((activity) => (
                  <Box key={activity.id} sx={{ display: 'flex', gap: 1.5 }}>
                    <Avatar
                      sx={{
                        width: 28,
                        height: 28,
                        fontSize: '0.625rem',
                        fontWeight: 600,
                        bgcolor: 'primary.light',
                      }}
                    >
                      {activity.userAvatar}
                    </Avatar>
                    <Box>
                      <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 600 }}>
                          {activity.userName}
                        </Box>
                        {' '}
                        {activity.type === 'TICKET_STATUS_CHANGED' && (
                          <>changed status from <strong>{activity.metadata.from}</strong> to <strong>{activity.metadata.to}</strong></>
                        )}
                        {activity.type === 'TICKET_COMMENT_ADDED' && 'added a comment'}
                        {activity.type === 'TICKET_PRIORITY_CHANGED' && (
                          <>changed priority from <strong>{activity.metadata.from}</strong> to <strong>{activity.metadata.to}</strong></>
                        )}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                        {new Date(activity.createdAt).toLocaleString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          hour: 'numeric',
                          minute: '2-digit',
                        })}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 2.5 }}>
            <Typography variant="overline" sx={{ color: 'text.secondary', mb: 2, display: 'block' }}>
              Properties
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}>
                  Status
                </Typography>
                <TicketStatusChip status={ticket.status} />
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}>
                  Priority
                </Typography>
                <PriorityChip priority={ticket.priority} />
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}>
                  Assignee
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar
                    sx={{
                      width: 24,
                      height: 24,
                      fontSize: '0.625rem',
                      fontWeight: 600,
                      bgcolor: 'primary.light',
                    }}
                  >
                    {ticket.assigneeAvatar}
                  </Avatar>
                  <Typography variant="body2">{ticket.assigneeName}</Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}>
                  Project
                </Typography>
                <Typography
                  component={Link}
                  href={`/projects/${ticket.projectId}`}
                  variant="body2"
                  sx={{
                    color: 'primary.main',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {ticket.projectName}
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}>
                  Due Date
                </Typography>
                <Typography variant="body2">
                  {new Date(ticket.dueDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}>
                  Created
                </Typography>
                <Typography variant="body2">
                  {new Date(ticket.createdAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
