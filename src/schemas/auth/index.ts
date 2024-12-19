import { z } from "zod";

export const singInFormSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Provide a valid email address",
    }),
  password: z.string({
    required_error: "Password is required",
  }),
});
