export default function StudentList({ students, onEdit, onDelete }) {
  if (students.length === 0) {
    return <p className="empty-state">No students yet. Add one above.</p>;
  }

  return (
    <div className="student-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Branch</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.branch}</td>
              <td className="actions">
                <button
                  type="button"
                  className="btn btn-edit"
                  onClick={() => onEdit(student)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-delete"
                  onClick={() => onDelete(student._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
