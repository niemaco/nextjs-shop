import { ProductsGetDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphql";

export const getProducts = async (page: string = "1", limit = 12) => {
	const offset = limit * (parseInt(page, 10) - 1);
	const graphqlResponse = await executeGraphql(ProductsGetDocument, {
		offset,
		take: limit,
	});

	return {
		total: graphqlResponse.products.meta.total,
		products: graphqlResponse.products.data,
	};
};
