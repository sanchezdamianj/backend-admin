import express from "express";
import { getAll, createSale } from "../controllers/sales";
import { validateUser } from "../middlewares/auth";
import { validateRequest } from "../middlewares/validateRequest";
import { SaleCreationSchema } from "../schemas/sales";

const router = express.Router()

router.use(validateUser())

router.get('/', getAll)
router.post('/',validateRequest(SaleCreationSchema),createSale)

export default router;