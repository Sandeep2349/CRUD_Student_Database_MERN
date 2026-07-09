const API_BASE = "https://student-api-backend-19za.onrender.com/students";

async function handleResponse(response) {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || 'Request failed');
  }
  return data;
}

export async function getStudents() {
  const response = await fetch(API_BASE);
  return handleResponse(response);
}

export async function getStudentById(id) {
  const response = await fetch(`${API_BASE}/${id}`);
  return handleResponse(response);
}

export async function createStudent(student) {
  const response = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });
  return handleResponse(response);
}

export async function updateStudent(id, student) {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });
  return handleResponse(response);
}

export async function deleteStudent(id) {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
}
