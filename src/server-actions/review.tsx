"use server";

import { createReview } from "@/api/reviews";
import { ReviewCreateMutationVariables } from "@/gql/graphql";
import { revalidateTag } from "next/cache";

const addProductReview = async (formData) => {
	const review: ReviewCreateMutationVariables = {
		rating: parseInt(formData.get("rating")),
		description: formData.get("content"),
		productId: formData.get("productId"),
		email: formData.get("email"),
		author: formData.get("name"),
		title: formData.get("headline"),
	};

	const cart = await createReview(review);
	revalidateTag("review");
	return !!cart.id;
};
export { addProductReview };
