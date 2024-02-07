export type CatalogProduct = {
	id: string;
	name: string;
	category: string;
	slug: string;
	image: {
		src: string;
		alt: string;
	};
	price: number;
};

export type CatalogProductDetails = {
	product: {
		name: string;
		category: string;
		price: number;
		slug: string;
	};
};

export type CatalogProductImage = {
	image: {
		src: string;
		alt: string;
	};
};
