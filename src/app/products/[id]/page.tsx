import { BaseHeading } from "@/ui/atoms/BaseHeading";
import { Pagination } from "@/ui/molecules/Catalog/Pagination";
import { ProductList } from "@/ui/organisms/Catalog/ProductList";
import { getProducts } from "@/api/products";
import { type ProductsGetQuery } from "@/gql/graphql";

// TODO: in the future, download from select with the selection of elements
const limit = 12;

export const generateStaticParams = async () => {
	const {
		total,
	}: {
		total: number;
	} = await getProducts(1, limit);

	const maxGeneratedPages = 3;
	const pagesCount = Math.ceil(total / limit);
	const pages = Array.from({ length: pagesCount }).map((_, index): { id: string } => ({
		id: (index + 1).toString(10),
	}));

	return pages.slice(0, maxGeneratedPages);
};

export default async function ProductsPageById({ params }: { params: { id?: string } }) {
	const pageId = parseInt(params?.id || "1");
	const {
		products,
		total,
	}: {
		products: ProductsGetQuery["products"]["data"];
		total: number;
	} = await getProducts(pageId, limit);

	const pagesCount = Math.ceil(total / limit);

	return (
		<section className="grid grid-cols-1 gap-4 py-4">
			<BaseHeading text="Our 20 products" />
			{total && <Pagination numberOfPages={pagesCount} />}
			<ProductList products={products} />
			{total && <Pagination numberOfPages={pagesCount} />}
		</section>
	);
}
