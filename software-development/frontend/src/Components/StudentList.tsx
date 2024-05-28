import React from "react";
import { Students } from "../Models/Students";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  CircularProgress,
  Container,
} from "@mui/material";

interface StudentListProps {
  students: Students[];
  loading: boolean;
  error: string | null;
}

const StudentList: React.FC<StudentListProps> = ({
  students,
  loading,
  error,
}) => {
  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Student List
      </Typography>
      <List>
        {students.map((student) => (
          <ListItem key={student.id}>
            <ListItemText
              primary={`${student.firstName} ${student.lastName}`}
              secondary={student.university}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default StudentList;
