export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section className="container mx-auto p-4">
				<h1 className="mb-8 text-3xl font-bold">Our red shoes</h1>
				<ul
					className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
					data-testid="products-list"
				>
					<li className="group flex flex-col rounded-lg bg-gray-100 p-3 shadow-md">
						<div className="aspect-square grayscale group-hover:grayscale-0 group-focus-visible:grayscale-0">
							<img src="/shoes1.jpeg" alt="Red sneakers" className="h-auto w-full object-cover" />
						</div>

						<div className="flex flex-col">
							<div className="my-3 text-gray-700">
								<a
									href="#"
									className="text-lg font-semibold group-hover:text-red-600 group-focus-visible:grayscale-0"
								>
									Red sneakers
								</a>
								<div className="mb-3">
									<span className="sr-only">Category</span> <span>Shoes</span>
								</div>
								<div>
									<span className="sr-only">Price</span> <span>$19.99</span>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</section>
		</main>
	);
}
