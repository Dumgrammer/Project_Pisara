import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { users } from '@/lib/mock-data';

const roleColors: Record<string, string> = {
  Admin: '#ff3a5d',
  Lead: '#c28efb',
  Developer: '#009fef',
  Designer: '#c28efb',
  QA: '#66da85',
};

export default function UsersPage() {
  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h1">Users</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
          Team members and their roles
        </Typography>
      </Box>

      <Paper sx={{ overflow: 'hidden' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Team</TableCell>
                <TableCell align="right">Active Tickets</TableCell>
                <TableCell>Last Active</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} sx={{ '&:last-child td': { borderBottom: 0 } }}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar
                        sx={{
                          width: 32,
                          height: 32,
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          bgcolor: 'primary.light',
                        }}
                      >
                        {user.avatar}
                      </Avatar>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {user.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {user.email}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={user.role}
                      size="small"
                      sx={{
                        color: roleColors[user.role] || '#64607A',
                        backgroundColor: `${roleColors[user.role] || '#64607A'}14`,
                        fontWeight: 600,
                        fontSize: '0.6875rem',
                        height: 22,
                        borderRadius: '3px',
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption">{user.team}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="caption"
                      sx={{ fontWeight: 700, fontFamily: '"JetBrains Mono", monospace' }}
                    >
                      {user.activeTickets}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {user.lastActive}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
