import { type CatalogProduct } from "@/types/Catalog/Product";

export const getProducts = async () => {
	type ProductResponse = {
		id: string;
		title: string;
		price: number;
		description: string;
		category: string;
		rating: Rating;
		image: string;
		longDescription: string;
	};

	type Rating = {
		rate: number;
		count: number;
	};

	const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
	const productsResponse = (await res.json()) as ProductResponse[];

	return productsResponse.map(
		(product): CatalogProduct => ({
			...product,
			name: product.title,
			slug: `product-${product.id}`,
			image: {
				src: product.image,
				alt: product.title,
			},
		}),
	);
};
