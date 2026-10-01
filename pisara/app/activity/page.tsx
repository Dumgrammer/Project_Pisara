import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { activities } from '@/lib/mock-data';
import Link from '@/components/Link';

const typeConfig: Record<string, { label: string; color: string }> = {
  TICKET_STATUS_CHANGED: { label: 'Status Changed', color: '#009fef' },
  TICKET_COMMENT_ADDED: { label: 'Comment', color: '#c28efb' },
  TICKET_ASSIGNED: { label: 'Assigned', color: '#009fef' },
  TICKET_CREATED: { label: 'Created', color: '#66da85' },
  TICKET_PRIORITY_CHANGED: { label: 'Priority Changed', color: '#ff3a5d' },
};

function getDescription(activity: typeof activities[0]): string {
  switch (activity.type) {
    case 'TICKET_STATUS_CHANGED':
      return `changed status from ${activity.metadata.from} to ${activity.metadata.to}`;
    case 'TICKET_COMMENT_ADDED':
      return `commented: "${activity.metadata.comment}"`;
    case 'TICKET_ASSIGNED':
      return `assigned to ${activity.metadata.assignee}`;
    case 'TICKET_CREATED':
      return 'created this ticket';
    case 'TICKET_PRIORITY_CHANGED':
      return `changed priority from ${activity.metadata.from} to ${activity.metadata.to}`;
    default:
      return 'performed an action';
  }
}

export default function ActivityPage() {
  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h1">Activity History</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
          Recent actions across all tickets
        </Typography>
      </Box>

      <Paper sx={{ overflow: 'hidden', maxWidth: 800 }}>
        {activities.map((activity, i) => {
          const config = typeConfig[activity.type] || { label: 'Action', color: '#64607A' };

          return (
            <Box
              key={activity.id}
              sx={{
                px: 3,
                py: 2,
                display: 'flex',
                gap: 2,
                alignItems: 'flex-start',
                borderBottom: i < activities.length - 1 ? '1px solid rgba(26, 26, 46, 0.06)' : 'none',
                '&:hover': { backgroundColor: 'rgba(42, 157, 194, 0.02)' },
              }}
            >
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  bgcolor: 'primary.light',
                  mt: 0.25,
                }}
              >
                {activity.userAvatar}
              </Avatar>

              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                  <Typography variant="subtitle2">{activity.userName}</Typography>
                  <Chip
                    label={config.label}
                    size="small"
                    sx={{
                      height: 20,
                      fontSize: '0.625rem',
                      fontWeight: 600,
                      color: config.color,
                      backgroundColor: `${config.color}14`,
                      borderRadius: '3px',
                    }}
                  />
                </Box>

                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  {getDescription(activity)}
                </Typography>

                <Typography
                  component={Link}
                  href={`/tickets/${activity.ticketId}`}
                  variant="caption"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {activity.ticketId}: {activity.ticketTitle}
                </Typography>
              </Box>

              <Typography variant="caption" sx={{ color: 'text.disabled', whiteSpace: 'nowrap' }}>
                {new Date(activity.createdAt).toLocaleString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: '2-digit',
                })}
              </Typography>
            </Box>
          );
        })}
      </Paper>
    </Box>
  );
}
