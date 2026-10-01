'use client';

import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '240px minmax(0, 1fr)',
        minHeight: '100vh',
        backgroundColor: 'oklch(97% 0.012 95)',
      }}
    >
      <Sidebar />
      <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <TopBar />
        <Box component="main" sx={{ p: 3, backgroundColor: 'oklch(97% 0.012 95)' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
