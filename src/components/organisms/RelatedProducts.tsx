import { ProductListItem } from "@/components/molecules/ProductListItem";
import { type ProductFragment } from "@/gql/graphql";

type RelatedProductsProps = {
	products: ProductFragment[];
};

export const RelatedProducts = ({ products }: RelatedProductsProps) => {
	return (
		<ul
			className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
