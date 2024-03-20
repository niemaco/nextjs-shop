import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BaseHeading } from "@/components/atoms/BaseHeading";
import { getProductsByCollection } from "@/api/collections";
import { ProductList } from "@/components/organisms/ProductList";

type CollectionPageParams = { params: { slug: string } };

export async function generateMetadata({ params }: CollectionPageParams): Promise<Metadata> {
	const collection = await getProductsByCollection(params.slug);

	return {
		title: ` Products from collection: ${collection?.name || params.slug}`,
		description: collection?.description || null,
	};
}

export default async function CollectionsPage({ params }: CollectionPageParams) {
	if (!params.slug) {
		throw notFound();
	}

	const collection = await getProductsByCollection(params.slug);

	if (!collection) {
		return <>A Collection does not exist.</>;
	}

	const { name, products } = collection;

	if (!products) {
		return <>The {name} collection does not contain any products.</>;
	}

	return (
		<section className="grid grid-cols-1 gap-4 py-4">
			<BaseHeading>Collection {name}</BaseHeading>
			<ProductList products={products} />
		</section>
	);
}
