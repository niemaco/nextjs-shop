import Link from "next/link";
import { formatPrice } from "@/utils/price";
import { type ProductFragment } from "@/gql/graphql";

type ProductDetailsProps = {
	product: ProductFragment;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
	return (
		<div className="flex flex-col">
			<Link href={`/product/${product.id}`} className="my-3 text-gray-700">
				<h3 className="text-lg font-semibold">{product.name}</h3>

				{product?.categories?.length && (
					<div className="mb-3">
						<span className="sr-only">Categories</span>
						{product.categories.map(
							(
								category: {
									name: string;
									slug: string;
								},
								index,
							) => (
								<span key={index}>{category.name}</span>
							),
						)}
					</div>
				)}
				<div>
					<span className="sr-only">Price</span>
					<span data-testid="product-price">{formatPrice(product.price)}</span>
				</div>

				<div>
					<span className="sr-only">Rating</span>
					<span data-testid="product-rating">{product.rating?.toFixed(2)}</span>
				</div>
			</Link>
		</div>
	);
};
