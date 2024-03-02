import { Suspense } from "react";
import { BaseHeading } from "@/ui/atoms/BaseHeading";
import { Pagination } from "@/ui/molecules/Catalog/Pagination";
import { ProductList } from "@/ui/organisms/Catalog/ProductList";
import { getProducts } from "@/api/products";

export default async function ProductsPage() {
	const products = await getProducts();
	return (
		<section className="grid grid-cols-1 gap-4 py-4">
			<BaseHeading text="Our 20 products" />
			<Pagination />
			<Suspense>
				<ProductList products={products} />
			</Suspense>
			<Pagination />
		</section>
	);
}
