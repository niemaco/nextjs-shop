type NavigationLinkProps = {
	label: string;
	href: string;
	exact?: boolean;
};

export const mainNavigationLinks: NavigationLinkProps[] = [
	{
		label: "Homepage",
		href: "/",
		exact: true,
	},
	{
		label: "All",
		href: "/products",
	},
	{
		label: "Accessories",
		href: "/categories/accessories",
	},
	{
		label: "Hoodies",
		href: "/categories/hoodies",
	},
	{
		label: "T-Shirts",
		href: "/categories/t-shirts",
	},
];

export const footerNavigationLinks: NavigationLinkProps[] = [
	{
		label: "Notes",
		href: "/notes",
	},
];
