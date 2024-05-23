import React, { useState } from "react";
import { Student } from "../Models/Students";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

interface AddStudentFormProps {
  open: boolean;
  onClose: () => void;
  onAddStudent: (student: Omit<Student, "id">) => void;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({
  open,
  onClose,
  onAddStudent,
}) => {
  const [student, setStudent] = useState<Omit<Student, "id">>({
    firstName: "",
    lastName: "",
    email: "",
    university: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent((prevStudent: any) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onAddStudent(student);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Student</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="First Name"
          name="firstName"
          fullWidth
          value={student.firstName}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Last Name"
          name="lastName"
          fullWidth
          value={student.lastName}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Email"
          name="email"
          fullWidth
          value={student.email}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="University"
          name="university"
          fullWidth
          value={student.university}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddStudentForm;
