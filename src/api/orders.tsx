import { executeGraphql } from "@/api/graphql";
import { OrderGetByIdDocument } from "@/gql/graphql";

export const getOrderById = async (id: string) => {
	const graphqlResponse = await executeGraphql({
		query: OrderGetByIdDocument,
		variables: { orderId: id },
	});

	return graphqlResponse.order;
};
