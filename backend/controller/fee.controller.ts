import { Response,Request } from "express"
import { prisma } from "../prisma"



export const submitFee=async(req:Request,res:Response)=>{


    const targetDate=new Date(req.body.paymentDate) // Converting to datetime
const startOfMonth = new Date(Date.UTC(
    targetDate.getUTCFullYear(), 
    targetDate.getUTCMonth(), 
    1, 0, 0, 0, 0
));

// Generates: 2026-08-31T23:59:59.999Z
const endOfMonth = new Date(Date.UTC(
    targetDate.getUTCFullYear(), 
    targetDate.getUTCMonth() + 1, 
    0, 23, 59, 59, 999
));
    try {
        // check whether that month fees is present or not (prventing duplicate payment)
        const fee=await prisma.studentPayment.findFirst({
            where:{
                studentId:req.body.studentId,
                        paymentDate:{
            gte: startOfMonth, // Greater than or equal to start of month
            lte: endOfMonth    // Less than or equal to end of month
            }
            }
        })

        if(fee){
            return res.json({
                message:"Payment already present for this month"
            })
        }

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

export const monthlyEarning=async (req:Request,res:Response)=> {
    const date=req.params.date as string
    try {
        const amount=await prisma.studentPayment.findMany({
            where:{
                paymentDate:
                {
                    gte:new Date(date)
                }
            
            },
            select:{
                amount:true
            }
        })
        if(amount.length>0){
            let total=0
            for(let i=0;i<amount.length;i++){
                total+=Number(amount[i]?.amount)
            }
            return res.json({
                total
            })
        }
        return res.json({
            message:"No record avaliable"
        })
        
    } catch (error) {
        return res.json({
            message:"Try after sometime"
        })
    }
    
}


export const getTransaction=async(req:Request,res:Response)=>{
    const studentId=req.params.id as string
    
    try {
        const transaction=await prisma.studentPayment.findMany({
            where:{
                studentId:studentId
            },
            omit:{
                createdAt:true,
                // studentId:true,
                id:true,

            }

        })

        return res.json({
            transaction
        })
    } catch (error) {
        return res.json({
            message:"Try after sometime"
        })
        
    }
}