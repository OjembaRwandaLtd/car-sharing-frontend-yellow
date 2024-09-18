import { z } from 'zod'

const CarSchema = z.object({
  name: z.string().min(3, { message: 'Car name must be at least 3 letters' }),
  typeName: z.string({ message: 'Car type is required' }),
  licensePlate: z
    .string()
    .min(1, { message: 'License plate is required' })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9 -]*$/, {
      message: 'License plate must be letters and numbers',
    }),
  horsepower: z
    .number({
      invalid_type_error: 'Horse power is required and must be a number',
    })
    .min(1, { message: 'Horse power must be greater than zero' }),
  fuelType: z.string({ message: 'Fuel type is required' }),
  info: z.string(),
})

export default CarSchema
