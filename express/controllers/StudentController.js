const students = require("../data/students");
const Student = require("../models/Student");


class StudentController{
    static async index(req, res) {
        const students = await Student.all();

        if (students.length > 0) {
            const data = {
                message : "Menampilkan semua students",
                data : students
            };
            res.status(200).json(data);
        } else {
            const data = {
                message : "Student is empty"
            };
            res.status(200).json(data);
        }
    }

    static async store(req, res){        
        
        const { nama, nim, email, jurusan} = req.body;

        if (!nama || !nim || !email || !jurusan) {
            const data = {
                message: "Semua data harus dikirim",
            };
            return res.status(400).json(data);
        }

        const newStudent = await Student.create({
            nama,
            nim,
            email,
            jurusan,
            created_at : new Date(),
            updated_at : new Date()
        });

        if (newStudent){
            const data = {
                message : "Menambahkan data student",
                data : newStudent
            };
            res.status(201).json(data);
        } else {
            const data = {
                message : "Gagal menambahkan data student",
            };
            res.status(400).json(data);
        }
    }

    static async update(req, res) {
        const {id} = req.params;
        const student = await Student.find(id);

        if (student) {
            const student = await Student.update(id, req.body);
            const data = {
                message : "Mengedit data students",
                data : student
            };
            res.status(200).json(data);
        } else {
            const data = {
                message : "Student not found"
            };
            res.status(404).json(data);
        }
    }

    static async delete(req, res) {
        const {id} = req.params;
        const student = await Student.find(id);

        if (student) {
            await Student.delete(id);
            const data = {
                message : `Menghapus data student ${student.nama}` 
            };
            res.status(200).json(data);
        } else {
            const data = {
                message : "Student not found"
            };
            res.status(404).json(data);
        }
    }

    static async show(req, res) {
        const {id} = req.params;
        const student = await Student.find(id);

        if (student) {
            const data = {
                message : "Menampilkan data students",
                data : student
            };
            res.status(200).json(data);
        } else {
            const data = {
                message : "Student not found"
            };
            res.status(404).json(data);
        }
    }
}





module.exports = StudentController;