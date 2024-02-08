import { ProductImage } from "@/ui/atoms/Catalog/ProductImage";
import { ProductDetails } from "@/ui/atoms/Catalog/ProductDetails";
import type { CatalogProduct as Product } from "@/types/Catalog/Product";

export const ProductListItem = ({ product }: { product: Product }) => {
	return (
		<li className="group flex flex-col rounded-lg bg-gray-100 p-3 shadow-md">
			<ProductImage image={product.image} />
			<ProductDetails product={product} />
		</li>
	);
};
