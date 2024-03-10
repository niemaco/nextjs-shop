"use client";

import { useOptimistic } from "react";
import { changeItemQuantity } from "@/server-actions/changeItemQuantity";

type ChangeQuantityProps = {
	cartId: string;
	productId: string;
	quantity: number;
};
export const ChangeQuantity = ({ cartId, productId, quantity }: ChangeQuantityProps) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);

	return (
		<form className="flex">
			<button
				className="h-6 w-6 border"
				type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeItemQuantity(cartId, productId, optimisticQuantity - 1);
				}}
			>
				-
			</button>
			<span className="w-8 text-center">{optimisticQuantity}</span>
			<button
				className="h-6 w-6 border"
				type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(cartId, productId, optimisticQuantity + 1);
				}}
			>
				+
			</button>
		</form>
	);
};
