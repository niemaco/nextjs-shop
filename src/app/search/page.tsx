import { getSearchedProducts } from "@/api/searched";
import { ProductList } from "@/components/organisms/ProductList";
import { ProductFragment } from "@/gql/graphql";

type SearchParamsProps = {
	searchParams: {
		query: string;
	};
};

export default async function SearchPage({ searchParams }: SearchParamsProps) {
	let products: ProductFragment[] = [];

	if (searchParams.query.length > 2) {
		products = await getSearchedProducts("0", "12", searchParams.query);
	}

	return (
		<div>
			<h1>Search Page: {searchParams.query}</h1>
			{searchParams.query.length <= 2 && (
				<p>Please enter at least 3 characters to search for products.</p>
			)}
			<ProductList products={products} />
		</div>
	);
}
