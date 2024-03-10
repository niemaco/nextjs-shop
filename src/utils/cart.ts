import { cookies } from "next/headers";
import { createCart, getCartById } from "@/api/cart";

export const getCartIdFromCookies = (): string | undefined => {
	return cookies().get("cartId" as any)?.value;
};

export const setCartIdInCookies = (value: string) => {
	cookies().set("cartId" as any, value as any);
};

export const getExistingCart = async () => {
	const cartId = getCartIdFromCookies();

	if (!cartId) {
		return null;
	}

	const cart = await getCartById(cartId);

	return cart ? cart : null;
};

export const getCart = async () => {
	const existingCart = await getExistingCart();

	if (existingCart) {
		return existingCart;
	}

	return await createCart();
};

export const getCartItemCount = (cart) => {
	if (!cart.items.length) {
		return 0;
	}
	return cart.items.reduce((acc, item) => acc + item.quantity, 0);
};
