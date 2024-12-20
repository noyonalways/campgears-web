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

export const registerFormSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
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
  terms: z.boolean({
    required_error: "You must agree to the terms and conditions",
  }),
});
