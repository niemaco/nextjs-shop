import { type CatalogProduct, type CatalogProductResponse } from "@/types/Catalog/Product";
import {
	ProductsGetDocument,
	type ProductsGetQuery,
	type TypedDocumentString,
} from "@/gql/graphql";

type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};

export const getProducts = async (page: number = 1) => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	const take = 20;
	const offset = take * (page - 1);
	const graphqlResponse = await executeGraphql(ProductsGetDocument, {
		offset,
		take,
	});

	return graphqlResponse.products.data.map(
		(product): CatalogProduct => mapGraphQLProductResponseToCatalogProduct(product),
	);
};

export const getProductById = async (
	productId: CatalogProductResponse["id"],
): Promise<CatalogProduct> => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${productId}`);
	const productResponse = (await res.json()) as CatalogProductResponse;

	return mapCatalogProductResponseToCatalogProduct(productResponse);
};

const mapCatalogProductResponseToCatalogProduct = (
	product: CatalogProductResponse,
): CatalogProduct => ({
	id: product.id,
	description: product.description,
	price: product.price,
	name: product.title,
	slug: `product-${product.id}`,
	image: {
		src: product.image,
		alt: product.title,
	},
	category: product.category,
});

const mapGraphQLProductResponseToCatalogProduct = (
	product: ProductsGetQuery["products"]["data"][0],
): CatalogProduct => ({
	id: product.id,
	name: product.name,
	slug: product.slug,
	description: product.description,
	category: product.categories[0]?.name || "all",
	image: product?.images[0] && {
		src: product.images[0].url,
		alt: product.name,
	},
	price: product.price,
});
