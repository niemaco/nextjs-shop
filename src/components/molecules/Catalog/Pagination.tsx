import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Pagination = ({ numberOfPages }: { numberOfPages: number }) => {
	return (
		<nav aria-label="pagination">
			<ol className="relative flex list-none flex-wrap justify-center gap-4">
				{Array.from(Array(numberOfPages).keys()).map((index) => (
					<li
						key={index}
						className="order-last mt-2 w-full lg:order-first lg:mr-3 lg:mt-0 lg:w-auto"
					>
						<ActiveLink
							exact={true}
							href={`/products/${index + 1}`}
							className="page border-primary text-primary relative z-10 inline-flex h-12 w-12 items-center justify-center border border-2 bg-white leading-6 hover:z-10 hover:border-black"
							activeClassName="underline border-black"
						>
							{index + 1}
						</ActiveLink>
					</li>
				))}
			</ol>
		</nav>
	);
};
