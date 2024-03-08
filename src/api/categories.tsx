import { executeGraphql } from "@/api/graphql";
import { ProductsGetByCategoryDocument } from "@/gql/graphql";

export const getProductsByCategory = async (slug: string, page = 1, limit = 12) => {
	const graphqlResponse = await executeGraphql(ProductsGetByCategoryDocument, {
		slug,
	});

	return graphqlResponse.category?.products || [];
};
