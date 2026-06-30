
import * as z from "zod";


 export const registerSchema = z
    .object({
      name: z.string().min(3, "Name must be at least 3 characters"),
      username: z
        .string()
        .min(3, "Username must be at least 3 characters")
        .max(20, "Username must be at most 20 characters"),
      email: z.string().email("Invalid email address"),
      dateOfBirth: z
        .date()
        .refine((date) => {
          return new Date().getFullYear() - date.getFullYear() >= 13;
        }, "You must be at least 13 years old")
        .transform(
          (date) =>
            `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`,
        ),
      gender: z.enum(["male", "female"], "Gender is required"),
      password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
          "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
        ),
      rePassword: z.string(),
    })
    .refine((form) => form.password === form.rePassword, {
      message: "Passwords do not match",
      path: ["rePassword"], //must determine which field the error should be associated with
    });
