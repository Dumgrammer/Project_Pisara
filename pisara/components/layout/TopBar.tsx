'use client';

import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import FilterListOutlined from '@mui/icons-material/FilterListOutlined';
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined';
import Link from '@/components/Link';

export default function TopBar() {
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: 'oklch(97% 0.012 95)',
        borderBottom: '1px solid oklch(20% 0.012 250 / 0.12)',
        px: 3,
        py: 0,
        minHeight: 56,
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        position: 'sticky',
        top: 0,
        zIndex: 20,
      }}
    >
      <Box
        sx={{
          flex: 1,
          maxWidth: 460,
          display: 'flex',
          alignItems: 'center',
          gap: '9px',
          backgroundColor: 'oklch(97% 0.012 95)',
          border: '1px solid oklch(20% 0.012 250 / 0.12)',
          borderRadius: '6px',
          px: '14px',
          height: 40,
          '&:focus-within': {
            borderColor: 'oklch(66% 0.18 235)',
            boxShadow: '0 0 0 2px oklch(66% 0.18 235 / 0.15)',
          },
        }}
      >
        <SearchOutlined sx={{ fontSize: 17, color: 'oklch(20% 0.012 250 / 0.52)' }} />
        <InputBase placeholder="Search tickets" sx={{ flex: 1, fontSize: 14 }} />
        <Box
          component="kbd"
          sx={{
            fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
            fontSize: 11,
            color: 'oklch(20% 0.012 250 / 0.52)',
            border: '1px solid oklch(20% 0.012 250 / 0.22)',
            borderRadius: '4px',
            px: '6px',
            py: '2px',
            backgroundColor: 'oklch(94% 0.016 95)',
          }}
        >
          /
        </Box>
      </Box>

      <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 1.25 }}>
        <Button
          variant="outlined"
          component={Link}
          href="/tickets"
          startIcon={<FilterListOutlined sx={{ fontSize: 15 }} />}
          sx={{ px: 2, fontSize: 13 }}
        >
          Filter
        </Button>
        <Box
          component={Link}
          href="/notifications"
          aria-label="Notifications"
          sx={{
            width: 40,
            height: 40,
            borderRadius: '6px',
            border: '1px solid oklch(20% 0.012 250 / 0.22)',
            backgroundColor: 'transparent',
            color: 'oklch(20% 0.012 250 / 0.7)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            textDecoration: 'none',
            transition: 'background-color 120ms ease',
            '&:hover': { backgroundColor: 'oklch(20% 0.012 250 / 0.05)' },
          }}
        >
          <NotificationsOutlined sx={{ fontSize: 18 }} />
          <Box
            sx={{
              position: 'absolute',
              top: 9,
              right: 10,
              width: 8,
              height: 8,
              borderRadius: '1px',
              backgroundColor: 'oklch(68% 0.24 18)',
              boxShadow: '0 0 0 2px oklch(97% 0.012 95)',
            }}
          />
        </Box>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: '6px',
            backgroundColor: 'oklch(74% 0.16 305 / 0.28)',
            color: 'oklch(32% 0.08 305)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
            fontWeight: 600,
            fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
          }}
        >
          AR
        </Box>
      </Box>
    </Box>
  );
}
