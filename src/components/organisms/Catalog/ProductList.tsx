import { ProductListItem } from "@/ui/molecules/Catalog/ProductListItem";
import { ProductItemFragment } from "@/gql/graphql";

type ProductListProps = {
	products: ProductItemFragment[];
};

export const ProductList = ({ products }: ProductListProps) => {
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
