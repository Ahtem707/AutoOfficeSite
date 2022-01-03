import db from "../config/database.js";

export const Register = (req, res) => {
    const data = req.body.arguments;
    db.query(`
        INSERT INTO Users(userName,phone,email,password,userRoles_idUserRoles,birthday)
        VALUE(
            '${data.name}',
            '${data.phone}',
            '${data.email}',
            '${data.password}',
            '${data.userRolesId}',
            '${data.birthday}');`,
        (err, results) => {
            if (err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}

// Требует проверки
export const UpdateUser = (req, res) => {
    const { idUser, avatar, userName, email, password, userRole, birthday } = req.body.arguments;
    db.query(`
        UPDATE Users
        SET
            ${avatar ? "avatarSrc = "+avatar+"," : ""}
            ${userName ? "userName = "+userName+"," : ""}
            ${email ? "email = "+email+"," : ""}
            ${password ? "password = "+password+"," : ""}
            ${password ? "password = "+password+"," : ""}
            ${userRole ? "UserRoles_idUserRoles = "+userRole+"," : ""}
            ${birthday ? "birthday = "+birthday+"," : ""}
            idUsers = ${idUser}
        WHERE
            idUsers = ${idUser}`,
        (err, results) => {
            if (err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}

export const UpdateUserLastEntry = (req, res) => {
    const { idUser, lastEntry } = req.body.arguments;
    db.query(`
        UPDATE Users
        SET last_entry = ${lastEntry}
        WHERE idUsers = ${idUser}`,
        (err, results) => {
            if (err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}

export const Login = (req, res) => {
    const { login, password } = req.body.arguments;
    db.query(`
        SELECT
            idUsers AS uid,
            userName
        FROM
            Users
        WHERE
            (email = '${login}' OR
            phone = '${login}') AND
            password = '${password}'`,
        (err, results) => {
            if (err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}

export const GetBirthday = (req, res) => {
    const data = req.body.arguments

    const earlierDays = data.earlierDays || 5
    const limit = data.limit || 6

    db.query(`
        SELECT
            userName,
            birthday
        FROM
            Users
        WHERE
            birthday >= now() - INTERVAL ${earlierDays} DAY
        LIMIT ${limit}`,
        (err, results) => {
            if (err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}

export const GetRoles = (req, res) => {
    db.query(`
        SELECT
            userName,
            birthday
        FROM
            Users
        WHERE
            birthday >= now() - INTERVAL ${earlierDays} DAY
        LIMIT ${limit}`,
        (err, results) => {
            if (err) {
                console.log(err);
                res.send(err)
            } else {
                res.json(results)
            }
        }
    )
}