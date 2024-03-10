import { executeGraphql } from "@/api/graphql";
import {
	ProductItemFragment,
	ProductsGetRelatedDocument,
	ProductSortBy,
	SortDirection,
} from "@/gql/graphql";

export const getRelatedProducts = async (
	offset: string,
	take: string,
	sortOrder: SortDirection,
	sortBy: ProductSortBy,
): Promise<ProductItemFragment[]> => {
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
