import { Request,Response } from "express"
import { prisma } from "../prisma"

export const createShift=async(req:Request,res:Response)=>{
    
try{
    
    const shiftCount=await prisma.shift.count({
        where:{
            libraryId:res.locals.libraryId
        }
    })

    if(shiftCount>=3){
        return res.json({
            message:"You reach maximum shift limit"
        }

        )

    }

    const shift=await prisma.shift.create({
        data:{
            shifts:req.body.shifts,
                libraryId:res.locals.libraryId

        }
    })
    return res.json({
        message:"Shift Created",
        shift
    })

   

} catch (error) {
     return res.json({
        message:"Try after sometime",
       
    })
    
}
}

export const deleteShift=async(req:Request,res:Response)=>{
    const shiftId=req.params.shiftId
    try {
            const deleteShift=await prisma.shift.delete({
                where:{
                    id:shiftId as string,
                    libraryId:res.locals.libraryId
                }
            })
            return res.json({
                message:"Shift deleted"
            })
        }
        
        
     catch (error) {
        return res.json({
            message:"Try after sometime"
        })
        
    }
}


export const getShift=async (req:Request,res:Response)=> {
    try {
        const shift=await prisma.shift.findMany({
            where:{
                libraryId:res.locals.libraryId
            },select:{
                shifts:true,
                id:true
            }

        })
        return res.json({
            data:shift,
            
        })
    } catch (error) {
        return res.json({
            message:"Try after sometime"
        })
        
    }
    
}