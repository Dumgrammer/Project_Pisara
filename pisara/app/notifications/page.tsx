import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import DoneAllOutlined from '@mui/icons-material/DoneAllOutlined';
import Link from '@/components/Link';

const notifications = [
  { id: 'n1', title: 'TKT-001 marked as Critical', description: 'Ana Santos escalated "Fix authentication timeout on production"', time: '2 hours ago', read: false, ticketId: 'TKT-001', userAvatar: 'AS' },
  { id: 'n2', title: 'New comment on TKT-002', description: 'Diego Torres: "Ready for code review"', time: '5 hours ago', read: false, ticketId: 'TKT-002', userAvatar: 'DT' },
  { id: 'n3', title: 'TKT-007 resolved', description: 'Sofia Cruz marked "Update user avatar upload component" as Done', time: '1 day ago', read: true, ticketId: 'TKT-007', userAvatar: 'SC' },
  { id: 'n4', title: 'Assigned to TKT-006', description: 'You were assigned to "Optimize MongoDB aggregation queries"', time: '1 day ago', read: true, ticketId: 'TKT-006', userAvatar: 'AS' },
  { id: 'n5', title: 'TKT-009 created', description: 'Marco Reyes created "Implement SSO with Google Workspace"', time: '2 days ago', read: true, ticketId: 'TKT-009', userAvatar: 'MR' },
];

export default function NotificationsPage() {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h1">Notifications</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
            {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
          </Typography>
        </Box>
        <Button variant="outlined" startIcon={<DoneAllOutlined />} size="small">
          Mark all read
        </Button>
      </Box>

      <Paper sx={{ overflow: 'hidden', maxWidth: 720 }}>
        {notifications.map((notification, i) => (
          <Box
            key={notification.id}
            component={Link}
            href={`/tickets/${notification.ticketId}`}
            sx={{
              px: 3,
              py: 2,
              display: 'flex',
              gap: 2,
              alignItems: 'flex-start',
              textDecoration: 'none',
              color: 'inherit',
              backgroundColor: notification.read ? 'transparent' : 'rgba(42, 157, 194, 0.03)',
              borderBottom: i < notifications.length - 1 ? '1px solid rgba(26, 26, 46, 0.06)' : 'none',
              borderLeft: notification.read ? 'none' : '3px solid',
              borderLeftColor: notification.read ? 'transparent' : 'primary.main',
              '&:hover': { backgroundColor: 'rgba(42, 157, 194, 0.05)' },
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
              {notification.userAvatar}
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: notification.read ? 500 : 600 }}>
                {notification.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.25 }}>
                {notification.description}
              </Typography>
            </Box>
            <Typography variant="caption" sx={{ color: 'text.disabled', whiteSpace: 'nowrap' }}>
              {notification.time}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Box>
  );
}
