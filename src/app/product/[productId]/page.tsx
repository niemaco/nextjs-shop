import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NextImage from "next/image";
import { revalidateTag } from "next/cache";
import { Suspense } from "react";
import { getProductById } from "@/api/productById";
import { formatPrice } from "@/utils/price";
import {
	type CartFragment,
	type ProductFragment,
	type ProductGetByIdQuery,
	type ProductSortBy,
	type SortDirection,
} from "@/gql/graphql";
import { addToCart, changeCartQuantity, getCart } from "@/api/cart";
import { AddToCartButton } from "@/components/atoms/AddToCartButton";
import { ReviewForm } from "@/components/molecules/ReviewForm";
import { RelatedProducts } from "@/components/organisms/RelatedProducts";
import { getRelatedProducts } from "@/api/related";

type ProductPageProps = {
	params: {
		productId: string;
	};
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
	const product: ProductFragment = await getProductById(params.productId);

	return {
		title: product?.name || "",
		description: product?.description || "",
	};
}

const addProductToCart = async (cart: CartFragment, productId: string) => {
	const product = await getProductById(productId);

	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	const cartItem = cart.items.find((item) => {
		item.product.id = productId;
		return item;
	});

	if (!cartItem) {
		await addToCart(cart.id, productId);
	}

	if (cartItem) {
		await changeCartQuantity(cart.id, productId, cartItem.quantity + 1);
	}

	revalidateTag("cart");
};
export default async function ProductPage({ params }: ProductPageProps) {
	const product: ProductGetByIdQuery["product"] = await getProductById(params.productId);

	const sortOrderKind: SortDirection[] = ["ASC", "DESC"];
	const sortOrder = sortOrderKind[Math.floor(Math.random())] || "ASC";
	const sortByKind: ProductSortBy[] = ["DEFAULT", "NAME", "PRICE", "RATING"];
	const sortBy = sortByKind[Math.floor(Math.random() * 4)] || "DEFAULT";
	const relatedProducts = await getRelatedProducts("0", "4", sortOrder, sortBy);

	if (!product) {
		throw notFound();
	}

	const addProductToCartAction = async () => {
		"use server";
		const cart = await getCart();
		await addProductToCart(cart, params.productId);
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

					<form action={addProductToCartAction}>
						<input type="hidden" name="productId" value={product.id} />
						<AddToCartButton />
					</form>
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

				<ReviewForm
					productId={product.id}
					rating={product?.rating || 0}
					reviews={product.reviews}
				/>
			</div>

			<Suspense>
				<RelatedProducts products={relatedProducts} data-testid="related-products" />
			</Suspense>
		</section>
	);
}
