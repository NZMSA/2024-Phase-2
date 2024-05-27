import React from "react";
import * as XLSX from "xlsx";
import { Button } from "@mui/material";
import { bulkCreateStudents } from "../Services/StudentService";
import { Students } from "../Models/Students";

interface ExcelImportProps {
  onDataLoaded: (data: Students[]) => void;
}

const ExcelImport: React.FC<ExcelImportProps> = ({ onDataLoaded }) => {
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData: any[] = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const processedData: Omit<Students, "id">[] = jsonData
          .slice(1)
          .map((row: any[]) => ({
            firstName: row[6],
            lastName: row[7],
            email: row[8],
            university: row[9],
          }));

        try {
          const createdStudents = await bulkCreateStudents(processedData);
          onDataLoaded(createdStudents);
        } catch (error) {
          console.error("Failed to bulk create students", error);
        }
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <Button variant="contained" component="label" color="primary">
      Upload File
      <input type="file" hidden onChange={handleFileUpload} />
    </Button>
  );
};

export default ExcelImport;
