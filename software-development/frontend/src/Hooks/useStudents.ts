import { useState, useEffect } from 'react';
import { Students } from '../Models/Students';
import { getStudents, createStudent } from '../Services/StudentService';

export const useStudents = () => {
    const [students, setStudents] = useState<Students[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const students = await getStudents();
                setStudents(students);
            } catch (err) {
                setError('Failed to fetch students');
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    const addStudent = async (student: Omit<Students, 'id'>) => {
        try {
            const newStudent = await createStudent(student);
            setStudents([...students, newStudent]);
        } catch (err) {
            setError('Failed to add student');
        }
    };

    return { students, loading, error, addStudent };
};