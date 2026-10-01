import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

export default function SettingsPage() {
  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h1">Settings</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
          Manage your account and application preferences
        </Typography>
      </Box>

      <Paper sx={{ p: 3, maxWidth: 640, mb: 3 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Profile
        </Typography>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField label="First name" defaultValue="Ana" fullWidth />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField label="Last name" defaultValue="Santos" fullWidth />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField label="Email" defaultValue="ana@pisara.dev" fullWidth />
          </Grid>
        </Grid>

        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="secondary" size="small">
            Save changes
          </Button>
        </Box>
      </Paper>

      <Paper sx={{ p: 3, maxWidth: 640 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Notification Preferences
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Configure which events trigger notifications. This will be connected to the backend notification service.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body2" sx={{ color: 'text.disabled', fontStyle: 'italic' }}>
          Notification preferences will be available once the backend is connected.
        </Typography>
      </Paper>
    </Box>
  );
}
