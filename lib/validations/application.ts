import { z } from "zod";

export const applicationSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(9, "Please enter a valid phone number"),
  city: z.enum(["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Other UAE", "Outside UAE"]),
  status: z.enum([
    "Fresh Graduate",
    "Junior Developer",
    "Software Engineer",
    "Data Analyst",
    "Student",
    "Career Switcher",
    "Other",
  ]),
  pythonLevel: z.enum(["Beginner", "Intermediate", "Advanced"]),
  sqlLevel: z.enum(["Basic", "Intermediate", "Advanced"]),
  linuxLevel: z.enum(["Beginner", "Intermediate", "Advanced"]),
  motivation: z
    .string()
    .min(150, "Please write at least 150 characters — we want to know your story")
    .max(1000, "Please keep it under 1000 characters"),
  goal: z.string().min(1, "Please select your goal"),
  linkedin: z.string().url().optional().or(z.literal("")),
  github: z.string().url().optional().or(z.literal("")),
  commitment: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the commitment to apply" }),
  }),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;

/** Server-side data shape (text fields only, after validation). */
export type ApplicationData = Omit<ApplicationFormData, "commitment">;
