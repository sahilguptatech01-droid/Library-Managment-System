import { Router } from "express";
import { validate } from "../middleware/validate";
import { createShiftSchema } from "../schema/shift.schema";
import { createShift,deleteShift } from "../controller/shift.controller";


export const router=Router()

router.post('/create',validate(createShiftSchema),createShift)
router.delete('/delete/:libraryId/:shiftId',deleteShift)
