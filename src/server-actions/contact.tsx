"use server";

import { contactSchema, type contractSchemaType } from "@/app/contact/contactSchema";

export const contactAction = async (formData: contractSchemaType) => {
	await contactSchema.parseAsync(formData);
};
