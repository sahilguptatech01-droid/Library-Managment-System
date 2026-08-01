import { Router } from "express";
import { getTransaction, monthlyEarning, submitFee } from "../controller/fee.controller";
import { feeSchema } from "../schema/fee.schema";
import { validate } from "../middleware/validate";
import { auth } from "../middleware/auth";

export const router=Router()

router.post('/submit',validate(feeSchema),auth,submitFee)
router.get('/revenue/:date',auth,monthlyEarning)
router.get('/transactions/:id',auth,getTransaction)