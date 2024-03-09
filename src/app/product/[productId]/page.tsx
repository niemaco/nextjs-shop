import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById } from "@/api/productById";
import { formatPrice } from "@/utils/price";
import { type ProductGetByIdQuery, ProductItemFragment } from "@/gql/graphql";
import NextImage from "next/image";
import { cookies } from "next/headers";
import { addToCart, createOrFindCart, getCartById } from "@/api/cart";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton";

type ProductPageProps = {
	params: {
		productId: string;
	};
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
	const product: ProductItemFragment = await getProductById(params.productId);

	return {
		title: product?.name || "",
		description: product?.description || "",
	};
}

const getOrCreateCart = async () => {
	const cartId = cookies().get("cartId")?.value;
	console.log("cartId from cookie: ", { cartId });
	if (cartId) {
		const cart = await getCartById(cartId);
		if (cart) {
			return cart;
		}
	}

	const newCart = await createOrFindCart();
	if (!newCart.id) {
		throw new Error("Failed to create cart");
	}

	console.log("New cartId from graphql: ", newCart.id);
	cookies().set("cartId", newCart.id);
	return newCart;
};

const addProductToCart = async (cartId: string, productId: string) => {
	const product = await getProductById(productId);

	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	const success = await addToCart(cartId, productId);

	if (!success) {
		throw new Error("Failed to add product to cart");
	}

	return success;
};
export default async function ProductPage({ params }: ProductPageProps) {
	const product: ProductGetByIdQuery["product"] = await getProductById(params.productId);

	if (!product) {
		throw notFound();
	}

	const addProductToCartAction = async () => {
		"use server";
		const cart = await getOrCreateCart();

		await addProductToCart(cart.id, params.productId);
	};

	return (
		<section className="container mx-auto py-8">
			<div className="mx-auto max-w-lg overflow-hidden rounded-lg bg-white shadow-md">
				{product.images[0] && (
					<NextImage
						width={320}
						height={320}
						src={product.images[0].url}
						alt={product.images[0].alt}
						className="w-full"
					/>
				)}

				<div className="px-4 py-2">
					<h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>

					<p className="flex flex-col gap-2 py-2 text-xl text-gray-700">
						<del className="text-gray-500">{formatPrice(product.price)}</del>
						<span className="font-bold text-green-600">{formatPrice(product.price)}</span>
					</p>

					<button className="mb-4 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
						Add to Cart
					</button>

					<p className="py-2 text-gray-700">{product.description}</p>

					<div className="grid grid-flow-col items-end justify-between pb-4">
						{product.categories.length && (
							<p className="shrink text-gray-700">
								<span>Categories: </span>
								{product.categories.map((category: { name: string; slug: string }) => (
									<Link
										key={category.name}
										href={`/categories/${category.slug}/1`}
										className="mr-2 text-blue-500 hover:underline focus-visible:underline"
									>
										{category.name}
									</Link>
								))}
							</p>
						)}

						<Link href="#" className="hover:underline focus-visible:underline">
							<NextImage
								src="/red_shoes_logo.jpeg"
								alt="Manufacturer Logo"
								className="mx-auto h-20 w-20 rounded-full"
								width={40}
								height={40}
							/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
