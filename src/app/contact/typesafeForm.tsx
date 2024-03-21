"use client";

import { type TypeOf, type ZodType } from "zod";
import { useFormState } from "react-dom";

type FormContract<
	TData = unknown,
	TErrors extends Partial<Record<keyof TData, string[]>> = Partial<Record<keyof TData, string[]>>,
> = { success: true; errors: TErrors; response: TData } | { success: false; errors: TErrors };

export const useTypeSafeFormState = <FormSchema extends ZodType>(
	schema: FormSchema,
	action: (data: TypeOf<FormSchema>) => Promise<unknown>,
) => {
	return useFormState(
		async (_prevState: unknown, formData: FormData): Promise<FormContract<TypeOf<FormSchema>>> => {
			const data = await schema.safeParseAsync(Object.fromEntries(formData));

			if (!data.success) {
				return {
					success: false as const,
					errors: data.error.flatten().fieldErrors as Partial<
						Record<keyof TypeOf<FormSchema>, string[]>
					>,
				};
			}

			const newState = { success: true as const, errors: {}, response: data.data as unknown };
			await action(data.data as unknown);
			return newState;
		},
		null,
	);
};
