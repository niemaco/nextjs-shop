import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getOrderById } from "@/api/orders";

const OrdersPage = async () => {
	const user = await currentUser();
	if (!user) {
		redirect("/sign-in");
	}

	const email = user.emailAddresses[0]?.emailAddress;
	if (!email) {
		return <div>User does not have email</div>;
	}

	const order = await getOrderById(user.id);
	console.log(order);
	return (
		<div>
			<h1>{user.firstName}&rsquo;s Orders</h1>

			{/*{orders.length === 0 ? (*/}
			{/*	<div>No orders found</div>*/}
			{/*) : (*/}
			{/*	<ul>*/}
			{/*{orders.map((order) =>*/}
			{/*		order.id && order.attributes?.createdAt && (*/}
			{/*			<li key={order.id}>*/}
			{/*				<div>{order.attributes.orderId}</div>*/}
			{/*				<div>*/}
			{/*					<time dateTime={order.attributes.createdAt}>*/}
			{/*						{order.attributes.createdAt}*/}
			{/*					</time>*/}
			{/*				</div>*/}
			{/*			</li>*/}
			{/*		)*/}
			{/*)}*/}
			{/*	</ul>*/}
			{/*)}*/}
		</div>
	);
};

export default OrdersPage;
