import { ProductImage } from "@/gql/graphql";

export const ProductImage = ({ image }: { image: Pick<ProductImage, "alt" | "url"> }) => {
	return (
		<div className="aspect-square grayscale group-hover:grayscale-0 group-focus-visible:grayscale-0">
			<img src={image.url} alt={image.alt} className="aspect-square object-cover" />
		</div>
	);
};
