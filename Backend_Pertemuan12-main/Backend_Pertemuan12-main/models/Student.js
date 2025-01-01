// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  /**
   * Method untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Mengembalikan data student yang baru diinsert.
   */
  static create(data) {
    return new Promise((resolve, reject) => {
      const sql = `
        INSERT INTO students (nama, nim, email, jurusan, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      const values = [
        data.nama,
        data.nim,
        data.email,
        data.jurusan,
        new Date(),
        new Date(),
      ];

      db.query(sql, values, (err, result) => {
        if (err) reject(err);
        resolve({
          id: result.insertId,
          ...data,
          created_at: values[4],
          updated_at: values[5],
        });
      });
    });
  }
}

// export class Student
module.exports = Student;
