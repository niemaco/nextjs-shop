import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/graphql";
import { type ProductFragment, ProductGetByIdDocument } from "@/gql/graphql";

export const getProductById = async (productId: string): Promise<ProductFragment> => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { productId },
		cache: "no-store",
		next: { tags: ["review"] },
	});

	if (!graphqlResponse.product) {
		throw notFound();
	}

	return graphqlResponse.product;
};
