import useStudents from './hooks/useStudents';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  const {
    students,
    editingStudent,
    loading,
    error,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleCancelEdit,
    loadStudents,
  } = useStudents();

  return (
    <div className="app">
      <header>
        <h1>Student Manager</h1>
        <p>GET, POST, PUT &amp; DELETE with Express + MongoDB</p>
      </header>

      {error && <div className="error-banner">{error}</div>}

      <StudentForm
        editingStudent={editingStudent}
        onSubmit={handleSubmit}
        onCancel={handleCancelEdit}
      />

      <section className="list-section">
        <div className="list-header">
          <h2>All Students</h2>
          <button type="button" className="btn btn-secondary" onClick={loadStudents}>
            Refresh
          </button>
        </div>

        {loading ? (
          <p className="loading">Loading students...</p>
        ) : (
          <StudentList
            students={students}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </section>
    </div>
  );
}

export default App;



// import { useCallback, useEffect, useState } from 'react';
// import {
//   createStudent,
//   deleteStudent,
//   getStudents,
//   updateStudent,
// } from './api/studentsApi';
// import StudentForm from './components/StudentForm';
// import StudentList from './components/StudentList';
// import './App.css';

// function App() {
//   const [students, setStudents] = useState([]);
//   const [editingStudent, setEditingStudent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const loadStudents = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError('');
//       const data = await getStudents();
//       setStudents(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     loadStudents();
//   }, [loadStudents]);

//   const handleSubmit = async (studentData) => {
//     try {
//       setError('');
//       if (editingStudent) {
//         await updateStudent(editingStudent._id, studentData);
//         setEditingStudent(null);
//       } else {
//         await createStudent(studentData);
//       }
//       await loadStudents();
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleEdit = (student) => {
//     setEditingStudent(student);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Delete this student?')) return;

//     try {
//       setError('');
//       await deleteStudent(id);
//       if (editingStudent?._id === id) {
//         setEditingStudent(null);
//       }
//       await loadStudents();
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="app">
//       <header>
//         <h1>Student Manager</h1>
//         <p>GET, POST, PUT &amp; DELETE with Express + MongoDB</p>
//       </header>

//       {error && <div className="error-banner">{error}</div>}

//       <StudentForm
//         editingStudent={editingStudent}
//         onSubmit={handleSubmit}
//         onCancel={() => setEditingStudent(null)}
//       />

//       <section className="list-section">
//         <div className="list-header">
//           <h2>All Students</h2>
//           <button type="button" className="btn btn-secondary" onClick={loadStudents}>
//             Refresh
//           </button>
//         </div>

//         {loading ? (
//           <p className="loading">Loading students...</p>
//         ) : (
//           <StudentList
//             students={students}
//             onEdit={handleEdit}
//             onDelete={handleDelete}
//           />
//         )}
//       </section>
//     </div>
//   );
// }

// export default App;
