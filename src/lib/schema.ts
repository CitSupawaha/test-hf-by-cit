import { z } from "zod";
export const contactFormSchema = z.object({
  email: z.string().email("The email format is incorrect."),
  country: z.string().min(1, "Please select a country."),
  phone: z.string().min(5, "Please enter a valid phone."),
  code: z.string(),
  firstName: z.string().min(1, "Please enter a valid first name."),
  lastName: z.string().min(1, "Please enter a valid last name."),
  experience: z.string().min(1, "Please select a experienc."),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
