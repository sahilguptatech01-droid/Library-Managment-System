import { Router } from "express";
import { validate } from "../middleware/validate";
import { createStudentSchema, updateStudentSchema } from "../schema/student.schema";
import { createStudent,getStudent ,updateStudentDetail,detailStudent} from "../controller/student.controller";

export const router=Router()

router.post('/create',validate(createStudentSchema),createStudent) // Add new student 
router.get('/:libraryId',getStudent) // get all student   
router.patch('/:studentId',validate(updateStudentSchema),updateStudentDetail) // Update student detail
router.get('/detail/:studentId',detailStudent) //get detail of student