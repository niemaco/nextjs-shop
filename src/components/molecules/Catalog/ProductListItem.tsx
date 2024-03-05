import { ProductDetails } from "@/ui/atoms/Catalog/ProductDetails";
import { type ProductGetByIdQuery } from "@/gql/graphql";

export const ProductListItem = ({ product }: { product: ProductGetByIdQuery["product"] }) => {
	return (
		<li className="group flex flex-col rounded-lg bg-gray-100 p-3 shadow-md">
			{/*{product?.images?[0] && <ProductImage image={product.images[0]} /> }*/}
			<ProductDetails product={product} />
		</li>
	);
};
