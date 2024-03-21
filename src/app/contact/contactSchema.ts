import * as z from "zod";

export const contactSchema = z.object({
	name: z.string().min(3).max(50),
	email: z.string().min(1).email(),
	message: z.string().min(10).max(1000),
});

export type contractSchemaType = z.TypeOf<typeof contactSchema>;
