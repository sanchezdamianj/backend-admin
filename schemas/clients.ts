import { z } from "zod";
import validateObjectId from "../helpers/validateObjectId";

const DOC_TYPES = ["RUC", "CUIT", "Cedula", "Pasaporte"] as const;

export const ClientSchema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.string().email("Email format invalid"),
    document_type: z.enum(DOC_TYPES),
    document_value: z.string()
})

export const ClientCreationSchema = z.object({
    body:ClientSchema
})
export const ClientEditionSchema = z.object({
    body:ClientSchema.partial(),
    params: z.object({
        id: z.custom(validateObjectId, "Id not valid")
    })
})

export type Client = z.infer<typeof ClientSchema>