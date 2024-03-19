import Link from "next/link";
import { getRelatedProducts } from "@/api/related";
import { type ProductSortBy, type SortDirection } from "@/gql/graphql";
import { RelatedProducts } from "@/components/organisms/RelatedProducts";

export default async function HomePage() {
	const sortOrderKind: SortDirection[] = ["ASC", "DESC"];
	const sortOrder = sortOrderKind[Math.floor(Math.random())] || "ASC";
	const sortByKind: ProductSortBy[] = ["DEFAULT", "NAME", "PRICE", "RATING"];
	const sortBy = sortByKind[Math.floor(Math.random() * 4)] || "DEFAULT";
	const relatedProducts = await getRelatedProducts("0", "4", sortOrder, sortBy);

	return (
		<div className="py-6">
			<h1 className="py-4">HomePage</h1>
			<Link href={"/collections/summer-vibes"}>Summer Vibes</Link>
			<br />
			<Link href={"/collections/new-arrivals"}>New Arrivals</Link>
			<RelatedProducts products={relatedProducts} />
		</div>
	);
}
