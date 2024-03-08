import { executeGraphql } from "@/api/graphql";
import { ProductGetByIdDocument } from "@/gql/graphql";

export const getProductById = async (productId: number) => {
	const graphqlResponse = await executeGraphql(ProductGetByIdDocument, {
		productId: productId.toString(10),
	});

	return graphqlResponse.product;
};
