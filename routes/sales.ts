import express from "express";
import { getAll, createSale } from "../controllers/sales";
import { validateUser } from "../middlewares/auth";

const router = express.Router()

router.use(validateUser())

router.get('/', getAll)
router.post('/',createSale)

export default router;