import db from "../config/database.js";

export const AddNew = (req, res) => {
    const data = req.body.arguments

    db.query(`
        INSERT INTO
        News(Title,Description,Date,WhereEvents)
        Value(
            '${data.title}',
            '${data.description}',
            '${data.date}',
            '${data.whereEvents}');`,
        (err, results) => {             
            if(err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}

export const GetNews = (req, res) => {
    const limit = req.body.arguments.limit

    db.query(`
        SELECT
            Title,
            Description,
            Date,
            WhereEvents
        FROM
            News
        Limit ${limit}`,
        (err, results) => {             
            if(err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}