import { BaseHeading } from "@/ui/atoms/BaseHeading";
import { ProductList } from "@/ui/organisms/Catalog/ProductList";
import type { CatalogProduct } from "@/types/Catalog/Product";

const products: CatalogProduct[] = [
	{
		id: "1",
		name: "Red sneakers #1",
		category: "Shoes",
		slug: "red-sneakers-1",
		image: {
			src: "/shoes1.jpeg",
			alt: "Red sneakers with white soles and white laces. There are three shoes in the photo",
		},
		price: 1999,
	},
	{
		id: "2",
		name: "Red sneakers #2",
		category: "Shoes",
		slug: "red-sneakers-2",
		image: {
			src: "/shoes2.jpeg",
			alt: "Red sneakers with white soles and red laces",
		},
		price: 2999,
	},
	{
		id: "3",
		name: "Red sneakers #3",
		category: "Shoes",
		slug: "red-sneakers-3",
		image: {
			src: "/shoes3.jpeg",
			alt: "Red sneakers with a white sole, white laces and many white stripes",
		},
		price: 4999,
	},
	{
		id: "4",
		name: "Red sneakers #4",
		category: "Shoes",
		slug: "red-sneakers-4",
		image: {
			src: "/shoes4.jpeg",
			alt: "Red sneakers with a white sole, white laces and many white stripes",
		},
		price: 5999,
	},
];

export default function ProductsPage() {
	return (
		<section className="py-4">
			<BaseHeading text="Our red shoes" />
			<ProductList products={products} />
		</section>
	);
}
