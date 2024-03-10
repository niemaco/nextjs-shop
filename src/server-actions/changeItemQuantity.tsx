"use server";

import { changeCartQuantity } from "@/api/cart";

const changeItemQuantity = async (cartId: string, productId: string, quantity: number) => {
	const cart = await changeCartQuantity(cartId, productId, quantity);
	const CartItem = cart.items.find((item) => item.product.id === productId);

	return CartItem?.quantity;
};

export { changeItemQuantity };
