import { Router } from "express";
import { validate } from "../middleware/validate";
import { createShiftSchema } from "../schema/shift.schema";
import { createShift,deleteShift,getShift } from "../controller/shift.controller";
import { auth } from "../middleware/auth";
import { requireLibrary } from "../middleware/requirelibrary";

export const router=Router()

router.post('/create',validate(createShiftSchema),auth,requireLibrary,createShift)
router.delete('/delete/:shiftId',auth,requireLibrary,deleteShift)
router.get('/',auth,requireLibrary,getShift)
