import { Register, UpdateUser, UpdateUserLastEntry, Login, GetBirthday, GetUserRoles } from "./user.js";
import { AddNew, GetNews } from "./news.js";
import { GetMyDevices, AddMyDevice } from "./myDevices.js"

export const main = (req, res) => {
    const data = req.body;
    if (data.session) {
        console.log("session true")
    }


    switch (data.method) {
        case 'createUser':
            Register(req, res)
            break
        case 'loginUser':
            Login(req, res)
            break
        case 'updateUser':
            UpdateUser(req, res)
            break
        case 'updateUserLastEntry':
            UpdateUserLastEntry(req, res)
            break
        case 'getBirthday':
            GetBirthday(req, res)
            break
        case 'getUserRoles':
            GetUserRoles(req, res)
            break
        case 'addNew':
            AddNew(req, res)
            break
        case 'getNews':
            GetNews(req, res)
            break
        case 'addMyDevice':
            AddMyDevice(req, res)
            break
        case 'getMyDevices':
            GetMyDevices(req, res)
            break
    }
}