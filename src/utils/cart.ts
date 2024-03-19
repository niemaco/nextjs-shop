import { cookies } from "next/headers";

export const getCartIdFromCookies = (): string | undefined => {
	return cookies().get("cartId")?.value;
};

export const setCartIdInCookies = (value: string) => {
	cookies().set("cartId", value, {
		maxAge: 60 * 60 * 24 * 365,
		expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
		path: "/",
		httpOnly: true,
		secure: true,
		sameSite: "lax",
		priority: "low",
	});
};
