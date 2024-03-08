import { notFound } from "next/navigation";
import { BaseHeading } from "@/ui/atoms/BaseHeading";
import { getProductsByCategory } from "@/api/categories";
import { ProductList } from "@/ui/organisms/Catalog/ProductList";

//simple solution
export const generateStaticParams = async () => {
	return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

export default async function CategoriesPage({
	params,
}: {
	params: { slug?: string; id?: string };
}) {
	if (!params.slug) {
		throw notFound();
	}

	const products = await getProductsByCategory(params.slug);

	return (
		<section className="grid grid-cols-1 gap-4 py-4">
			<BaseHeading text={`Products from category ${params.slug}`} />
			{/*{total && <Pagination numberOfPages={3} />}*/}
			<ProductList products={products} />
			{/*{total && <Pagination numberOfPages={3} />}*/}
		</section>
	);
}
