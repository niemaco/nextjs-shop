import { executeGraphql } from "@/api/graphql";
import {
	ProductFragment,
	ProductsGetRelatedDocument,
	ProductSortBy,
	SortDirection,
} from "@/gql/graphql";

export const getRelatedProducts = async (
	offset: string,
	take: string,
	sortOrder: SortDirection,
	sortBy: ProductSortBy,
): Promise<ProductFragment[]> => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetRelatedDocument,
		variables: {
			offset: parseInt(offset, 10),
			take: parseInt(take, 10),
			sortOrder,
			sortBy,
		},
	});

	return graphqlResponse.products.data || [];
};
