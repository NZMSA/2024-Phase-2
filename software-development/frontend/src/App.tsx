import React, { useState, useEffect } from "react";
import "./App.css";
import StudentDataGrid from "./Components/StudentDataGrid";
import AddStudentForm from "./Components/AddStudentForm";
import { CssBaseline, Container, Typography, Button } from "@mui/material";
import { getStudents, createStudent } from "./Services/StudentService";
import { Student } from "./Models/Students";

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const fetchStudents = async () => {
    try {
      const students = await getStudents();
      setStudents(students);
    } catch (err) {
      setError("Failed to fetch students");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleAddStudent = async (student: Omit<Student, "id">) => {
    try {
      await createStudent(student);
      fetchStudents();
      setIsFormOpen(false);
    } catch (err) {
      setError("Failed to add student");
    }
  };

  return (
    <>
      <CssBaseline />
      <Container>
        <Typography variant="h3" gutterBottom>
          Student Portal
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsFormOpen(true)}
        >
          Add Student
        </Button>
        <StudentDataGrid students={students} loading={loading} error={error} />
        <AddStudentForm
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onAddStudent={handleAddStudent}
        />
      </Container>
    </>
  );
};

export default App;
