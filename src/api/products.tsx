import { type CatalogProduct, type CatalogProductResponse } from "@/types/Catalog/Product";

type ProductsGraphqlResponse = {
	products: {
		meta: {
			total: number;
		};
		data: {
			id: string;
			name: string;
			description: string;
			price: number;
			rating: number;
			slug: string;
			categories: {
				name: string;
			}[];
			images: {
				url: string;
			}[];
		}[];
	};
};

type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

export const getProducts = async (page: number = 1) => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	const take = 20;
	const offset = take * (page - 1);
	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query: `query GetProducts($offset: Int, $take: Int) {
			  products(
				order: ASC, 
				orderBy: DEFAULT, 
				skip: $offset, 
				take: $take
			  ) {
				data {
				  id
				  name
				  description
				  price
				  rating
				  slug
				  categories {
				  	name
				  }
				  images {
					url
				  }
				}
				meta {
				  total
				}
			  }
			}`,
			variables: {
				offset,
				take,
			},
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const productsResponse = (await res.json()) as GraphQLResponse<ProductsGraphqlResponse>;

	if (productsResponse.errors) {
		throw TypeError(`GraphQL Error`, {
			cause: productsResponse.errors[0].message,
		});
	}

	return productsResponse.data.products.data.map(
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
	...product,
	name: product.title,
	slug: `product-${product.id}`,
	image: {
		src: product.image,
		alt: product.title,
	},
});

const mapGraphQLProductResponseToCatalogProduct = (
	product: ProductsGraphqlResponse["data"]["products"]["data"][0],
): CatalogProduct => ({
	...product,
	slug: product.slug,
	category: product.categories[0]?.name || "all",
	image: {
		src: product?.images[0].url || "",
		alt: product.name,
	},
});
