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
