"use client";

import { useFormStatus } from "react-dom";

export function AddToCartButton() {
	const status = useFormStatus();

	return (
		<button
			type="submit"
			disabled={status.pending}
			className="mb-4 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:cursor-wait disabled:bg-gray-200 disabled:text-gray-200 disabled:text-gray-500"
		>
			Add to cart
		</button>
	);
}
