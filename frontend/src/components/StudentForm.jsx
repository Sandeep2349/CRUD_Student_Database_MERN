import { useEffect, useState } from 'react';

const emptyForm = { name: '', age: '', branch: '' };

export default function StudentForm({ editingStudent, onSubmit, onCancel }) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (editingStudent) {
      setForm({
        name: editingStudent.name,
        age: String(editingStudent.age),
        branch: editingStudent.branch,
      });
    } else {
      setForm(emptyForm);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: form.name.trim(),
      age: Number(form.age),
      branch: form.branch.trim(),
    });
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>{editingStudent ? 'Edit Student' : 'Add Student'}</h2>

      <label>
        Name
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Age
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          min="1"
          required
        />
      </label>

      <label>
        Branch
        <input
          type="text"
          name="branch"
          value={form.branch}
          onChange={handleChange}
          required
        />
      </label>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {editingStudent ? 'Update' : 'Create'}
        </button>
        {editingStudent && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
