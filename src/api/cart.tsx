import { executeGraphql } from "@/api/graphql";
import {
	CartAddItemDocument,
	CartFindOrCreateDocument,
	CartGetByIdDocument,
	MutationCartAddItemInput,
} from "@/gql/graphql";
import { notFound } from "next/navigation";

export const addToCart = async (cartId: string, productId: string): Promise<boolean> => {
	const input: MutationCartAddItemInput = {
		item: {
			productId,
			quantity: 1,
		},
	};

	const graphqlResponse = await executeGraphql(CartAddItemDocument, {
		id: cartId,
		input,
	});

	if (!graphqlResponse.cartAddItem.id) {
		throw notFound();
	}

	return cartId === graphqlResponse.cartAddItem.id;
};

export const createOrFindCart = async (input?: MutationCartAddItemInput, id?: string) => {
	const graphqlResponse = await executeGraphql(CartFindOrCreateDocument, {
		input: {},
	});

	if (!graphqlResponse.cartFindOrCreate.id) {
		throw notFound();
	}

	return graphqlResponse.cartFindOrCreate;
};

export const getCartById = async (cartId: string) => {
	const graphqlResponse = await executeGraphql(CartGetByIdDocument, {
		id: cartId,
	});

	return graphqlResponse.cart;
};
