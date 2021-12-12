import db from "../config/database.js";

export const main = (req, res) => {
    const data = req.body;
    if(data.session) console.log("session true")
    function response(err, results) {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            // for(var item of results) {
            //     for( var ob in item){
            //         console.log(ob+": "+item[ob])
            //     }
            // }
            res.json(results)
        }
    }
    // function createErr(err){
    //     throw new Error(err)
    // }
    switch(data.method) {
        case 'createUser':
            db.query(`
            INSERT INTO users(userName,email,password)
            VALUE('${data.arguments.name}','${data.arguments.email}','${data.arguments.password}');`,(err, results) => {             
                if(err) {
                    console.log(err);
                    res.send(err)
                } else {
                    res.json(results)
                }
            })
            break
        case 'loginUser':
            const {email,password} = data.arguments
            db.query(`
            SELECT
                idUsers AS uid,
                userName
            FROM
                Users
            WHERE
                email = '${email}' AND
                password = '${password}'`,(e,r)=>{
                    if(e==null,r.length==0)
                        res.send('Error')
                    else
                        response(e,r)
            })
            break
        case 'getBooks':
            const author = (data.arguments.author)?'AND u.idUsers = ' + data.arguments.author : ''
            db.query(`
            SELECT
                b.imageSrc,
                b.title,
                b.annotation,
                u.userName AS author
            FROM
                books AS b,
                users AS u
            WHERE
                u.idUsers = b.Users_idUsers
                ${author}`,(e,r)=>response(e,r));
            break;      
        case 'createBook':
            db.query(`
            INSERT INTO books(imageSrc,title,annotation,Users_idUsers)
            VALUE('${data.arguments.imageSrc}','${data.arguments.title}','${data.arguments.annotation}','${data.arguments.idAuthor}')`,(e,r)=>response(e,r));
            break;
    }
}
