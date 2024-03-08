import { getSearchedProducts } from "@/api/searched";
import { ProductList } from "@/ui/organisms/Catalog/ProductList";

type SearchParamsProps = {
	searchParams: {
		query: string;
	};
};

export default async function SearchPage({ searchParams }: SearchParamsProps) {
	const products = await getSearchedProducts("0", "12", searchParams.query);

	return (
		<div>
			<h1>Search Page: {searchParams.query}</h1>
			<ProductList products={products} />
		</div>
	);
}
