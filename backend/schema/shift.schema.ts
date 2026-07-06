import{ z} from "zod"

export const createShiftSchema=z.object({
    shifts:z.string(),
    libraryId:z.string()

})

export type CreateShiftInput = z.infer<typeof createShiftSchema>;