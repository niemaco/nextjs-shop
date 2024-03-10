"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeCartItem } from "@/server-actions/cart";

type RemoveButtonProps = {
	cartId: string;
	productId: string;
};

export function RemoveButton({ cartId, productId }: RemoveButtonProps) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	return (
		<button
			disabled={isPending}
			onClick={() =>
				startTransition(async () => {
					await removeCartItem(cartId, productId);
					router.refresh();
				})
			}
			className="text-sm font-medium text-indigo-600 hover:text-indigo-500 disabled:cursor-wait disabled:text-slate-400"
		>
			Remove
		</button>
	);
}
