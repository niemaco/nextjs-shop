import { BaseHeading } from "@/ui/atoms/BaseHeading";
import { ProductList } from "@/ui/organisms/Catalog/ProductList";
import { getProducts } from "@/api/products";

export default async function ProductsPage() {
	const products = await getProducts();
	return (
		<section className="py-4">
			<BaseHeading text="Our 20 products" />
			<ProductList products={products} />
		</section>
	);
}
