import type { CatalogProductDetails } from "@/types/Catalog/Product";

export const ProductDetails = ({
	product: { category, name, price, slug },
}: CatalogProductDetails) => {
	return (
		<div className="flex flex-col">
			<div className="my-3 text-gray-700">
				{/* TODO: use Link component in future */}
				<a
					href={slug}
					className="text-lg font-semibold group-hover:text-red-600 group-focus-visible:grayscale-0"
				>
					{name}
				</a>
				<div className="mb-3">
					<span className="sr-only">Category</span> <span>{category}</span>
				</div>
				<div>
					<span className="sr-only">Price</span> <span>{price}</span>
				</div>
			</div>
		</div>
	);
};
