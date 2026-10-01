'use client';

import { createTheme } from '@mui/material/styles';

const paper = 'oklch(97% 0.012 95)';
const paper2 = 'oklch(94% 0.016 95)';
const ink = 'oklch(20% 0.012 250)';
const cyan = 'oklch(66% 0.18 235)';
const cyanHover = 'oklch(60% 0.18 235)';
const coral = 'oklch(68% 0.24 18)';
const mint = 'oklch(80% 0.16 150)';
const lavender = 'oklch(74% 0.16 305)';
const border = 'oklch(20% 0.012 250 / 0.12)';
const borderStrong = 'oklch(20% 0.012 250 / 0.22)';

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    background: {
      default: '#f7f5ec',
      paper: '#eeebdf',
    },
    text: {
      primary: '#12171b',
      secondary: 'rgba(18, 23, 27, 0.7)',
      disabled: 'rgba(18, 23, 27, 0.52)',
    },
    primary: {
      main: '#009fef',
      contrastText: '#12171b',
    },
    secondary: {
      main: '#12171b',
      contrastText: '#f7f5ec',
    },
    error: { main: '#ff3a5d' },
    warning: { main: '#ff3a5d' },
    success: { main: '#66da85', contrastText: '#12301a' },
    info: { main: '#c28efb', contrastText: '#2a1840' },
    divider: 'rgba(18, 23, 27, 0.12)',
  },
  typography: {
    fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", system-ui, sans-serif',
    h1: {
      fontSize: '2.125rem',
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: '-0.025em',
    },
    h2: { fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.02em' },
    h3: { fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.015em' },
    h4: { fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.015em' },
    h5: { fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.015em' },
    body1: { fontSize: '0.875rem', letterSpacing: '0.005em' },
    body2: { fontSize: '0.84375rem' },
    caption: { fontSize: '0.75rem' },
    button: { fontWeight: 600, letterSpacing: '0.01em', textTransform: 'none' },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: paper,
          color: ink,
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: 'none',
          minHeight: 40,
          transition: 'background-color 120ms ease, border-color 120ms ease',
        },
        containedPrimary: {
          backgroundColor: cyan,
          color: ink,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: cyanHover,
            boxShadow: 'none',
          },
        },
        containedSecondary: {
          backgroundColor: ink,
          color: paper,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: 'oklch(28% 0.012 250)',
            boxShadow: 'none',
          },
        },
        outlined: {
          borderColor: borderStrong,
          color: ink,
          '&:hover': {
            borderColor: ink,
            backgroundColor: 'oklch(20% 0.012 250 / 0.05)',
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: paper,
          borderRadius: 8,
          border: `1px solid ${border}`,
          boxShadow: '0 1px 0 oklch(20% 0.012 250 / 0.03)',
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: paper,
          borderRadius: 8,
          border: `1px solid ${border}`,
          boxShadow: '0 1px 0 oklch(20% 0.012 250 / 0.03)',
          transition: 'background-color 120ms ease',
          '&:hover': {
            backgroundColor: paper2,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          backgroundColor: paper,
          '& fieldset': { borderColor: border },
          '&:hover fieldset': { borderColor: borderStrong },
          '&.Mui-focused fieldset': {
            borderColor: cyan,
            boxShadow: '0 0 0 2px oklch(66% 0.18 235 / 0.15)',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontFamily: 'var(--font-mono), "JetBrains Mono", ui-monospace, monospace',
          fontWeight: 500,
          fontSize: '0.66rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'oklch(20% 0.012 250 / 0.52)',
          borderBottom: `1px solid ${border}`,
          backgroundColor: 'transparent',
        },
        body: {
          borderColor: border,
          fontSize: '0.84375rem',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'oklch(20% 0.012 250 / 0.028)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          fontWeight: 500,
          fontFamily: 'var(--font-mono), "JetBrains Mono", ui-monospace, monospace',
          fontSize: '0.66rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        },
      },
    },
  },
});

export { paper, paper2, ink, cyan, cyanHover, coral, mint, lavender, border, borderStrong };
export default theme;
