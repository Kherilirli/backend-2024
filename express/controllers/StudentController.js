const students = require("../data/students");
const Student = require("../models/Student");


class StudentController{
    static async index(req, res) {
        try {
            const students = await Student.all();
            res.json({
                message: "Mengambil data students",
                data: students,
            });
        } catch (error) {
            res.status(500).json({
                message: "Gagal mengambil data students",
                error: error.message,
            });
        }
    }

    static async store(req, res){        
        try {
            const { nama, nim, email, jurusan} = req.body;

            if (!nama || !nim || !email || !jurusan) {
                return res.status(400).json({
                    message: "Semua input harus diisi! Pastikan mengisi nama, nim, email, dan jurusan.",
                });
            }

            const newStudent = await Student.create({
                nama,
                nim,
                email,
                jurusan,
                created_at : new Date(),
                updated_at : new Date()
            });

            res.json({
                message : "Menambahkan data student",
                data : newStudent
            })
        } catch(err) {
            res.status(500).json({
                message : "Gagal menambahkan data student",
                error : err.message 
            });
        }
    }

}



module.exports = StudentController;