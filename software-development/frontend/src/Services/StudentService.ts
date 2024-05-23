import { Student } from '../Models/Students';

const API_URL = 'http://localhost:5006/api/students';

export const getStudents = async (): Promise<Student[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch students');
    }
    return response.json();
};

export const createStudent = async (student: Omit<Student, 'id'>): Promise<Student> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
    });
    if (!response.ok) {
        throw new Error('Failed to create student');
    }
    return response.json();
};