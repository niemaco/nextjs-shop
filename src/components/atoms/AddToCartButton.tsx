"use client";

import { useFormStatus } from "react-dom";

export function AddToCartButton() {
	const status = useFormStatus();

	return (
		<button
			type="submit"
			disabled={status.pending}
			className="mb-4 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
		>
			Add to cart
		</button>
	);
}
