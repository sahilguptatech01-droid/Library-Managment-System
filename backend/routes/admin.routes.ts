import { Router } from "express";
import { getStats } from "../controller/admin.controller";
import { auth } from "../middleware/auth";

export const router=Router()

router.get('/dashboard',auth,getStats)