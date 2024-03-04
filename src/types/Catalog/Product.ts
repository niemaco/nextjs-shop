export type CatalogProduct = {
	description: string;
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
		id: string;
	};
};

export type CatalogProductImage = {
	image: {
		src: string;
		alt: string;
	};
};

export type CatalogProductResponse = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

type Rating = {
	rate: number;
	count: number;
};
