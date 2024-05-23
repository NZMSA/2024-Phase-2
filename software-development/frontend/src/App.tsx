import React, { useState } from "react";
import "./App.css";
import StudentList from "./Components/StudentList";
import AddStudentForm from "./Components/AddStudentForm";
import { CssBaseline, Container, Typography, Button } from "@mui/material";
import { useStudents } from "./Hooks/useStudents";
import { Student } from "./Models/Students";

const App: React.FC = () => {
  const { students, loading, error, addStudent } = useStudents();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddStudent = (student: Omit<Student, "id">) => {
    addStudent(student);
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
        <StudentList students={students} loading={loading} error={error} />
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
