import db from "../config/database.js";

// Create New Product
export const createUser = (req, res) => {
    const data = req.body;
    db.query(`INSERT INTO users(userName,email,password) value('${data.name}','${data.email}','${data.password}');`,(err, results) => {             
        if(err) {
            console.log(err);
            res.send(err)
        } else {
            res.json(results)
        }
    })
}