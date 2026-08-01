import { Router } from "express";
import { validate } from "../middleware/validate";
import { createStudentSchema, updateStudentSchema } from "../schema/student.schema";
import { createStudent,getStudent ,updateStudentDetail,detailStudent} from "../controller/student.controller";
import { auth } from "../middleware/auth";
import { requireLibrary } from "../middleware/requirelibrary";

export const router=Router()

router.post('/create',validate(createStudentSchema),auth,requireLibrary,createStudent) // Add new student 
router.get('/',auth,requireLibrary,getStudent) // get all student   
router.patch('/:studentId',validate(updateStudentSchema),auth,requireLibrary,updateStudentDetail) // Update student detail
router.get('/detail/:studentId',auth,requireLibrary,detailStudent) //get detail of students