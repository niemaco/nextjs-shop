import { notFound } from "next/navigation";
import { BaseHeading } from "@/components/atoms/BaseHeading";
import { getProductsByCategory } from "@/api/categories";
import { ProductList } from "@/components/organisms/Catalog/ProductList";
import { Pagination } from "@/components/molecules/Catalog/Pagination";

const limit = 12;

export const generateStaticParams = async () => {
	return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

export default async function CategoriesPage({
	params,
}: {
	params: { slug: string; pageId: string };
}) {
	if (!params.slug || !parseInt(params.pageId)) {
		throw notFound();
	}

	const products = await getProductsByCategory(params.slug);
	const numberOfProducts = products.length;
	const numberOfPages = Math.ceil(numberOfProducts / limit);

	if (parseInt(params.pageId) > numberOfPages) {
		throw notFound();
	}

	return (
		<section className="grid grid-cols-1 gap-4 py-4">
			<BaseHeading text={`Products from category ${params.slug}`} />
			{numberOfPages && <Pagination numberOfPages={numberOfPages} />}
			<ProductList products={products.slice(numberOfPages - 1, limit)} />
			{numberOfPages && <Pagination numberOfPages={numberOfPages} />}
		</section>
	);
}
