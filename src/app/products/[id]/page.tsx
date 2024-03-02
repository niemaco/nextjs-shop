import { BaseHeading } from "@/ui/atoms/BaseHeading";
import { Pagination } from "@/ui/molecules/Catalog/Pagination";
import { ProductList } from "@/ui/organisms/Catalog/ProductList";
import { getProducts } from "@/api/products";

export default async function ProductsPageById({ params }: { params: { id?: string } }) {
	const pageId = parseInt(params?.id || "1");
	const products = await getProducts(pageId);
	return (
		<section className="grid grid-cols-1 gap-4 py-4">
			<BaseHeading text="Our 20 products" />
			<Pagination />
			<ProductList products={products} />
			<Pagination />
		</section>
	);
}
