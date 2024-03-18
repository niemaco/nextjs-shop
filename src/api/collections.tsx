import { executeGraphql } from "@/api/graphql";
import { ProductsGetByCollectionDocument } from "@/gql/graphql";

export const getProductsByCollection = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCollectionDocument,
		variables: { slug },
	});

	return graphqlResponse.collection?.products || [];
};
