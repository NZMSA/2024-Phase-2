import React from "react";
import {
  DataGrid,
  GridColDef,
  GridActionsCellItem,
  GridRowModel,
} from "@mui/x-data-grid";
import { Box, CircularProgress, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Student } from "../Models/Students";
import { updateStudent, deleteStudent } from "../Services/StudentService";

interface StudentDataGridProps {
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
  loading: boolean;
  error: string | null;
}

const StudentDataGrid: React.FC<StudentDataGridProps> = ({
  students,
  setStudents,
  loading,
  error,
}) => {
  const processRowUpdate = async (newRow: GridRowModel) => {
    const updatedStudent: Student = {
      id: newRow.id,
      firstName: newRow.firstName,
      lastName: newRow.lastName,
      email: newRow.email,
      university: newRow.university,
    };
    try {
      await updateStudent(newRow.id as number, updatedStudent);
      setStudents((prev) =>
        prev.map((student) =>
          student.id === newRow.id ? updatedStudent : student
        )
      );
      return updatedStudent;
    } catch (err) {
      throw new Error("Failed to update student");
    }
  };

  const handleProcessRowUpdateError = (error: any) => {
    console.error("Failed to update student:", error);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteStudent(id);
      setStudents((prev) => prev.filter((student) => student.id !== id));
    } catch (err) {
      console.error("Failed to delete student:", err);
    }
  };

  const columns: GridColDef[] = [
    {
      field: "firstName",
      headerName: "First Name",
      width: 150,
      editable: true,
    },
    { field: "lastName", headerName: "Last Name", width: 150, editable: true },
    { field: "email", headerName: "Email", width: 200, editable: true },
    {
      field: "university",
      headerName: "University",
      width: 200,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon style={{ color: "red" }} />}
          label="Delete"
          onClick={() => handleDelete(params.id as number)}
        />,
      ],
    },
  ];

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box mt={2}>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={students}
          columns={columns}
          paginationModel={{ page: 0, pageSize: 5 }}
          pageSizeOptions={[5, 10, 20]}
          processRowUpdate={processRowUpdate}
          onProcessRowUpdateError={handleProcessRowUpdateError}
        />
      </div>
    </Box>
  );
};

export default StudentDataGrid;
