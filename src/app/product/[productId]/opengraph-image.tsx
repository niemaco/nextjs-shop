import { ImageResponse } from "next/og";
import { ProductImage } from "@/components/atoms/catalog/ProductImage";
import { getProductById } from "@/api/productById";

export const runtime = "edge";

export const alt = "";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

type OgProps = {
	params: {
		productId: string;
	};
};

export default async function og({ params }: OgProps): Promise<ImageResponse> {
	const product = await getProductById(params.productId);

	if (!product) {
		return;
	}

	const firstImage = product?.images[0];
	if (!firstImage) {
		return;
	}

	const category = product?.categories[0];

	const { name, description, categories, images } = product;

	return new ImageResponse(
		(
			<div tw="w-full text-white h-full flex flex-col items-center justify-center text-8xl">
				<ProductImage height={size.height} width={size.width} image={firstImage} />
				<div>
					<h2 tw="font-sans uppercase m-0 p-0 text-[101px] leading-4">{name}</h2>
					<p tw="font-serif m-0 p-0 font-black">{description}</p>
					{category && <p tw="font-serif m-0 p-0 font-black">Category: {category.name}</p>}
				</div>
			</div>
		),
	);
}
