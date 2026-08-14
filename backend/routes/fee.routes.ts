import { Router } from "express";
import { getTransaction, monthlyEarning, submitFee,allTransaction } from "../controller/fee.controller";
import { feeSchema } from "../schema/fee.schema";
import { validate } from "../middleware/validate";
import { auth } from "../middleware/auth";
import { requireLibrary } from "../middleware/requirelibrary";

export const router=Router()

router.post('/submit',validate(feeSchema),auth,requireLibrary,submitFee)
router.get('/revenue/:date',auth,requireLibrary,monthlyEarning)
router.get('/transactions/:id',auth,requireLibrary,getTransaction)
//  implement To get all  previous transactions
router.get('/all/transaction',auth,requireLibrary,allTransaction)