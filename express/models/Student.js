const db = require("../config/database")

class Student {
    static async all() {
        return new Promise ((resolve,reject) =>{
            const query = "SELECT * from Students";
            db.query(query, (err, results) =>{
                if (err) {
                    reject(err);
                } else {
                    resolve(results);   
                }
            })
        })
    }

    static async create (studentData) {
        const query = "INSERT INTO Students SET ?";
        const result = await new Promise ((resolve, reject) => {
            db.query(query, studentData, (err, results) =>{
                if(err) {
                    return reject(err);
                } else {
                    return resolve(results)
                }
            }); 
        });
        
        return {
            id : result.insertId,
            ...studentData
        }
    }

    static async update(id, data) {
        try {
            const query = "UPDATE Students SET ? WHERE id = ?";
            await new Promise((resolve, reject) => {
                db.query(query, [data, id], (err, results) => {
                    if (err) {
                        return reject(err);
                    } else {
                        resolve(results);
                    }
                });
            });

            const student = await this.find(id);  
            return student;
        } catch (error) {
            throw new Error(`Gagal memperbarui data: ${error.message}`);
        }
    }

    static async delete(id) {
        const query = "DELETE FROM Students WHERE id = ?"
        const student = await new Promise ((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) {
                    return reject (new Error(`Database query error ${err.message}`))
                }
                if (results.affectedRows == 0) {
                    return reject (new Error(`Student with id ${id} not found`));
                }
                resolve(results);
            })
        })
        return student;
    }

    static async find(id) {
        const query = "SELECT * FROM Students WHERE id = ?";
        const student = await new Promise ((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) {
                    return reject (new Error(`Databse query error: ${err.message}`))
                }
                if (results.length == 0){
                    return reject (new Error(`Student with id ${id} not found`))
                }
                resolve(results[0]); 
            });
        });

        return student;
    }
}

module.exports = Student;