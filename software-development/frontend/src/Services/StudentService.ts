import { Students } from '../Models/Students';
import config from '../Config';

const { apiUrl } = config;

export const getStudents = async (): Promise<Students[]> => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

export const createStudent = async (student: Omit<Students, 'id'>): Promise<Students> => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });
  const data = await response.json();
  return data;
};

export const updateStudent = async (id: number, student: Students): Promise<void> => {
  await fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });
};

export const deleteStudent = async (id: number): Promise<void> => {
  await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  });
};

export const bulkCreateStudents = async (students: Omit<Students, 'id'>[]): Promise<Students[]> => {
  const response = await fetch(`${apiUrl}/bulk`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(students),
  });
  const data = await response.json();
  return data;
};