// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    const data = {
      message: "Menampilkan semua students",
      data: students,
    };

    res.json(data);
  }

  async store(req, res) {
    /**
     * Memanggil method create dan mengembalikan response JSON.
     */
    try {
      const { nama, nim, email, jurusan } = req.body; // Mendapatkan data dari request body

      // Validasi sederhana
      if (!nama || !nim || !email || !jurusan) {
        return res.status(400).json({
          message: "Semua field (nama, nim, email, jurusan) harus diisi.",
        });
      }

      // Memanggil metode create pada model Student
      const student = await Student.create({
        nama,
        nim,
        email,
        jurusan,
      });

      // Menyusun response
      const data = {
        message: "Menambahkan data student",
        data: student,
      };

      res.status(201).json(data); // Mengembalikan response dengan status 201 (Created)
    } catch (err) {
      console.error(err); // Menangani error
      res.status(500).json({
        message: "Terjadi kesalahan saat menambahkan data student.",
        error: err.message,
      });
    }
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: [],
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    const data = {
      message: `Menghapus student id ${id}`,
      data: [],
    };

    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
