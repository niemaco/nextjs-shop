import Link from "next/link";
import type { CatalogProductDetails } from "@/types/Catalog/Product";
import { formatPrice } from "@/utils/price";

export const ProductDetails = ({
	product: { category, name, price, id },
}: CatalogProductDetails) => {
	return (
		<div className="flex flex-col">
			<div className="my-3 text-gray-700">
				<h3 className="text-lg font-semibold">
					<Link
						href={`/product/${id}`}
						className=" hover:text-red-400 focus-visible:text-red-400 group-hover:text-red-600 group-focus-visible:grayscale-0"
					>
						{name}
					</Link>
				</h3>
				<div className="mb-3">
					<span className="sr-only">Category</span> <span>{category}</span>
				</div>
				<div>
					<span className="sr-only">Price</span> <span>{formatPrice(price)}</span>
				</div>
			</div>
		</div>
	);
};
