import { z } from 'zod'
import validateObjectId from '../helpers/validateObjectId';

const PAYMENT_METHOD_TYPES = [
    "Credit Card",
    "Debit Card",
    "Debt Compensation"
] as const

const TIME_UNITS = z.enum(["Days", "Month", "Years"]);

const saleProductSchema = z.object({
    code: z.string(),
    name: z.string().optional(),
    quantity: z.number(),
    unit_price: z.number(),
    discount: z.number().optional()
}
)
const salePaymentMethodSchema = z.object({
    method: z.string(),
    amount: z.number(),
    time_unit: z.string(),
    time_value: z.number()

})

export const saleSchema = z.object({
    operation_date: z.string(),
    total_amount: z.number(),
    products: z.array(saleProductSchema),
    payment_method: z.array(salePaymentMethodSchema),
    client: z.custom(validateObjectId)
})


export const SaleCreationSchema = z.object({
    body: saleSchema,
})

export type Sale = z.infer<typeof saleSchema>