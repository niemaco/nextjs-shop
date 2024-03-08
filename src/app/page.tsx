import { getRelatedProducts } from "@/api/related";
import { ProductSortBy, SortDirection } from "@/gql/graphql";
import { RelatedProducts } from "@/ui/organisms/RelatedProducts";

export default async function HomePage() {
	const sortOrderKind: SortDirection[] = ["ASC", "DESC"];
	const sortOrder: SortDirection = Math.floor(Math.random()) ? sortOrderKind[1] : sortOrderKind[0];
	const sortByKind: ProductSortBy[] = ["DEFAULT", "NAME", "PRICE", "RATING"];

	const sortBy: ProductSortBy = Math.floor(Math.random() * 4) ? sortByKind[1] : sortByKind[0];
	const relatedProducts = await getRelatedProducts("0", "4", sortOrder, sortBy);

	return (
		<div className="py-6">
			<h1 className="py-4">HomePage</h1>
			<RelatedProducts products={relatedProducts} />
		</div>
	);
}
