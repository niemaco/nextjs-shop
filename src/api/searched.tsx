import { executeGraphql } from "@/api/graphql";
import { ProductFragment, ProductsGetSearchedDocument } from "@/gql/graphql";

export const getSearchedProducts = async (
	offset: string,
	take: string,
	search: string,
): Promise<ProductFragment[]> => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetSearchedDocument,
		variables: {
			offset: parseInt(offset, 10),
			take: parseInt(take, 10),
			search,
		},
	});

	return graphqlResponse.products.data || [];
};
