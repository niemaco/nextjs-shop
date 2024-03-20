import {
	type ProductFragment,
	ProductsGetDocument,
	type ProductSortBy,
	type SortDirection,
} from "@/gql/graphql";
import { executeGraphql } from "@/api/graphql";

type GetProductsParams = {
	page: string;
	limit: number;
	order?: SortDirection;
	orderBy?: ProductSortBy;
};

type ProductsWithMeta = {
	products: ProductFragment[];
	numberOfProducts: number;
};

// queries
export const getProducts = async ({
	page = "1",
	limit = 12,
	order = "ASC",
	orderBy = "DEFAULT",
}: GetProductsParams): Promise<ProductsWithMeta> => {
	const offset = limit * (parseInt(page, 10) - 1);

	const graphqlResponse = await executeGraphql({
		query: ProductsGetDocument,
		variables: { offset, take: limit, order, orderBy },
		next: {
			revalidate: 0,
		},
	});

	return {
		numberOfProducts: graphqlResponse.products.meta.total,
		products: graphqlResponse.products.data,
	};
};
