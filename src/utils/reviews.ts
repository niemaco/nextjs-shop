type CurrentReviews = {
	rating: number;
}[];

export const calculateNewRating = (currentReviews: CurrentReviews) => {
	const allRatings = currentReviews.map((review) => review.rating);
	const sum = allRatings.reduce((total, rating) => total + rating, 0);

	return sum / allRatings.length;
};

export const updateReviews = (reviews: { rating: number }[], newRating: number) => {
	reviews.push({ rating: newRating });

	return reviews;
};
