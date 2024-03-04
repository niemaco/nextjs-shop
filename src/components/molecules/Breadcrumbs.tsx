import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Breadcrumbs = () => {
	return (
		<nav aria-label="breadcrumb" className="bg-white py-2">
			<ol className="breadcrumb inline-flex">
				<li className="breadcrumb-item">
					<ActiveLink href="/">Home</ActiveLink>
				</li>
				<li className="breadcrumb-item">
					<ActiveLink href="/products">All products</ActiveLink>
				</li>
			</ol>
		</nav>
	);
};
