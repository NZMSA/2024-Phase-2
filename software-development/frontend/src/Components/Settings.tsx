import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  FormControlLabel,
  Switch,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useSettings } from "../Contexts/SettingsContext";

const Settings: React.FC = () => {
  const {
    isDarkTheme,
    toggleDarkTheme,
    userName,
    userRole,
    updateUserName,
    updateUserRole,
  } = useSettings();
  const [name, setName] = useState(userName);
  const [role, setRole] = useState(userRole);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSave = () => {
    updateUserName(name);
    updateUserRole(role);
    setOpenSnackbar(true); // Show the success message
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        <FormControlLabel
          control={<Switch checked={isDarkTheme} onChange={toggleDarkTheme} />}
          label="Dark Theme"
        />
        <Box mt={2}>
          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="dense"
          />
          <TextField
            label="Role"
            fullWidth
            value={role}
            onChange={(e) => setRole(e.target.value)}
            margin="dense"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            sx={{ mt: 2 }}
          >
            Save
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Settings saved successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Settings;
