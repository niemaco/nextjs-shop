import { BaseHeading } from "@/ui/atoms/BaseHeading";
import { Pagination } from "@/ui/molecules/Catalog/Pagination";
import { ProductList } from "@/ui/organisms/Catalog/ProductList";
import { getProducts } from "@/api/products";

//simple solution
export const generateStaticParams = async () => {
	return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

// TODO hard option
// export const getStaticProps = async () => {
// 	get count od product pages
// 	return productsPages.map((page) => ({ id: page.id })).slice(0,3);
//};

export default async function ProductsPageById({ params }: { params: { id?: string } }) {
	const pageId = parseInt(params?.id || "1");
	const products = await getProducts(pageId);

	//TODO: get metadata from graphQL about numbers of all pages
	return (
		<section className="grid grid-cols-1 gap-4 py-4">
			<BaseHeading text="Our 20 products" />
			<Pagination numberOfPages={3} />
			<ProductList products={products} />
			<Pagination numberOfPages={3} />
		</section>
	);
}
