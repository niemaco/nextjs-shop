import { ProductListItem } from "@/ui/molecules/Catalog/ProductListItem";
import type { CatalogProduct as Product } from "@/types/Catalog/Product";

export const ProductList = ({ products }: { products: Product[] }) => {
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
