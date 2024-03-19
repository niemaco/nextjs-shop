import { cookies } from "next/headers";
import { createCart, getCartById } from "@/api/cart";
import { type CartFragment } from "@/gql/graphql";

export const getCartIdFromCookies = (): string | undefined => {
	return cookies().get("cartId")?.value;
};

export const setCartIdInCookies = (value: string) => {
	cookies().set(
		"cartId",
		value,
		{
			maxAge: 60 * 60 * 24 * 365,
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
			path: "/",
			httpOnly: true,
			secure: true,
			sameSite: "lax",
			priority: "low",
		},
	);
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

	return createCart();
};

export const getCartItemCount = (cart: CartFragment): number => {
	if (!cart?.items.length) {
		return 0;
	}
	return cart.items.reduce((acc: number, item) => acc + item.quantity, 0);
};
