import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById } from "@/api/productById";
import { formatPrice } from "@/utils/price";
import { type ProductGetByIdQuery } from "@/gql/graphql";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product: ProductGetByIdQuery["product"] = await getProductById(
		parseInt(params.productId, 10),
	);

	return {
		title: product?.name || "",
		description: product?.description || "",
	};
}

export default async function ProductPage({
	params,
}: {
	params: {
		productId: number;
	};
}) {
	const product: ProductGetByIdQuery["product"] = await getProductById(
		parseInt(params.productId, 10),
	);

	if (!product) {
		throw notFound();
	}

	return (
		<section className="container mx-auto py-8">
			<div className="mx-auto max-w-lg overflow-hidden rounded-lg bg-white shadow-md">
				<img src={product.images[0].url} alt={product.images[0].alt} className="w-full" />

				<div className="px-4 py-2">
					<h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>

					<p className="flex flex-col gap-2 py-2 text-xl text-gray-700">
						<del className="text-gray-500">{formatPrice(product.price)}</del>
						<span className="font-bold text-green-600">{formatPrice(product.price)}</span>
					</p>

					<button className="mb-4 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
						Add to Cart
					</button>

					<div className="grid grid-flow-col items-end justify-between pb-4">
						{product.categories.length && (
							<p className="shrink px-4 py-2 text-gray-700">
								<span>Categories: </span>
								{product.categories.map((category: { name: string; slug: string }) => (
									<Link
										key={category.name}
										href={`/categories/${category.slug}/1`}
										className="mr-2 text-blue-500 hover:underline focus-visible:underline"
									>
										{category.name} {category.slug}
									</Link>
								))}
							</p>
						)}

						<Link href="#" className="hover:underline focus-visible:underline">
							<img
								src="/red_shoes_logo.jpeg"
								alt="Manufacturer Logo"
								className="mx-auto h-20 w-20 rounded-full"
							/>
						</Link>
					</div>
					<p className="py-2 text-gray-700">{product.description}</p>
				</div>
			</div>
		</section>
	);
}
