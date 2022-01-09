// import express
import express from "express";
// myUnit
import { main } from "../controllers/main.js";
import { administrator } from "../controllers/administrator.js";
import { images } from "../controllers/images.js";

// init express router
const router = express.Router();

router.post('/', main);
router.post('/administrator', administrator);
router.get('/images/:dir/:imageName', images)

export default router;