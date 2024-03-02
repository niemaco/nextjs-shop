import Link from "next/link";
import { getProductById } from "@/api/products";
import { formatPrice } from "@/utils/price";

export default async function ProductPage({
	params,
}: {
	params: {
		productId: string;
	};
}) {
	const product = await getProductById(params.productId);

	return (
		<section className="container mx-auto py-8">
			<div className="mx-auto max-w-lg overflow-hidden rounded-lg bg-white shadow-md">
				<img src={product.image.src} alt={product.image.alt} className="w-full" />

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
						<p className="shrink px-4 py-2 text-gray-700">
							<span>Category: </span>

							<Link href="#" className="text-blue-500 hover:underline focus-visible:underline">
								{product.category}
							</Link>
						</p>

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
