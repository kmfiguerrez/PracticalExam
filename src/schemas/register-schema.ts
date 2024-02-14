
import { z } from "zod"

const RegisterSchema = z.object({
  email: z.string().email({ message: "Provide a valid email"}),
  password: z.string().min(1, {message: "password is required"})
})


type TRegisterForm = z.infer<typeof RegisterSchema>


export default RegisterSchema

export type { TRegisterForm }