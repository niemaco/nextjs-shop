import { ProductDetails } from "@/ui/atoms/Catalog/ProductDetails";
import { ProductImage } from "@/ui/atoms/Catalog/ProductImage";

export const ProductListItem = ({ product }) => {
	return (
		<li className="group flex flex-col rounded-lg bg-gray-100 p-3 shadow-md">
			{product?.images && product.images[0] && <ProductImage image={product.images[0]} />}
			<ProductDetails product={product} />
		</li>
	);
};
