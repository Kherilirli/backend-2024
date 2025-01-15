const db = require("../config/database")

class Alumni {
    static async all() {
        return new Promise ((resolve,reject) =>{
            const query = "SELECT * from Alumni";
            db.query(query, (err, results) =>{
                if (err) {
                    reject(err);
                } else {
                    resolve(results);   
                }
            })
        })
    }

    static async create (alumniData) {
        const query = "INSERT INTO Alumni SET ?";
        const result = await new Promise ((resolve, reject) => {
            db.query(query, alumniData, (err, results) =>{
                if(err) {
                    return reject(err);
                } else {
                    return resolve(results)
                }
            }); 
        });
        
        return {
            id : result.insertId,
            ...alumniData
        }
    }

    static async update(id, data) {
        try {
            const query = "UPDATE Alumni SET ? WHERE id = ?";
            await new Promise((resolve, reject) => {
                db.query(query, [data, id], (err, results) => {
                    if (err) {
                        return reject(err);
                    } else {
                        resolve(results);
                    }
                });
            });

            const alumni = await this.find(id);  
            return alumni;
        } catch (error) {
            throw new Error(`Gagal memperbarui data: ${error.message}`);
        }
    }

    static async delete(id) {
        const query = "DELETE FROM Alumni WHERE id = ?"
        const alumni = await new Promise ((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) {
                    return reject (new Error(`Database query error ${err.message}`))
                }
                if (results.affectedRows == 0) {
                    return reject (new Error(`Alumni with id ${id} not found`));
                }
                resolve(results);
            })
        })
        return alumni;
    }

    static async find(id) {
        const query = "SELECT * FROM Alumni WHERE id = ?";
        const alumni = await new Promise ((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) {
                    return reject (new Error(`Databse query error: ${err.message}`))
                }
                if (results.length == 0){
                    return reject (new Error(`Alumni with id ${id} not found`))
                }
                resolve(results[0]); 
            });
        });

        return alumni;
    }

    static async search(name) {
        const query = "SELECT * FROM Alumni WHERE name LIKE ?";
        const alumni = await new Promise((resolve, reject) => {
            db.query(query, [`%${name}%`], (err, results) => {
                if (err) {
                    return reject(new Error(`Database query error: ${err.message}`));
                }
                resolve(results);
            });
        });

        return alumni;
    }

    
    static async freshGraduate() {
        const currentYear = new Date().getFullYear();
        const query = "SELECT * FROM Alumni WHERE graduation_year >= ? AND graduation_year <= ?";
        
        const alumni = await new Promise((resolve, reject) => {
            db.query(query, [currentYear - 2, currentYear + 1], (err, results) => {
                if (err) {
                    return reject(new Error(`Database query error: ${err.message}`));
                }
                resolve(results);
            });
        });
    
        return alumni;
    }

    static async employed() {
        const query = "SELECT * FROM Alumni WHERE status = 'Bekerja'";
        const alumni = await new Promise((resolve, reject) => {
            db.query(query, (err, results) => {
                if (err) {
                    return reject(new Error(`Database query error: ${err.message}`));
                }
                resolve(results);
            });
        });

        return alumni;
    }

    static async unemployed() {
        const query = "SELECT * FROM Alumni WHERE status IN ('Belum Bekerja', 'Wirausaha')";
        const alumni = await new Promise((resolve, reject) => {
            db.query(query, (err, results) => {
                if (err) {
                    return reject(new Error(`Database query error: ${err.message}`));
                }
                resolve(results);
            });
        });

        return alumni;
    }
}

module.exports = Alumni;