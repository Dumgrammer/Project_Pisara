'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface StatCardProps {
  title: string;
  value: string | number;
  foot: string;
  pip: string;
  warn?: boolean;
}

export default function StatCard({ title, value, foot, pip, warn }: StatCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: 'oklch(97% 0.012 95)',
        borderRadius: '8px',
        border: '1px solid oklch(20% 0.012 250 / 0.12)',
        boxShadow: '0 1px 0 oklch(20% 0.012 250 / 0.03)',
        px: '18px',
        py: '18px',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
        <Box sx={{ width: 6, height: 6, borderRadius: '1px', backgroundColor: pip, flex: 'none' }} />
        <Typography
          sx={{
            fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
            fontSize: 11,
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            color: 'oklch(20% 0.012 250 / 0.52)',
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        sx={{
          mt: '10px',
          fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
          fontWeight: 500,
          fontSize: 28,
          letterSpacing: '-0.01em',
          lineHeight: 1,
        }}
      >
        {value}
      </Typography>
      <Typography
        sx={{
          mt: '10px',
          fontSize: 12.5,
          color: warn ? 'oklch(68% 0.24 18)' : 'oklch(20% 0.012 250 / 0.52)',
          fontWeight: warn ? 500 : 400,
        }}
      >
        {foot}
      </Typography>
    </Box>
  );
}
