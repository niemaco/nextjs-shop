import Link from "next/link";
import { formatPrice } from "@/utils/price";
import { type ProductGetByIdQuery } from "@/gql/graphql";

export const ProductDetails = ({ product }: { product: ProductGetByIdQuery["product"] }) => {
	return (
		<div className="flex flex-col">
			<div className="my-3 text-gray-700">
				<h3 className="text-lg font-semibold">
					<Link
						href={`/product/${product.id}`}
						className=" hover:text-red-400 focus-visible:text-red-400 group-hover:text-red-600 group-focus-visible:grayscale-0"
					>
						{product.name}
					</Link>
				</h3>

				{/*<div className="mb-3">*/}
				{/*	<span className="sr-only">Category</span> <span>{product.category}</span>*/}
				{/*</div>*/}

				<div>
					<span className="sr-only">Price</span> <span>{formatPrice(product.price)}</span>
				</div>
			</div>
		</div>
	);
};
