import { ProductItemFragment, ProductsGetDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphql";

type ProductsWithMeta = {
	products: ProductItemFragment[];
	numberOfProducts: number;
};

// queries
export const getProducts = async (page: string = "1", limit = 12): Promise<ProductsWithMeta> => {
	const offset = limit * (parseInt(page, 10) - 1);
	const graphqlResponse = await executeGraphql({
		query: ProductsGetDocument,
		variables: { offset, limit },
	});

	return {
		numberOfProducts: graphqlResponse.products.meta.total,
		products: graphqlResponse.products.data,
	};
};
