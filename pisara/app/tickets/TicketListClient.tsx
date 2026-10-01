'use client';

import { useState, useMemo } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import FilterListOutlined from '@mui/icons-material/FilterListOutlined';
import { TicketStatusChip, PriorityChip } from '@/components/common/StatusChip';
import { tickets, type TicketStatus, type TicketPriority } from '@/lib/mock-data';
import Link from '@/components/Link';

export default function TicketListClient() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<TicketStatus | 'ALL'>('ALL');
  const [priorityFilter, setPriorityFilter] = useState<TicketPriority | 'ALL'>('ALL');

  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      if (search && !ticket.title.toLowerCase().includes(search.toLowerCase()) && !ticket.id.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
      if (statusFilter !== 'ALL' && ticket.status !== statusFilter) return false;
      if (priorityFilter !== 'ALL' && ticket.priority !== priorityFilter) return false;
      return true;
    });
  }, [search, statusFilter, priorityFilter]);

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 1.5, mb: 2, flexWrap: 'wrap' }}>
        <TextField
          placeholder="Search tickets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ minWidth: 280 }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined sx={{ fontSize: 18, color: 'text.disabled' }} />
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as TicketStatus | 'ALL')}
          sx={{ minWidth: 140 }}
          label="Status"
        >
          <MenuItem value="ALL">All Status</MenuItem>
          <MenuItem value="TODO">To Do</MenuItem>
          <MenuItem value="IN_PROGRESS">In Progress</MenuItem>
          <MenuItem value="REVIEW">In Review</MenuItem>
          <MenuItem value="DONE">Done</MenuItem>
        </TextField>
        <TextField
          select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value as TicketPriority | 'ALL')}
          sx={{ minWidth: 140 }}
          label="Priority"
        >
          <MenuItem value="ALL">All Priority</MenuItem>
          <MenuItem value="CRITICAL">Critical</MenuItem>
          <MenuItem value="HIGH">High</MenuItem>
          <MenuItem value="MEDIUM">Medium</MenuItem>
          <MenuItem value="LOW">Low</MenuItem>
        </TextField>
      </Box>

      <Paper sx={{ overflow: 'hidden' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 100 }}>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell sx={{ width: 140 }}>Project</TableCell>
                <TableCell sx={{ width: 100 }}>Priority</TableCell>
                <TableCell sx={{ width: 120 }}>Status</TableCell>
                <TableCell sx={{ width: 160 }}>Assignee</TableCell>
                <TableCell sx={{ width: 100 }}>Due Date</TableCell>
                <TableCell sx={{ width: 100 }}>Created</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTickets.map((ticket) => (
                <TableRow key={ticket.id} sx={{ '&:last-child td': { borderBottom: 0 } }}>
                  <TableCell>
                    <Typography
                      component={Link}
                      href={`/tickets/${ticket.id}`}
                      variant="caption"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                        fontFamily: '"JetBrains Mono", monospace',
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' },
                      }}
                    >
                      {ticket.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {ticket.title}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {ticket.projectName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <PriorityChip priority={ticket.priority} />
                  </TableCell>
                  <TableCell>
                    <TicketStatusChip status={ticket.status} />
                  </TableCell>
                  <TableCell>
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
                      <Typography variant="caption">{ticket.assigneeName}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {new Date(ticket.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {new Date(ticket.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
              {filteredTickets.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} sx={{ textAlign: 'center', py: 6 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      No tickets match your filters
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
