import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BaseHeading } from "@/components/atoms/BaseHeading";
import { getProductsByCategory } from "@/api/categories";
import { ProductList } from "@/components/organisms/ProductList";
import { Pagination } from "@/components/molecules/Pagination";
import { type Category } from "@/gql/graphql";

const limit = 12;

type CategoryPageParams = {
	params: { slug: string; pageId: string };
};

export const generateStaticParams = async () => {
	return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

export async function generateMetadata({ params }: CategoryPageParams): Promise<Metadata> {
	const { name, description }: Category = await getProductsByCategory(params.slug);

	return {
		title: ` Products from category: ${name || params.slug}`,
		description: description || "",
	};
}

export default async function CategoriesPage({ params }: CategoryPageParams) {
	if (!params.slug || !parseInt(params.pageId)) {
		throw notFound();
	}

	const { products = [], name }: Category = await getProductsByCategory(params.slug);

	if (!products) {
		return <>The {name} category does not contain any products.</>;
	}
	const numberOfProducts = products.length;
	const numberOfPages = Math.ceil(numberOfProducts / limit);

	if (parseInt(params.pageId) > numberOfPages) {
		throw notFound();
	}

	return (
		<section className="grid grid-cols-1 gap-4 py-4">
			<BaseHeading>Products from category: {name}</BaseHeading>
			{numberOfPages && <Pagination numberOfPages={numberOfPages} />}
			<ProductList products={products.slice(numberOfPages - 1, limit)} />
			{numberOfPages && <Pagination numberOfPages={numberOfPages} />}
		</section>
	);
}
