import { Response, Request } from "express";
import { prisma } from "../prisma";
import { date } from "zod";

export const submitFee = async (req: Request, res: Response) => {
  const libraryId = res.locals.libraryId;
  const { amount,studentId,month} = req.body;

  const targetDate = new Date(req.body.paymentDate); // Converting to datetime
  const startOfMonth = new Date(
    Date.UTC(
      targetDate.getUTCFullYear(),
      targetDate.getUTCMonth(),
      1,
      0,
      0,
      0,
      0,
    ),
  );

  // Generates: 2026-08-31T23:59:59.999Z
  const endOfMonth = new Date(
    Date.UTC(
      targetDate.getUTCFullYear(),
      targetDate.getUTCMonth() + 1,
      0,
      23,
      59,
      59,
      999,
    ),
  );
  try {
    // check whether that month fees is present or not (prventing duplicate payment)
    const fee = await prisma.studentPayment.findFirst({
      where: {
        studentId: req.body.studentId,
       month:req.body.month
      },
    });

    if (fee) {
      return res.status(409).json({
        message: "Payment already present for this month",
      });
    }

    const submit = await prisma.studentPayment.create({
      data: {
        amount,
        month,
        studentId,
        paymentDate:new Date(),
        libraryId: libraryId,
        year:new Date().getFullYear(),

      },
    });
    
    
    return res.json({
      data: {
        status: "Completed",
        submit,
      },
    });
  } catch (error) {
      return res.status(500).json({
    status: "Failed",
    message: error instanceof Error ? error.message : String(error),
  });
  }
};

export const monthlyEarning = async (req: Request, res: Response) => {
  const date = req.params.date as string;
  try {
    const amount = await prisma.studentPayment.findMany({
      where: {
        paymentDate: {
          gte: new Date(date),
        },
      },
      select: {
        amount: true,
      },
    });
    if (amount.length > 0) {
      let total = 0;
      for (let i = 0; i < amount.length; i++) {
        total += Number(amount[i]?.amount);
      }
      return res.json({
        total,
      });
    }
    return res.json({
      message: "No record avaliable",
    });
  } catch (error) {
    return res.json({
      message: "Try after sometime",
    });
  }
};

export const getTransaction = async (req: Request, res: Response) => {
  const studentId = req.params.id as string;

  try {
    const transaction = await prisma.studentPayment.findMany({
      where: {
        libraryId:res.locals.libraryId,
        studentId: studentId,
      },
      
    select:{
      amount:true,
      month:true,
      paymentDate:true,
      paymentMode:true,
      student:{select:{
        name:true
      }}

    },
      orderBy:{
        paymentDate:'desc'
      }
    });

    return res.json({
      transaction,
    });
  } catch (error) {
    return res.json({
      message: "Try after sometime",
    });
  }
};


export const allTransaction=async (req:Request,res:Response)=>{
  const libraryId=res.locals.libraryId
  try {
    const transaction=await prisma.studentPayment.findMany({
      where:{
        libraryId:libraryId
      },select:{
        amount:true,
        month:true,
        paymentDate:true,
        student:{select:{
          name:true
        }},
        id:true
      },orderBy:{
        paymentDate:"desc"
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
