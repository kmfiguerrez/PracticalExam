
import { z } from "zod"

const LoginSchema = z.object({
  email: z.string().email({ message: "Provide a valid email"}),
  password: z.string().min(1, {message: "password is required"})
})


type TLoginForm = z.infer<typeof LoginSchema>


export default LoginSchema

export type { TLoginForm }