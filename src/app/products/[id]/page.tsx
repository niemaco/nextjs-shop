import { notFound } from "next/navigation";
import { BaseHeading } from "@/components/atoms/BaseHeading";
import { Pagination } from "@/components/molecules/Pagination";
import { ProductList } from "@/components/organisms/ProductList";
import { getProducts } from "@/api/products";
import { SortingSelect } from "@/components/molecules/SortingSelect";
import { type ProductSortBy, type SortDirection } from "@/gql/graphql";

// TODO: in the future, download from select with the selection of elements
const limit = 12;

type ProductsPageParams = {
	params: { id: string };
	searchParams: {
		order: SortDirection;
		orderBy: ProductSortBy;
	};
};

export const generateStaticParams = async () => {
	const {
		numberOfProducts,
	}: {
		numberOfProducts: number;
	} = await getProducts({ page: "1", limit });

	const defaultNumberOfGeneratedPages = 3;
	const numberOfPages = Math.ceil(numberOfProducts / limit);
	const maximumGeneratedPages =
		numberOfPages > defaultNumberOfGeneratedPages ? defaultNumberOfGeneratedPages : numberOfPages;
	const pages = Array.from({ length: numberOfPages }).map((_, index): { id: string } => ({
		id: (index + 1).toString(10),
	}));

	return pages.slice(0, maximumGeneratedPages);
};

export default async function ProductsPageById({ params, searchParams }: ProductsPageParams) {
	if (!parseInt(params.id)) {
		throw notFound();
	}

	const { products, numberOfProducts } = await getProducts({
		page: params.id,
		limit,
		order: searchParams.order,
		orderBy: searchParams.orderBy,
	});

	const numberOfPages = Math.ceil(numberOfProducts / limit);

	return (
		<section className="grid grid-cols-1 gap-4 py-4">
			<BaseHeading>All products</BaseHeading>
			<Pagination numberOfPages={numberOfPages} />
			<SortingSelect />
			<ProductList products={products} />
			<Pagination numberOfPages={numberOfPages} />
		</section>
	);
}
