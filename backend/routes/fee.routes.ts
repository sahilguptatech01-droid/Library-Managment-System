import { Router } from "express";
import { monthlyEarning, submitFee } from "../controller/fee.controller";
import { feeSchema } from "../schema/fee.schema";
import { validate } from "../middleware/validate";

export const router=Router()

router.post('/submit',validate(feeSchema),submitFee)
router.get('/revenue/:date',monthlyEarning)