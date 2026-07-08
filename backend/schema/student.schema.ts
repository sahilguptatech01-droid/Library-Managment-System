import {z} from "zod";


export const createStudentSchema=z.object({
    libraryId:z.string(),
    shiftId:z.string(),
    name:z.string({
        error:"Name is required"
    }).min(3),
    fatherName:z.string({
        error:"Father Name is required"
    }),
    motherName:z.string({
        error:"Mother Name is required"
    }),
    address:z.string().min(5,"Address is required"),
    mobileNo:z.string().length(10,"Must contain 10 digits"),
    identityProof:z.enum(["ADHARCARD" , "LICENSE","VOTERCARD"]),
    joiningDate:z.string()

})

export const updateStudentSchema=createStudentSchema.partial()