"use server";

import { revalidateTag } from "next/cache";
import { changeCartQuantity, removeItem } from "@/api/cart";

const changeItemQuantity = async (cartId: string, productId: string, quantity: number) => {
	const cart = await changeCartQuantity(cartId, productId, quantity);
	const CartItem = cart.items.find((item) => item.product.id === productId);

	revalidateTag("cart");
	return CartItem?.quantity;
};

const removeCartItem = async (cartId: string, productId: string) => {
	return removeItem(cartId, productId);
};

export { changeItemQuantity, removeCartItem };
