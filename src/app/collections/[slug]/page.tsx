import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BaseHeading } from "@/components/atoms/BaseHeading";
import { getProductsByCollection } from "@/api/collections";
import { ProductList } from "@/components/organisms/ProductList";
import type { Collection } from "@/gql/graphql";

type CollectionPageParams = { params: { slug: string } };

export async function generateMetadata({ params }: CollectionPageParams): Promise<Metadata> {
	const { name, description }: Collection = await getProductsByCollection(params.slug);

	return {
		title: ` Products from collection: ${name || params.slug}`,
		description: description || "",
	};
}

export default async function CollectionsPage({ params }: CollectionPageParams) {
	if (!params.slug) {
		throw notFound();
	}

	const { products, name }: Collection = await getProductsByCollection(params.slug);

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
