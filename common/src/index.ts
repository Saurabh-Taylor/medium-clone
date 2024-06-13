
import { z } from "zod";

//signup

export const signupInput = z.object({
  username:z.string(),
  name:z.string().optional(),
  password:z.string().min(6)
})

//type inference - signup

export type SignupInput = z.infer<typeof signupInput>

// signin

export const signinInput = z.object({
    username:z.string(),
    password:z.string().min(6)
})

export type SigninInput = z.infer<typeof signinInput>