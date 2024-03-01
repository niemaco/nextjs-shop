import { ActiveLink } from "@/ui/atoms/ActiveLink";

export default async function ProductPage({
	params,
}: {
	params: {
		productId: string;
	};
}) {
	return (
		<section className="container mx-auto py-8">
			<div className="mx-auto max-w-lg overflow-hidden rounded-lg bg-white shadow-md">
				<img src="/shoes1.jpeg" alt="Product Image" className="w-full" />

				<div className="px-4 py-2">
					<h1 className="text-2xl font-bold text-gray-800">Product {params.productId}</h1>

					<p className="flex flex-col gap-2 py-2 text-xl text-gray-700">
						<del className="text-gray-500">$79.99</del>
						<span className="font-bold text-green-600">$99.99</span>
					</p>

					<button className="mb-4 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
						Add to Cart
					</button>

					<p className="py-2 text-gray-700">Product Description</p>

					<div className="grid grid-flow-col items-end justify-between pb-4">
						<p className="shrink px-4 py-2 text-gray-700">
							<span>Category: </span>

							<ActiveLink href="#" className="text-blue-500" activeClassName="underline">
								Red shoes
							</ActiveLink>
						</p>

						<ActiveLink href="#" activeClassName="" className="">
							<img
								src="/red_shoes_logo.jpeg"
								alt="Manufacturer Logo"
								className="mx-auto h-20 w-20 rounded-full"
							/>
						</ActiveLink>
					</div>
				</div>
			</div>
		</section>
	);
}
