import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  CssBaseline,
  Box,
  Toolbar,
  Typography,
  IconButton,
  ThemeProvider,
  createTheme,
  AppBar,
  Button,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Components/Sidebar";
import StudentDataGrid from "./Components/StudentDataGrid";
import AddStudentForm from "./Components/AddStudentForm";
import Settings from "./Components/Settings";
import ExcelImport from "./Components/ExcelImport";
import { getStudents, createStudent } from "./Services/StudentService";
import { Students } from "./Models/Students";
import { SettingsProvider, useSettings } from "./Contexts/SettingsContext";

const drawerWidth = 240;

const AppContent: React.FC = () => {
  const [students, setStudents] = useState<Students[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const fetchStudents = async () => {
    try {
      const students = await getStudents();
      setStudents(students);
    } catch (err) {
      setError("Failed to fetch students, check if server is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleAddStudent = async (student: Omit<Students, "id">) => {
    try {
      const newStudent = await createStudent(student);
      setStudents((prev) => [...prev, newStudent]);
      setIsFormOpen(false);
    } catch (err) {
      setError("Failed to add student");
    }
  };

  const handleDataLoaded = (data: Students[]) => {
    setStudents(data);
  };

  const { isDrawerOpen, toggleDrawer, isDarkTheme } = useSettings();

  const theme = createTheme({
    palette: {
      mode: isDarkTheme ? "dark" : "light",
      primary: {
        main: "#5c2d91",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Student Portal
            </Typography>
          </Toolbar>
        </AppBar>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            transition: (theme) =>
              theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
            ...(isDrawerOpen && {
              marginLeft: 0,
              transition: (theme) =>
                theme.transitions.create("margin", {
                  easing: theme.transitions.easing.easeOut,
                  duration: theme.transitions.duration.enteringScreen,
                }),
            }),
          }}
        >
          <Toolbar />
          <Container>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Box mb={2}>
                      <Typography variant="h4" gutterBottom>
                        Student List
                      </Typography>
                      <Box display="flex" gap={2} mb={2}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => setIsFormOpen(true)}
                        >
                          Add Student
                        </Button>
                        <ExcelImport onDataLoaded={handleDataLoaded} />
                      </Box>
                      <StudentDataGrid
                        students={students}
                        setStudents={setStudents}
                        loading={loading}
                        error={error}
                      />
                    </Box>
                    <AddStudentForm
                      open={isFormOpen}
                      onClose={() => setIsFormOpen(false)}
                      onAddStudent={handleAddStudent}
                    />
                  </>
                }
              />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

const App: React.FC = () => (
  <SettingsProvider>
    <Router>
      <AppContent />
    </Router>
  </SettingsProvider>
);

export default App;
