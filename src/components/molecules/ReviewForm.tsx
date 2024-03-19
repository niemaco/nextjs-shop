"use client";

import { useOptimistic } from "react";
import { useFormStatus } from "react-dom";
import { calculateNewRating, updateReviews } from "@/utils/reviews";
import { addProductReview } from "@/server-actions/review";

type ReviewFormProps = {
	productId: string;
	rating: number;
	reviews: {
		rating: number;
	}[];
};

export const ReviewForm = ({ productId, rating, reviews }: ReviewFormProps) => {
	const formStatus = useFormStatus();

	const [optimisticReviews, setOptimisticReviews] = useOptimistic(
		reviews,
		(
			_state,
			newReviews: {
				rating: number;
			}[],
		) => {
			return newReviews;
		},
	);

	const [optimisticRating, setOptimisticRating] = useOptimistic(
		rating,
		(_state, newRating: number) => {
			console.log(newRating);
			return newRating;
		},
	);

	const handleSubmitReview = async (formData: FormData) => {
		try {
			const rating = formData.get("rating");
			if (typeof rating !== "string") {
				return;
			}

			const parsedRating = parseInt(rating);

			if (!parsedRating) {
				return;
			}

			const updatedReviews = updateReviews(reviews, parsedRating);
			setOptimisticReviews(updatedReviews);

			const newAverageRating = calculateNewRating(reviews);
			setOptimisticRating(newAverageRating);

			if (await addProductReview(formData)) {
				(document.getElementById("add-review-form") as HTMLFormElement)?.reset();
			}
		} catch (error) {
			console.error("Error while handling rating: ", error);
			throw Error("Error while handling rating", {
				cause: error,
			});
		}
	};

	return (
		<>
			<p className="my-3 text-sm text-gray-500">
				<span>Rating:&nbsp;</span>
				<span className="sr-only">Rating:</span>
				{optimisticRating}
				<small>&nbsp;({optimisticReviews.length})</small>
			</p>

			<form data-testid="add-review-form" id="add-review-form" className="my-4 max-w-md">
				<input type="hidden" name="productId" value={productId} />
				<div className="mb-4">
					<label className="mb-1 block" htmlFor="headline">
						Title:
					</label>
					<input
						type="text"
						name="headline"
						id="headline"
						className="w-full rounded-md border px-4 py-2"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="mb-1 block" htmlFor="name">
						Name:
					</label>
					<input
						type="text"
						name="name"
						id="name"
						className="w-full rounded-md border px-4 py-2"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="mb-1 block" htmlFor="content">
						Content:
					</label>
					<textarea
						name="content"
						id="content"
						className="w-full rounded-md border px-4 py-2"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="mb-1 block" htmlFor="review">
						Rating:
					</label>
					<select name="rating" id="rating" className="w-full rounded-md border px-4 py-2" required>
						<option value="">Select Rating</option>
						{[1, 2, 3, 4, 5].map((rating) => (
							<option key={rating} value={rating}>
								{rating}
							</option>
						))}
					</select>
				</div>
				<div className="mb-4">
					<label className="mb-1 block" htmlFor="email">
						Email:
					</label>
					<input
						type="email"
						name="email"
						id="email"
						className="w-full rounded-md border px-4 py-2"
						required
					/>
				</div>

				<button
					disabled={formStatus.pending}
					formAction={handleSubmitReview}
					className={`rounded-sm border bg-slate-300 px-6 py-2 shadow-sm 
                                ${formStatus.pending ? "cursor-not-allowed" : "cursor-pointer"}
                                transition-shadow hover:shadow-md`}
				>
					Submit Review
				</button>
			</form>
		</>
	);
};
