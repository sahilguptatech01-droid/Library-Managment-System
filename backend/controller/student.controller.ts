import { Request,Response } from "express";
import { prisma } from "../prisma";

export const createStudent=async(req:Request,res:Response)=>{
    try {
        const library=await prisma.library.findUnique({
            where:{
                id:req.body.libraryId
            }
        })
        if(library){
            const student=await prisma.student.create({
                data:req.body
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
    const libraryId=req.params.libraryId
    try {
        const library=await prisma.library.findUnique({
            where:{
                id:libraryId as string
            }
        })
        if(library){
            const student=await prisma.student.findMany({
                where:{
                    libraryId:libraryId as string
                }
            })
            return res.json({
                student
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
   console.log(studentId);
   
    
    // clerkUserID
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
                id:studentId as string
            }
        })
        return res.json({
            details
        })
        
    } catch (error) {
        return res.json({
            message:"Try after sometime"
        })
        
    }
}