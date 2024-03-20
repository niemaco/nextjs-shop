import { executeGraphql } from "@/api/graphql";
import { ProductsGetByCategoryDocument } from "@/gql/graphql";

export const getProductsByCategory = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCategoryDocument,
		variables: { slug },
	});

	return graphqlResponse.category;
};
