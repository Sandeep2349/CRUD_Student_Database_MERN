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




// export default App;
