import { Response,Request } from "express"
import { prisma } from "../prisma"


export const submitFee=async(req:Request,res:Response)=>{
    
    try {
        const submit=await prisma.studentPayment.create({
            data:req.body
        })
        return res.json({
            data:{
                status:"Completed",
                submit
            }
        })
        
    } catch (error) {
        return res.json({
            data:{
                error,
                message:"Try after sometime",
                status:"Failed"
            }
        })
        
    }

}