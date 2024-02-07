import type { CatalogProductImage } from "@/types/Catalog/Product";

export const ProductImage = ({ image: { src, alt } }: CatalogProductImage) => {
	return (
		<div className="aspect-square grayscale group-hover:grayscale-0 group-focus-visible:grayscale-0">
			<img src={src} alt={alt} className="h-auto w-full object-cover" />
		</div>
	);
};
