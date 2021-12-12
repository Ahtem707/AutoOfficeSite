// import express
import express from "express";
// myUnit
import { main } from "../controllers/main.js";
import { administrator } from "../controllers/administrator.js";

// init express router
const router = express.Router();

// create new user
// router.post('/registration', createUser);
// main
router.post('/', main);
// administrator
router.post('/administrator', administrator);
// router.post('/administrator', showUsers);
// router.post('/administrator', deleteUser);

//test auth
// router.post('/administrator/login', login)

// export default router
export default router;
