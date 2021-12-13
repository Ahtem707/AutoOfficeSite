import db from "../config/database.js";
import { AddNews } from "./product.js";

import { Login, Register, GetBirthday } from "./user.js";

export const main = (req, res) => {
    const data = req.body;
    if(data.session) console.log("session true")
    function response(err, results) {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            res.json(results)
        }
    }
    switch(data.method) {
        case 'createUser':
            Register(req,res)
            break
        case 'loginUser':
            Login(req,res)
            break
        case 'getBirthday':
            GetBirthday(req,res)
            break
        case 'addNew':
            AddNew(req,res)
            break
        case 'getNews':
            GetNews(req,res)
            break
    }
}
