import { type CatalogProduct } from "@/types/Catalog/Product";

export const redShoes: CatalogProduct[] = [
	{
		id: "1",
		name: "Red sneakers #1",
		category: "Shoes",
		slug: "red-sneakers-1",
		image: {
			src: "/shoes1.jpeg",
			alt: "Red sneakers with white soles and white laces. There are three shoes in the photo",
		},
		price: 1999,
		description: "Description 1",
	},
	{
		id: "2",
		name: "Red sneakers #2",
		category: "Shoes",
		slug: "red-sneakers-2",
		image: {
			src: "/shoes2.jpeg",
			alt: "Red sneakers with white soles and red laces",
		},
		price: 2999,
		description: "Description 2",
	},
	{
		id: "3",
		name: "Red sneakers #3",
		category: "Shoes",
		slug: "red-sneakers-3",
		image: {
			src: "/shoes3.jpeg",
			alt: "Red sneakers with a white sole, white laces and many white stripes",
		},
		price: 4999,
		description: "Description 2",
	},
	{
		id: "4",
		name: "Red sneakers #4",
		category: "Shoes",
		slug: "red-sneakers-4",
		image: {
			src: "/shoes4.jpeg",
			alt: "Red sneakers with a white sole, white laces and many white stripes",
		},
		price: 5999,
		description: "Description 3",
	},
];
