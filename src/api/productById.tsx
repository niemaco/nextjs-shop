import { executeGraphql } from "@/api/graphql";
import { ProductFragment, ProductGetByIdDocument } from "@/gql/graphql";
import { notFound } from "next/navigation";

export const getProductById = async (productId: string): Promise<ProductFragment> => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { productId },
	});

	if (!graphqlResponse.product) {
		throw notFound();
	}

	return graphqlResponse.product;
};
