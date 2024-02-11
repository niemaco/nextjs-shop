import type { CatalogProductDetails } from "@/types/Catalog/Product";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const ProductDetails = ({
	product: { category, name, price, slug },
}: CatalogProductDetails) => {
	return (
		<div className="flex flex-col">
			<div className="my-3 text-gray-700">
				<h3 className="text-lg font-semibold">
					<ActiveLink
						href={slug}
						className=" group-hover:text-red-600 group-focus-visible:grayscale-0"
						activeClassName="underline"
					>
						{name}
					</ActiveLink>
				</h3>
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
