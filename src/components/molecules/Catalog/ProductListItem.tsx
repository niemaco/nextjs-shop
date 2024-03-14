import { ProductDetails } from "@/ui/atoms/Catalog/ProductDetails";
import { ProductImage } from "@/ui/atoms/Catalog/ProductImage";
import { ProductFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="group flex flex-col rounded-lg bg-gray-100 p-3 shadow-md">
			{product.images && product.images[0] && (
				<ProductImage image={product.images[0]} height={320} width={320} />
			)}
			<ProductDetails product={product} />
		</li>
	);
};
