import React from "react";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridActionsCellItem,
  GridRowModel,
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Students } from "../Models/Students";
import { deleteStudent, updateStudent } from "../Services/StudentService";

interface StudentDataGridProps {
  students: Students[];
  setStudents: React.Dispatch<React.SetStateAction<Students[]>>;
  loading: boolean;
  error: string | null;
}

const StudentDataGrid: React.FC<StudentDataGridProps> = ({
  students,
  setStudents,
  loading,
  error,
}) => {
  const handleDelete = async (id: number) => {
    await deleteStudent(id);
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const processRowUpdate = async (newRow: GridRowModel) => {
    const updatedStudent = newRow as Students;
    try {
      await updateStudent(updatedStudent.id, updatedStudent);
      setStudents((prev) =>
        prev.map((student) =>
          student.id === updatedStudent.id ? updatedStudent : student
        )
      );
      return updatedStudent;
    } catch (err) {
      console.error("Failed to update student");
      return newRow; // Return the new row without updating if there is an error
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
    { field: "email", headerName: "Email", width: 250, editable: true },
    {
      field: "university",
      headerName: "University",
      width: 300,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <GridActionsCellItem
          icon={<DeleteIcon style={{ color: "red" }} />}
          label="Delete"
          onClick={() => handleDelete(params.id as number)}
        />
      ),
    },
  ];

  const rows: GridRowsProp = students.map((student) => ({
    id: student.id,
    firstName: student.firstName,
    lastName: student.lastName,
    email: student.email,
    university: student.university,
  }));

  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 0 },
          },
        }}
        pageSizeOptions={[5, 10, 20, 50, 100]}
        pagination
        paginationMode="client"
        loading={loading}
        autoHeight
        processRowUpdate={processRowUpdate}
      />
    </div>
  );
};

export default StudentDataGrid;
