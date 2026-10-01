'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TicketStatusChip, PriorityChip } from '@/components/common/StatusChip';
import { tickets } from '@/lib/mock-data';
import Link from '@/components/Link';

const avatarTints = [
  { bg: 'oklch(66% 0.18 235)', fg: 'oklch(22% 0.05 235)' },
  { bg: 'oklch(68% 0.24 18)', fg: 'oklch(22% 0.06 18)' },
  { bg: 'oklch(66% 0.18 235 / 0.35)', fg: 'oklch(22% 0.05 235)' },
  { bg: 'oklch(74% 0.16 305)', fg: 'oklch(25% 0.06 305)' },
  { bg: 'oklch(80% 0.16 150)', fg: 'oklch(25% 0.05 150)' },
];

export default function RecentTicketsTable() {
  return (
    <Box
      sx={{
        backgroundColor: 'oklch(97% 0.012 95)',
        borderRadius: '8px',
        border: '1px solid oklch(20% 0.012 250 / 0.12)',
        boxShadow: '0 1px 0 oklch(20% 0.012 250 / 0.03)',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          px: 2.5,
          py: '14px',
          borderBottom: '1px solid oklch(20% 0.012 250 / 0.12)',
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.015em' }}>
          Assigned & unclaimed
        </Typography>
        <Typography
          sx={{
            fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
            fontSize: 11.5,
            color: 'oklch(20% 0.012 250 / 0.52)',
          }}
        >
          {tickets.length} open
        </Typography>
        <Box sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
          <Button variant="outlined" size="small">
            Newest
          </Button>
          <Button variant="outlined" size="small">
            Group: Service desk
          </Button>
        </Box>
      </Box>

      <Box sx={{ px: 1, pb: 1, overflowX: 'auto' }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Assignee</TableCell>
              <TableCell>Due</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((ticket, index) => {
              const tint = avatarTints[index % avatarTints.length];
              const overdue = ticket.priority === 'CRITICAL';
              return (
                <TableRow key={ticket.id} sx={{ '&:last-child td': { borderBottom: 0 } }}>
                  <TableCell>
                    <Typography
                      component={Link}
                      href={`/tickets/${ticket.id}`}
                      sx={{
                        fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
                        fontSize: 12.5,
                        fontWeight: 500,
                        color: 'oklch(20% 0.012 250 / 0.7)',
                        textDecoration: 'none',
                      }}
                    >
                      {ticket.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      component={Link}
                      href={`/tickets/${ticket.id}`}
                      sx={{
                        fontWeight: 500,
                        fontSize: 13.5,
                        color: 'inherit',
                        textDecoration: 'none',
                        '&:hover': { color: 'oklch(45% 0.15 235)' },
                      }}
                    >
                      {ticket.title}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <PriorityChip priority={ticket.priority} />
                  </TableCell>
                  <TableCell>
                    <TicketStatusChip status={ticket.status} />
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                      <Box
                        sx={{
                          width: 28,
                          height: 28,
                          borderRadius: '6px',
                          backgroundColor: tint.bg,
                          color: tint.fg,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 10.5,
                          fontWeight: 600,
                        }}
                      >
                        {ticket.assigneeAvatar}
                      </Box>
                      <Typography sx={{ fontSize: 13, color: 'oklch(20% 0.012 250 / 0.7)' }}>
                        {ticket.assigneeName}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
                        fontSize: 12,
                        color: overdue ? 'oklch(50% 0.2 18)' : 'oklch(20% 0.012 250 / 0.7)',
                        fontWeight: overdue ? 500 : 400,
                      }}
                    >
                      {overdue ? 'Overdue' : new Date(ticket.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}
