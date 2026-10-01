import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddOutlined from '@mui/icons-material/AddOutlined';
import StatCard from '@/components/common/StatCard';
import RecentTicketsTable from '@/components/dashboard/RecentTicketsTable';
import ActivityFeed from '@/components/dashboard/ActivityFeed';
import Link from '@/components/Link';

export default function DashboardPage() {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2.5, mb: '22px' }}>
        <Box>
          <Typography variant="h1">Queue</Typography>
          <Typography sx={{ mt: '5px', fontSize: 14, color: 'oklch(20% 0.012 250 / 0.7)' }}>
            Tickets waiting on the service desk right now · updated 2 min ago
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href="/tickets/new"
          startIcon={<AddOutlined />}
          sx={{ ml: 'auto', px: '18px' }}
        >
          New ticket
        </Button>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(3, 1fr)', lg: 'repeat(5, minmax(0, 1fr))' },
          gap: '14px',
          mb: '22px',
        }}
      >
        <StatCard title="Open tickets" value={6} foot="+2 since yesterday 09:00" pip="oklch(66% 0.18 235)" />
        <StatCard title="In progress" value={3} foot="2 assigned to you" pip="oklch(66% 0.18 235)" />
        <StatCard title="Resolved today" value={2} foot="Median close 3h 10m" pip="oklch(80% 0.16 150)" />
        <StatCard title="Avg first response" value="2h 24m" foot="Target 2h 00m" pip="oklch(74% 0.16 305)" />
        <StatCard title="SLA breaches" value={1} foot="Needs attention today" pip="oklch(68% 0.24 18)" warn />
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1fr) 296px' },
          gap: '18px',
          alignItems: 'start',
        }}
      >
        <RecentTicketsTable />
        <ActivityFeed />
      </Box>
    </Box>
  );
}
