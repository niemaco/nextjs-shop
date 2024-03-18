import { executeGraphql } from "@/api/graphql";
import { ReviewCreateDocument, type ReviewCreateMutationVariables } from "@/gql/graphql";

export const createReview = async (review: ReviewCreateMutationVariables) => {
	const graphqlResponse = await executeGraphql({
		query: ReviewCreateDocument,
		variables: {
			...review,
		},
	});

	return graphqlResponse.reviewCreate;
};
