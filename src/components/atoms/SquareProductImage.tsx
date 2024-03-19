import { ProductImageFragment } from "@/gql/graphql";
import NextImage from "next/image";

type SquareProductImageProps = {
	width: number;
	height: number;
	image: ProductImageFragment;
};

export const SquareProductImage = ({ image, width, height }: SquareProductImageProps) => {
	return (
		<div className="aspect-square grayscale group-hover:grayscale-0 group-focus-visible:grayscale-0">
			<NextImage
				src={image.url}
				alt={image.alt}
				className="aspect-square object-cover"
				width={width}
				height={height}
			/>
		</div>
	);
};
