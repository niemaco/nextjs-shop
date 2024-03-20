"use client";
import { usePathname, useRouter } from "next/navigation";
import { type ProductSortBy, type SortDirection } from "@/gql/graphql";

export const SortingSelect = () => {
	const router = useRouter();
	const pathname = usePathname();

	const handleChange = (type: string) => {
		let params: { orderBy: ProductSortBy; order: SortDirection } | null = null;
		switch (type) {
			case "rating-desc":
				params = {
					orderBy: "RATING",
					order: "DESC",
				};
				break;
			case "rating-asc":
				params = {
					orderBy: "RATING",
					order: "ASC",
				};
				break;
			case "price-desc":
				params = {
					orderBy: "PRICE",
					order: "DESC",
				};
				break;
			case "price-asc":
				params = {
					orderBy: "PRICE",
					order: "ASC",
				};
				break;
			default:
				params = null;
		}

		router.replace(
			`${pathname}${params === null ? "" : `?orderBy=${params.orderBy}&order=${params.order}`}`,
		);
	};

	return (
		<div className="pb-3">
			<span className="pr-1 text-sm text-slate-600">Sort:</span>
			<select
				name="sort-selector"
				id="sort-selector"
				className="bg-inherit text-sm text-slate-600"
				onChange={(e) => {
					handleChange(e.target.value);
				}}
			>
				<option value="no-sort">---</option>
				<option value="price-desc" data-testid="sort-by-price">
					Price ↓
				</option>
				<option value="price-asc" data-testid="sort-by-price">
					Price ↑
				</option>
				<option value="rating-desc" data-testid="sort-by-rating">
					Rating ↓
				</option>
				<option value="rating-asc" data-testid="sort-by-rating">
					Rating ↑
				</option>
			</select>
		</div>
	);
};
