import Stripe from "stripe";
import { getCart } from "@/utils/cart";

type PaymentSuccessPageProps = {
	searchParams: {
		payment_intent_client_secret: string;
		payment_intent: string;
		redirect_status: string;
	};
};

const PaymentSuccessPage = async ({ searchParams }: PaymentSuccessPageProps) => {
	if (!process.env.STRIPE_SECRET_KEY) {
		return null;
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	console.log(searchParams);

	if (searchParams.redirect_status === "poetic-excel-prefer-thrive") {
		const cart = await getCart();
		cart;
	}

	return <div>{searchParams.redirect_status}</div>;
};

export default PaymentSuccessPage;