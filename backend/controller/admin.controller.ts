import { Request,Response } from "express"
import { prisma } from "../prisma"


export const getStats=async(req:Request,res:Response)=>{
  const libraryID=res.locals.libraryID
    // Revenue for that month
    try {
        // No of students
        const student=await prisma.student.count({
          where:{
            libraryId:libraryID
          }
        })
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

    const recentStudents=await prisma.student.findMany({
      where:{
        libraryId:libraryID
      },  take: 5, // Limits the output to 5 records
      orderBy: {
    createdAt: 'desc', // Sorts by latest first ('desc' = descending)
  },select:{
    name:true,
    id:true,
    mobileNo:true
  }
    })

    const recentTransaction=await prisma.studentPayment.findMany({
      take:5,
      where:{
        libraryId:libraryID
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

