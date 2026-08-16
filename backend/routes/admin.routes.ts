import { Router } from "express";
import { getStats } from "../controller/admin.controller";
import { auth } from "../middleware/auth";
import { requireLibrary } from "../middleware/requirelibrary";

export const router=Router()

router.get('/dashboard',auth,requireLibrary,getStats)