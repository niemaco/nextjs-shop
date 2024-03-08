import { executeGraphql } from "@/api/graphql";
import { ProductsGetByCollectionDocument } from "@/gql/graphql";

export const getProductsByCollection = async (slug: string, page = 1, limit = 12) => {
	console.log(slug);
	const graphqlResponse = await executeGraphql(ProductsGetByCollectionDocument, {
		slug,
	});

	return graphqlResponse.collection?.products || [];
};
