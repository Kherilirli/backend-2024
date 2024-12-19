const students = require("../data/students");


class StudentController{
    index(req, res){
        res.json({
            message : "Menampilkan semua data mahasiswa",
            data : students,
        });
    }

    store(req, res){        
        const {nama} = req.body;
        if (!nama) {
            return res.status(400).json({ error: "Nama wajib diisi" });
        }
        const newStudent = { id: students.length + 1, nama}
        students.push(newStudent);
        res.status(201).json({
            message : "Data mahasiswa berhasil ditambahkan",
            data : newStudent,
        });
    }

    update(req, res){
        const {id} = req.params;
        const {nama} = req.body;
        const student = students.find((s) => s.id == parseInt(id));
        if (!student) {
            return res.status(404).json({ error: "Mahasiswa tidak ditemukan" });
          }
          student.nama = nama;
          res.json({
            message: "Data mahasiswa berhasil diperbarui",
            data: student,
        });
    }

    destroy(req, res){
        const { id } = req.params;
        const index = students.findIndex((s) => s.id === parseInt(id));
        if (index === -1) {
        return res.status(404).json({ error: "Mahasiswa tidak ditemukan" });
        }
        students.splice(index, 1);
        res.json({ message: "Data mahasiswa berhasil dihapus" });
    }
}


const object = new StudentController;

module.exports = object;