'use client';

import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import ConfirmationNumberOutlined from '@mui/icons-material/ConfirmationNumberOutlined';
import FolderOutlined from '@mui/icons-material/FolderOutlined';
import GroupsOutlined from '@mui/icons-material/GroupsOutlined';
import PeopleOutlined from '@mui/icons-material/PeopleOutlined';
import BarChartOutlined from '@mui/icons-material/BarChartOutlined';
import HistoryOutlined from '@mui/icons-material/HistoryOutlined';
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import Link from '@/components/Link';
import { tickets } from '@/lib/mock-data';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: DashboardOutlined },
  { label: 'Tickets', href: '/tickets', icon: ConfirmationNumberOutlined, badge: String(tickets.length) },
  { label: 'Projects', href: '/projects', icon: FolderOutlined },
  { label: 'Teams', href: '/teams', icon: GroupsOutlined },
  { label: 'Users', href: '/users', icon: PeopleOutlined },
  { label: 'Analytics', href: '/analytics', icon: BarChartOutlined },
  { label: 'Activity', href: '/activity', icon: HistoryOutlined },
  { label: 'Notifications', href: '/notifications', icon: NotificationsOutlined },
  { label: 'Settings', href: '/settings', icon: SettingsOutlined },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <Box
      component="aside"
      sx={{
        width: 240,
        flexShrink: 0,
        backgroundColor: 'oklch(97% 0.012 95)',
        borderRight: '1px solid oklch(20% 0.012 250 / 0.12)',
        px: 2,
        py: '18px',
        display: 'flex',
        flexDirection: 'column',
        gap: '22px',
        position: 'sticky',
        top: 0,
        height: '100vh',
      }}
    >
      <Box
        component={Link}
        href="/"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '9px',
          px: 1,
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: '2px',
            backgroundColor: 'oklch(66% 0.18 235)',
            flex: 'none',
          }}
        />
        <Typography sx={{ fontWeight: 600, fontSize: 17, letterSpacing: '-0.01em' }}>
          Pisara
        </Typography>
      </Box>

      <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;
          return (
            <Box
              key={item.href}
              component={Link}
              href={item.href}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '11px',
                px: 1.5,
                py: '9px',
                borderRadius: '6px',
                textDecoration: 'none',
                color: isActive ? 'oklch(20% 0.012 250)' : 'oklch(20% 0.012 250 / 0.7)',
                fontSize: 14,
                fontWeight: isActive ? 600 : 500,
                backgroundColor: isActive ? 'oklch(66% 0.18 235 / 0.12)' : 'transparent',
                borderLeft: isActive ? '2px solid oklch(66% 0.18 235)' : '2px solid transparent',
                transition: 'background-color 120ms ease',
                '&:hover': {
                  backgroundColor: isActive
                    ? 'oklch(66% 0.18 235 / 0.12)'
                    : 'oklch(20% 0.012 250 / 0.05)',
                  color: 'oklch(20% 0.012 250)',
                },
              }}
            >
              <Icon sx={{ fontSize: 18 }} />
              {item.label}
              {item.badge && (
                <Box
                  component="span"
                  sx={{
                    ml: 'auto',
                    fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
                    fontSize: 11,
                    px: '6px',
                    py: '1px',
                    borderRadius: '3px',
                    border: '1px solid oklch(20% 0.012 250 / 0.12)',
                    color: isActive ? 'oklch(20% 0.012 250)' : 'oklch(20% 0.012 250 / 0.52)',
                    backgroundColor: isActive
                      ? 'oklch(66% 0.18 235 / 0.16)'
                      : 'oklch(20% 0.012 250 / 0.04)',
                  }}
                >
                  {item.badge}
                </Box>
              )}
            </Box>
          );
        })}
      </Box>

      <Typography
        sx={{
          mt: 'auto',
          px: 1.5,
          pt: 1.5,
          fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
          fontSize: 11,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          color: 'oklch(20% 0.012 250 / 0.52)',
          lineHeight: 1.5,
        }}
      >
        Service desk
        <br />
        Week 14 · 3 on shift
      </Typography>
    </Box>
  );
}
