const studentsModel = require("../models/studentsModel")

exports.getStudents = async (req, res) => {
    try {
        const students = await studentsModel.find({});
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.getStudentById = async (req, res) => {
    try {
        const student = await studentsModel.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.createStudent = async (req, res) => {
    try {
        const student = await studentsModel.create(req.body);
        res.status(201).json(student);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.updateStudent = async (req, res) => {
    try {
        const student = await studentsModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


exports.deleteStudent = async (req, res) => {
    try {
        const student = await studentsModel.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json({ message: "Student deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}