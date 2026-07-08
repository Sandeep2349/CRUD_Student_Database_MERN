const express = require('express');
const {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
} = require('../controllers/studentsController');

const studentRouter = express.Router();

studentRouter.get('/', getStudents);
studentRouter.get('/:id', getStudentById);
studentRouter.post('/', createStudent);
studentRouter.put('/:id', updateStudent);
studentRouter.delete('/:id', deleteStudent);

module.exports = studentRouter;