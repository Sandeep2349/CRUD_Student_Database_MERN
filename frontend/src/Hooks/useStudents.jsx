import { useState, useEffect, useCallback } from 'react';
import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from '../api/studentsApi'; // Adjust paths based on your folder structure

export default function useStudents() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadStudents = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getStudents();
      setStudents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStudents();
  }, [loadStudents]);

  const handleSubmit = async (studentData) => {
    try {
      setError('');
      if (editingStudent) {
        await updateStudent(editingStudent._id, studentData);
        setEditingStudent(null);
      } else {
        await createStudent(studentData);
      }
      await loadStudents();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this student?')) return;

    try {
      setError('');
      await deleteStudent(id);
      if (editingStudent?._id === id) {
        setEditingStudent(null);
      }
      await loadStudents();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCancelEdit = () => setEditingStudent(null);

  return {
    students,
    editingStudent,
    loading,
    error,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleCancelEdit,
    loadStudents,
  };
}