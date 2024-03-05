import { ProductsGetDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphql";

export const getProducts = async (page: number = 1) => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	const take = 20;
	const offset = take * (page - 1);
	const graphqlResponse = await executeGraphql(ProductsGetDocument, {
		offset,
		take,
	});

	return {
		total: graphqlResponse.products.meta.total,
		products: graphqlResponse.products.data,
	};
};
