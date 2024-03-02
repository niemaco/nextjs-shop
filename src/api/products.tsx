import { type CatalogProduct, type CatalogProductResponse } from "@/types/Catalog/Product";

export const getProducts = async (page: number = 1) => {
	const take = 20;
	const offset = take * (page - 1);
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${take}&&offset=${offset}`,
	);
	const productsResponse = (await res.json()) as CatalogProductResponse[];

	return productsResponse.map(
		(product): CatalogProduct => mapCatalogProductResponseToCatalogProduct(product),
	);
};

export const getProductById = async (productId: CatalogProductResponse["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${productId}`);
	const productResponse = (await res.json()) as CatalogProductResponse;
	return mapCatalogProductResponseToCatalogProduct(productResponse);
};

const mapCatalogProductResponseToCatalogProduct = (
	product: CatalogProductResponse,
): CatalogProduct => ({
	...product,
	name: product.title,
	slug: `product-${product.id}`,
	image: {
		src: product.image,
		alt: product.title,
	},
});
