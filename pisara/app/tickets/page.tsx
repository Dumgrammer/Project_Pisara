import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddOutlined from '@mui/icons-material/AddOutlined';
import { Suspense } from 'react';
import Skeleton from '@mui/material/Skeleton';
import TicketListClient from './TicketListClient';
import Link from '@/components/Link';

export default function TicketsPage() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h1">Tickets</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
            Manage and track all support tickets
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddOutlined />}
          component={Link}
          href="/tickets/new"
        >
          Create Ticket
        </Button>
      </Box>

      <Suspense
        fallback={
          <Box>
            <Skeleton variant="rectangular" height={48} sx={{ borderRadius: 1, mb: 2 }} />
            <Skeleton variant="rectangular" height={400} sx={{ borderRadius: 1.5 }} />
          </Box>
        }
      >
        <TicketListClient />
      </Suspense>
    </Box>
  );
}
