import express from "express"
import { Router } from "express"
import { validate } from "../middleware/validate"
import { createLibrarySchema, updateLibrarySchema } from "../schema/library.schema"
import { createLibrary, updateLibrary } from "../controller/library.controller"

export const router=Router()

router.post('/',validate(createLibrarySchema),createLibrary)
router.post('/update',validate(updateLibrarySchema),updateLibrary)

