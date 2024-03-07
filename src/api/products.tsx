import { ProductsGetDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphql";

export const getProducts = async (page: number = 1, limit = 12) => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	const offset = limit * (page - 1);
	const graphqlResponse = await executeGraphql(ProductsGetDocument, {
		offset,
		take: limit,
	});

	return {
		total: graphqlResponse.products.meta.total,
		products: graphqlResponse.products.data,
	};
};
