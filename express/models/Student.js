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
}

module.exports = Student;