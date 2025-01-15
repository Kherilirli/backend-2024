const Alumni = require("../models/Alumni");


class AlumniController{
    static async index(req, res) {
        const alumni = await Alumni.all();

        if (alumni.length > 0) {
            const data = {
                message : "Get All Resource",
                data : alumni
            };
            res.status(200).json(data);
        } else {
            const data = {
                message : "Data is empty"
            };
            res.status(200).json(data);
        }
    }

    static async store(req, res){        
        
        const {  name, phone, address, graduation_year, status, company_name, position } = req.body;

        if (!name || !phone || !address || !graduation_year) {
            const data = {
                message: "All Fields must be filled correctly",
            };
            return res.status(422).json(data);
        }

        const newAlumni = await Alumni.create({
            name,
            phone,
            address,
            graduation_year,
            status,
            company_name,
            position,
            created_at : new Date(),
            updated_at : new Date()
        });

        if (newAlumni){
            const data = {
                message : "Resource is added successfully",
                data : newAlumni
            };
            res.status(201).json(data);
        } else {
            const data = {
                message : "Gagal menambahkan data alumni",
            };
            res.status(400).json(data);
        }
    }

    static async update(req, res) {
        const {id} = req.params;
        const alumni = await Alumni.find(id);

        if (alumni) {
            const alumni = await Alumni.update(id, req.body);
            const data = {
                message : "Resource is update successfully",
                data : alumni
            };
            res.status(200).json(data);
        } else {
            const data = {
                message : "Resource not found"
            };
            res.status(404).json(data);
        }
    }

    static async delete(req, res) {
        const {id} = req.params;
        const alumni = await Alumni.find(id);

        if (alumni) {
            await Alumni.delete(id);
            const data = {
                message : "Resource is delete successfully" 
            };
            res.status(200).json(data);
        } else {
            const data = {
                message : "Resource not found"
            };
            res.status(404).json(data);
        }
    }

    static async show(req, res) {
        const {id} = req.params;
        const alumni = await Alumni.find(id);

        if (alumni) {
            const data = {
                message : "Get Detail Resource",
                data : alumni
            };
            res.status(200).json(data);
        } else {
            const data = {
                message : "Resource not Found"
            };
            res.status(404).json(data);
        }
    }

    static async search(req, res) {
        const { name } = req.params;
        const alumni = await Alumni.search(name);

        if (alumni.length > 0) {
            const data = {
                message : "Get searched resource",
                data : alumni
            };
            res.status(200).json(data);
        } else {
            const data = {
                message : "Resource not Found"
            };
            res.status(404).json(data);
        }
    }

    static async freshGraduate(req, res) {
        const alumni = await Alumni.freshGraduate();
        
        if (alumni.length > 0) {
            const data = {
                message: "Get fresh graduate resource",
                data: alumni
            };
            res.status(200).json(data);
        } else {
            const data = {
                message: "No fresh graduates found"
            };
            res.status(404).json(data);
        }
    }
    
    static async employed(req, res) {
        const alumni = await Alumni.employed();
        
        if (alumni.length > 0) {
            const data = {
                message: "Get employed resource",
                data: alumni
            };
            res.status(200).json(data);
        } else {
            const data = {
                message: "No employed alumni found"
            };
            res.status(404).json(data);
        }
    }

    static async unemployed(req, res) {
        const alumni = await Alumni.unemployed();
        
        if (alumni.length > 0) {
            const data = {
                message: "Get unemployed resource",
                data: alumni
            };
            res.status(200).json(data);
        } else {
            const data = {
                message: "No unemployed found"
            };
            res.status(404).json(data);
        }
    }
}


module.exports = AlumniController;