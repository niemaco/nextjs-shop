import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/graphql";
import {
	CartAddItemDocument,
	CartChangeItemQuantityDocument,
	CartCompleteDocument,
	CartFindOrCreateDocument,
	type CartFragment,
	CartGetByIdDocument,
	CartRemoveItemDocument,
	type MutationCartAddItemInput,
} from "@/gql/graphql";
import { getCartIdFromCookies, setCartIdInCookies } from "@/utils/cart";

// queries
export const getCartById = async (cartId: string) => {
	const graphqlResponse = await executeGraphql({
		query: CartGetByIdDocument,
		variables: {
			id: cartId,
		},
		cache: "no-store",
		next: { tags: ["cart"] },
	});

	return graphqlResponse.cart;
};

// mutations
export const addToCart = async (cartId: string, productId: string): Promise<boolean> => {
	const input: MutationCartAddItemInput = {
		item: {
			productId,
			quantity: 1,
		},
	};

	const graphqlResponse = await executeGraphql({
		query: CartAddItemDocument,
		variables: {
			id: cartId,
			input,
		},
	});

	if (!graphqlResponse.cartAddItem.id) {
		throw notFound();
	}

	return cartId === graphqlResponse.cartAddItem.id;
};

export const createCart = async () => {
	const graphqlResponse = await executeGraphql({
		query: CartFindOrCreateDocument,
		variables: {
			input: {},
		},
	});

	if (!graphqlResponse.cartFindOrCreate.id) {
		throw Error("Failed to create a new cart");
	}

	setCartIdInCookies(graphqlResponse.cartFindOrCreate.id);

	return graphqlResponse.cartFindOrCreate;
};

export const changeCartQuantity = async (cartId: string, productId: string, quantity: number) => {
	const graphqlResponse = await executeGraphql({
		query: CartChangeItemQuantityDocument,
		variables: {
			cartId,
			productId,
			quantity,
		},
	});

	return graphqlResponse.cartChangeItemQuantity;
};

export const removeItem = async (cartId: string, productId: string) => {
	const graphqlResponse = await executeGraphql({
		query: CartRemoveItemDocument,
		variables: {
			cartId,
			productId,
		},
	});

	return graphqlResponse.cartRemoveItem;
};

export const completeCart = async (cartId: string) => {
	const graphqlResponse = await executeGraphql({
		query: CartCompleteDocument,
		variables: {
			cartId,
			userEmail: "karol.osuchowski@gmail.com",
		},
	});

	return graphqlResponse.cartComplete;
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
