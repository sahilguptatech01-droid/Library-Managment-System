import { Request,Response } from "express"
import { prisma } from "../prisma"


export const getStats=async(req:Request,res:Response)=>{

    // Revenue for that month
    try {
        // No of students
        const student=await prisma.student.count()
          const now = new Date();
    
    // 1. Calculate the strict UTC range for the current month
    const startOfMonth = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1, 0, 0, 0, 0));
    const endOfMonth = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 0, 23, 59, 59, 999));

    // 2. Use Prisma's aggregate feature to sum up the amounts
    const aggregation = await prisma.studentPayment.aggregate({
      where: {
        paymentDate: {
          gte: startOfMonth,
          lte: endOfMonth
        }
      },
      _sum: {
        amount: true // Targets the amount column
      }
    });

      const totalCollected = aggregation._sum.amount || 0;

    return res.json({
        count:student,
        total:totalCollected
    })
        
    } catch (error) {
        return res.json({
            message:"Try after sometime"
        })
        
    }    
    

}