"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "@/components/molecules/CheckoutForm";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
	throw new Error("Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY env variable");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

type StripeFormProps = { clientSecret: string };

export const StripeForm = ({ clientSecret }: StripeFormProps) => {
	return (
		<Elements options={{ appearance: { theme: "stripe" }, clientSecret }} stripe={stripePromise}>
			<CheckoutForm />
		</Elements>
	);
};
