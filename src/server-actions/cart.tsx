"use server";

import { changeCartQuantity, removeItem } from "@/api/cart";

const changeItemQuantity = async (cartId: string, productId: string, quantity: number) => {
	const cart = await changeCartQuantity(cartId, productId, quantity);
	const CartItem = cart.items.find((item) => item.product.id === productId);

	return CartItem?.quantity;
};

const removeCartItem = async (cartId: string, productId: string) => {
	return await removeItem(cartId, productId);
};

export { changeItemQuantity, removeCartItem };
