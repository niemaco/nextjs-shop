import { ProductFragment, ProductsGetDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphql";

type ProductsWithMeta = {
	products: ProductFragment[];
	numberOfProducts: number;
};

// queries
export const getProducts = async (page: string = "1", limit = 12): Promise<ProductsWithMeta> => {
	const offset = limit * (parseInt(page, 10) - 1);
	const graphqlResponse = await executeGraphql({
		query: ProductsGetDocument,
		variables: { offset, take: limit },
		next: {
			revalidate: 60 * 60 * 24, // 1 day
		},
	});

	return {
		numberOfProducts: graphqlResponse.products.meta.total,
		products: graphqlResponse.products.data,
	};
};
