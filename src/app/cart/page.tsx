import Link from "next/link";
import { formatPrice } from "@/utils/price";
import { ChangeQuantity } from "@/components/atoms/ChangeQuantity";
import { RemoveButton } from "@/components/atoms/RemoveButton";
import { getCart } from "@/api/cart";

export default async function CartPage() {
	const cart = await getCart();
	const isCartEmpty = !cart?.items.length || false;
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
							<th>Action</th>
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
									<td className="px-4 py-2">
										<RemoveButton productId={item.product.id} cartId={cart.id} />
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
			<Link
				href={"/checkout"}
				className="rounded-sm border bg-slate-100 px-8 py-2 shadow-sm transition-colors hover:bg-slate-200"
			>
				Pay
			</Link>
		</div>
	);
}
