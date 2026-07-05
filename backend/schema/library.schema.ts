import { z } from "zod";

export const createLibrarySchema = z.object({
  name: z
    .string()
    .min(1, "Library name is required")
    .max(100),

  ownerName: z
    .string()
    .min(1, "Owner name is required")
    .max(100),

  phoneNo: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number"),

  address: z
    .string()
    .min(1, "Address is required")
    .max(255),

  clerkUserId: z.string(),
});


export const updateLibrarySchema=createLibrarySchema.partial()
