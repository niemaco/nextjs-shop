import Link from "next/link";

const PaymentCancelledPage = async () => {
	return (
		<>
			<h1>Cart cancelled</h1>
			<Link href="/public">Return to home page</Link>
		</>
	);
};

export default PaymentCancelledPage;
