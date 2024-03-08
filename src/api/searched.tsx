import { executeGraphql } from "@/api/graphql";
import { ProductItemFragment, ProductsGetSearchedDocument } from "@/gql/graphql";

export const getSearchedProducts = async (
	offset: string,
	take: string,
	search: String,
): Promise<ProductItemFragment[]> => {
	const graphqlResponse = await executeGraphql(ProductsGetSearchedDocument, {
		offset: parseInt(offset, 10),
		take: parseInt(take, 10),
		search,
	});

	return graphqlResponse.products.data || [];
};
