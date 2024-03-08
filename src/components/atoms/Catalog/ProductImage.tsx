import { ProductImage } from "@/gql/graphql";
import NextImage from "next/image";

export const ProductImage = ({ image }: { image: Pick<ProductImage, "alt" | "url"> }) => {
	return (
		<div className="aspect-square grayscale group-hover:grayscale-0 group-focus-visible:grayscale-0">
			<NextImage
				src={image.url}
				alt={image.alt}
				className="aspect-square object-cover"
				width={320}
				height={320}
			/>
		</div>
	);
};
