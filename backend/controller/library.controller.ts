import { Request,Response } from "express"
import {prisma} from "../prisma"

export const createLibrary=async(req:Request,res:Response)=>{
    try {
        const library =await prisma.library.create({
            data:req.body
        })
        return res.status(200).json({library})
    } catch (error) {
        return res.status(500).json({
            message:"Failed to create Library"
        })

        
    }

}

export const updateLibrary=async(req:Request,res:Response)=>{
  
    try {
        const library=await prisma.library.findUnique({
            where:{
                clerkUserId:req.body.clerkUserId
            }
        })
        if(library){
            const library=await prisma.library.update({
                data:req.body,
                where:{
                    clerkUserId:req.body.clerkUserId
                }
            })
            return res.status(200).json({
                message:"Successfully Updated Details",
                library
            })
        }
        
        return res.status(404).json({
            message:"Not found"
        })
    } catch (error) {
        return res.status(500).json({
            message:"Try after sometime"
        })
        
    }

}