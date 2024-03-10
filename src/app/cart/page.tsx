import { formatPrice } from "@/utils/price";
import { ChangeQuantity } from "@/ui/atoms/ChangeQuantity";
import { getCart } from "@/utils/cart";
import Link from "next/link";

export default async function CartPage() {
	const cart = await getCart();
	const isCartEmpty = !cart.items.length;
	return (
		<div>
			<h1>Cart</h1>
			{isCartEmpty && (
				<>
					<p>Your cart is empty</p>
					<Link href="/">Return to home page</Link>
				</>
			)}
			{!isCartEmpty && (
				<table>
					<thead>
						<tr>
							<th>Product</th>
							<th>Quantity</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{cart.items.map((item) => {
							if (!item.product) {
								return null;
							}
							return (
								<tr key={item.product.id}>
									<td>{item.product.name}</td>
									<td>
										<ChangeQuantity
											cartId={cart.id}
											productId={item.product.id}
											quantity={item.quantity}
										/>
									</td>
									<td>{formatPrice(item.product.price)}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
		</div>
	);
}
