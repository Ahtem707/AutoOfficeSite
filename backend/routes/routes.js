// import express
import express from "express";
// myUnit
import { main } from "../controllers/main.js";
import { administrator } from "../controllers/administrator.js";

// init express router
const router = express.Router();

router.post('/', main);
router.post('/administrator', administrator);

export default router;
