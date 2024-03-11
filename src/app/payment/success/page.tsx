import Stripe from "stripe";

type PaymentSuccessPageProps = {
	searchParams: { sessionId: string };
};

const PaymentSuccessPage = async ({ searchParams }: PaymentSuccessPageProps) => {
	if (!process.env.STRIPE_SECRET_KEY) {
		return null;
	}

	if (!searchParams?.sessionId) {
		throw new Error("No required parameters");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2022-11-15",
		typescript: true,
	});

	const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(searchParams.sessionId);

	return <div>{stripeCheckoutSession.payment_status}</div>;
};

export default PaymentSuccessPage;
