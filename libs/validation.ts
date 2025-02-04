import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(3).max(1000),
  category: z.string().min(3).max(20),
  media: z.string().url(),
  pitch: z.string().min(2),
});
