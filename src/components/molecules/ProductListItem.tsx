import { ProductDetails } from "@/components/atoms/ProductDetails";
import { SquareProductImage } from "@/components/atoms/SquareProductImage";
import { ProductFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="group flex flex-col rounded-lg bg-gray-100 p-3 shadow-md">
			{product.images && product.images[0] && (
				<SquareProductImage image={product.images[0]} height={320} width={320} />
			)}
			<ProductDetails product={product} />
		</li>
	);
};
