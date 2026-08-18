import { Request,Response } from "express"
import {prisma} from "../prisma"
import { clerkClient } from "@clerk/express";

export const createLibrary=async(req:Request,res:Response)=>{
    const email=res.locals.email
    const userId=res.locals.userId

    try {
        const library =await prisma.library.create({
            data:{
                name:req.body.name,
                ownerName:req.body.ownerName,
                phoneNo:req.body.phoneNo,
                address:req.body.address,
                clerkUserId:userId,
                email:email
            }
        })

        // Clerk MetaData

        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
            libraryCreated: true,
            },
        });




        return res.status(200).json({
           library,
           message:"Library is created"
        })
    } catch (error) {
        return res.status(500).json({
            message:"Failed to create Library",
        })
    }

}

export const updateLibrary=async(req:Request,res:Response)=>{
  
    try {
        const library=await prisma.library.findUnique({
            where:{
                clerkUserId:req.body.clerkUserId
            }
        })
        if(library){
            const library=await prisma.library.update({
                data:req.body,
                where:{
                    clerkUserId:req.body.clerkUserId
                }
            })
            return res.status(200).json({
                message:"Successfully Updated Details",
                library
            })
        }
        
        return res.status(404).json({
            message:"Not found"
        })
    } catch (error) {
        return res.status(500).json({
            message:"Try after sometime"
        })
        
    }

}

export const deleteLibrary=async(req:Request,res:Response)=>{
    //first  get clerkUserId
    const libraryId=req.params.id
    
    try {
      const library=await prisma.library.findUnique({
        where:{
            // clerkUserId:clerkUserId
            id:libraryId as string
        }
    })
    if (library){
        const  deleteLib=await prisma.library.delete({
            where:{
                // clerkUserId
                id:libraryId as string
            }
        })
        return res.json({
            message:"Deleted Successfully"
        })
    }
     return res.json({
            message:"Not Found"

        })
    

   } catch (error) {
    return res.status(500).json({
        message:"Try after sometime"
    })
    
   }

}