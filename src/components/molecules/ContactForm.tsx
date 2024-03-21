"use client";

import { useFormStatus } from "react-dom";
import { useRef } from "react";
import { contactAction } from "@/server-actions/contact";
import { useTypeSafeFormState } from "@/app/contact/typesafeForm";
import { contactSchema } from "@/app/contact/contactSchema";

export const ContactForm = () => {
	const formRef = useRef<HTMLFormElement | null>;
	const [state, action] = useTypeSafeFormState(contactSchema, async (data) => {
		await contactAction(data);
		formRef.current?.reset();
	});

	return (
		<form ref={formRef} action={action} className="my-4 flex flex-col">
			<label htmlFor="contact-name">Name</label>
			<input type="text" id="contact-name" name="name" />
			{state?.errors.name.map((error) => (
				<p key={error} className="text-red-600">
					{error}
				</p>
			))}

			<label htmlFor="contact-email">E-mail</label>
			<input type="text" id="contact-email" name="email" />
			{state?.errors.email.map((error) => (
				<p key={error} className="text-red-600">
					{error}
				</p>
			))}

			<label htmlFor="contact-message">Message</label>
			<textarea id="contact-message" name="message" rows={5} />
			{state?.errors.message.map((error) => (
				<p key={error} className="text-red-600">
					{error}
				</p>
			))}

			<SubmitButton />
			<p>{JSON.stringify(state)}</p>
		</form>
	);
};
const SubmitButton = () => {
	const { pending } = useFormStatus();
	return (
		<button disabled={pending} className="btn disabled:cursor-wait" type="submit">
			Submit
		</button>
	);
};
