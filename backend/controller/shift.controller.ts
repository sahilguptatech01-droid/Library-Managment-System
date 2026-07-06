import { Request,Response } from "express"
import { prisma } from "../prisma"

export const createShift=async(req:Request,res:Response)=>{
try {    
    const library=await prisma.library.findUnique({
        where:{
            id:req.body.libraryId
        }
    })

    if(library){

        const shift=await prisma.shift.create({
            data:req.body
        })
        return res.json({
            message:"Shift Created",
            shift
        })
    }
    return res.json({
        message:"Library not found"
    })

} catch (error) {
     return res.json({
        message:"Try after sometime",
       
    })
    
}
}

export const deleteShift=async(req:Request,res:Response)=>{
    const shiftId=req.params.shiftId
    const libraryId=req.params.libraryId
    try {
        const shift=await prisma.shift.findUnique({
            where:{
                libraryId:libraryId as string,
                id:shiftId as string
            }
        })
        if(shift){
            const deleteShift=await prisma.shift.delete({
                where:{
                    id:shiftId as string
                }
            })
            return res.json({
                message:"Shift deleted"
            })
        }
         return res.json({
                message:"Shift not foun"
            })
        
    } catch (error) {
        return res.json({
            message:"Try after sometime"
        })
        
    }
}