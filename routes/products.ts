import express from "express";
import { getAll, getByCode } from "../controllers/products";
import { validateUser } from "../middlewares/auth";

const router = express.Router()

router.use(validateUser())

router.get('/', getAll)
router.get('/:code', getByCode)


export default router;