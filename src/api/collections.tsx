import { executeGraphql } from "@/api/graphql";
import { ProductsGetByCollectionDocument } from "@/gql/graphql";

export const getProductsByCollection = async (slug: string) => {
	const graphqlResponse = await executeGraphql(ProductsGetByCollectionDocument, {
		slug,
	});

	return graphqlResponse.collection?.products || [];
};
