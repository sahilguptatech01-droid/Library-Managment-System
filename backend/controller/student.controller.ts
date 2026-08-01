import { Request,Response } from "express";
import { prisma } from "../prisma";

export const createStudent=async(req:Request,res:Response)=>{

    try {
        const library=await prisma.library.findUnique({
            where:{
                id:res.locals.libraryId  // get this from middleware
            }
        })
        if(library){
            const student=await prisma.student.create({
                data:{
                    ...req.body,
                    libraryId:res.locals.libraryId
                }
            })
            return res.json({
                message:"Student added",
                student

            })
        }
        return res.json({
                message:"Library not found"
            })
    } catch (error) {
        return res.json({
            message:error
        })
        
    }

}


export const getStudent=async(req:Request,res:Response)=>{
    const libraryId=res.locals.libraryId
    try {
        const library=await prisma.library.findUnique({
            where:{
                id:libraryId  as string
            }
        })
        if(library){
            const students=await prisma.student.findMany({
                where:{
                    libraryId:libraryId as string
                },
                omit:{
                    libraryId:true,
                    updatedAt:true,
                    createdAt:true,
                    fatherName:true,
                    motherName:true,
                    address:true,
                    identityProof:true,
                    status:true,
                    mobileNo:true,
                    joiningDate:true,
                    shiftId:true
                },
                include:{
                    shift:{
                        select:{
                            shifts:true
                        }
                    }
                }
               
            })
            
            return res.json({
                students
            })
        }
        return res.json({
            message:"Library Not Found"
        })
    } catch (error) {
        return res.json({
            message:"Try after sometime"
        })
    }
}


export const updateStudentDetail=async (req:Request,res:Response) => {
  const studentId=req.params.studentId
  
 try {
    const student=await prisma.student.findUnique({
        where:{
            id:studentId as string
        }
    })
    if(student){
        const updateDetail=await prisma.student.update({
            data:req.body,
            where:{
                id:studentId as string
            }
            
        })
        return res.json({
            message:"updated Details",
            updateDetail
        })

    }
    return res.json({
        message:"Student Not Found"
    })
 } catch (error) {
    return res.json({
        message:"Try after sometime"
    })
    
 }   
}

export const detailStudent=async (req:Request,res:Response)=>{
    const studentId=req.params.studentId;
    
    try {
        const details=await prisma.student.findUnique({
            where:{
                id:studentId as string,
            },
            include:{
              shift:{
                select:{
                    shifts:true
                }
              }
            },
            omit:{
                createdAt:true,
                updatedAt:true,
                libraryId:true,
            
            }
        })
        return res.json({
            details
        })
        
    } catch (error) {
        return res.json({
            message:"Try after sometime",
            error
        })
        
    }
}