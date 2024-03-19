import Link from "next/link";
import { formatPrice } from "@/utils/price";
import { type ProductFragment } from "@/gql/graphql";

type ProductDetailsProps = {
	product: ProductFragment;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
	return (
		<div className="flex flex-col">
			<div className="my-3 text-gray-700">
				<h3 className="text-lg font-semibold">
					<Link
						href={`/product/${product.id}`}
						className="hover:text-red-400 focus-visible:text-red-400 group-hover:text-red-600 group-focus-visible:grayscale-0"
					>
						{product.name}
					</Link>
				</h3>

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
								<Link key={index} href={`/categories/${category.slug}/1`}>
									{category.name}
								</Link>
							),
						)}
					</div>
				)}
				<div>
					<span className="sr-only">Price</span> <span>{formatPrice(product.price)}</span>
				</div>
			</div>
		</div>
	);
};
