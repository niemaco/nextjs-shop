import Stripe from "stripe";
import { StripeForm } from "@/components/organisms/StripeForm";
import { getCart } from "@/utils/cart";
import { notFound } from "next/navigation";

export default async function CheckoutPage() {
	const cart = await getCart();
	if (!cart) {
		throw notFound();
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY env variable");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const totalAmount = cart.items.reduce((acc, item) => acc + (item.product?.price ?? 0), 0);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: totalAmount,
		currency: "usd",
		automatic_payment_methods: {
			enabled: true,
		},
		metadata: {
			cartId: cart.id,
		},
	});

	if (!paymentIntent.client_secret) {
		throw new Error("Missing client_secret");
	}

	return <StripeForm clientSecret={paymentIntent.client_secret} />;
}
