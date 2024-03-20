import { ProductListItem } from "@/components/molecules/ProductListItem";
import { type ProductFragment } from "@/gql/graphql";

type RelatedProductsProps = {
	products: ProductFragment[];
	"data-testid": string;
};

export const RelatedProducts = (props: RelatedProductsProps) => {
	const testIdKey = props["data-testid"];
	return (
		<ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4" data-testid={testIdKey}>
			{props.products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
