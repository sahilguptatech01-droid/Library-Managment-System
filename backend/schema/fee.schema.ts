import { z } from "zod";


const month=[
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER"
]

export const feeSchema=z.object({
    amount:z.number().positive(),
    studentId:z.string(),
    paymentDate:z.string(),
    month:z.enum(month)

})


