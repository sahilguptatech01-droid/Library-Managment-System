import express from "express"
import { Router } from "express"
import { validate } from "../middleware/validate"
import { createLibrarySchema, updateLibrarySchema } from "../schema/library.schema"
import { createLibrary, updateLibrary,deleteLibrary } from "../controller/library.controller"
import { auth } from "../middleware/auth"
import { requireLibrary } from "../middleware/requirelibrary"

export const router=Router()

router.post('/create',validate(createLibrarySchema),auth,createLibrary) //Create library
router.post('/update',validate(updateLibrarySchema),auth,requireLibrary,updateLibrary)  // update Library
router.delete('/delete/:id',auth,requireLibrary,deleteLibrary) //Delete Library

