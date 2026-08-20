import { Request,Response } from "express"
import { prisma } from "../prisma"


export const getStats=async(req:Request,res:Response)=>{
  const libraryId=res.locals.libraryId
 
  
    // Revenue for that month
    try {
        // No of students
        const student=await prisma.student.count({
          where:{
            libraryId:libraryId,
            status:"ACTIVE",
          }
        })
          const now = new Date();
    
    // 1. Calculate the strict UTC range for the current month
    const startOfMonth = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1, 0, 0, 0, 0));
    const endOfMonth = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 0, 23, 59, 59, 999));

    // 2. Use Prisma's aggregate feature to sum up the amounts
    const aggregation = await prisma.studentPayment.aggregate({
      where: {
        libraryId:libraryId,
        student:{status:"ACTIVE"},
        createdAt: {
          gte: startOfMonth,
          lte: endOfMonth
        }
      },
      _sum: {
        amount: true // Targets the amount column
      }
    });

    const recentStudents=await prisma.student.findMany({
      where:{
        libraryId:libraryId,
        status:"ACTIVE"
      },  take:35, // Limits the output to 5 records
      orderBy: {
    createdAt: 'desc', // Sorts by latest first ('desc' = descending)
  },select:{
    library:{select:{
      name:true
    }},
    name:true,
    id:true,
    mobileNo:true
  }
    })

    const recentTransaction=await prisma.studentPayment.findMany({
      take:3,
      where:{
        libraryId:libraryId,
        student:{status:"ACTIVE"},
      },
      orderBy:{
        createdAt:'desc'
      },select:{
        student:{
          select:{
            name:true
          }
        },
        paymentMode:true,
        month:true,
        amount:true
      },
    })
      const totalCollected = aggregation._sum.amount || 0;

    return res.json({
        count:student,
        total:totalCollected,
        recentStudents:recentStudents,
        recentTransaction:recentTransaction
    })
        
    } catch (error) {
        return res.json({
            message:"Try after sometime"
        })
        
    }    
    
  }

