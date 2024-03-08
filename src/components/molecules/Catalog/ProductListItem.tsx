import { ProductDetails } from "@/ui/atoms/Catalog/ProductDetails";
import { ProductImage } from "@/ui/atoms/Catalog/ProductImage";
import { ProductItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductItemFragment;
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
