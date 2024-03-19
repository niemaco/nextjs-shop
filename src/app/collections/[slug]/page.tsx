import { notFound } from "next/navigation";
import { BaseHeading } from "@/components/atoms/BaseHeading";
import { getProductsByCollection } from "@/api/collections";
import { ProductList } from "@/components/organisms/Catalog/ProductList";

export default async function CollectionsPage({ params }: { params: { slug: string } }) {
	if (!params.slug) {
		throw notFound();
	}

	const products = await getProductsByCollection(params.slug);

	return (
		<section className="grid grid-cols-1 gap-4 py-4">
			<BaseHeading text={`Collection ${params.slug}`} />
			<ProductList products={products} />
		</section>
	);
}
