"use server";

import { revalidateTag } from "next/cache";
import { createReview } from "@/api/reviews";
import { type ReviewCreateMutationVariables } from "@/gql/graphql";

const addProductReview = async (formData: FormData) => {
	const review = {
		rating: parseInt(formData.get("rating") as string),
		description: formData.get("content"),
		productId: formData.get("productId"),
		email: formData.get("email"),
		author: formData.get("name"),
		title: formData.get("headline"),
	} as ReviewCreateMutationVariables;

	const cart = await createReview(review);
	revalidateTag("review");
	return !!cart.id;
};
export { addProductReview };
