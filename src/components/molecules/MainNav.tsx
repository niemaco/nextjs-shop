import { ActiveLink, type ActiveLinkProps } from "@/ui/atoms/ActiveLink";

const className: string =
	"p-4 first:pl-0 last:pr-0 text-grey-400 hover:text-blue-400 focus-visible:text-blue-400";

const navLinks: ActiveLinkProps<string>[] = [
	{
		children: "Home",
		href: "/",
		exact: true,
	},
	{
		children: "All",
		href: "/products",
	},
	{
		children: "Blog",
		href: "/blog",
	},
];

export const MainNav = () => {
	return (
		<nav>
			<ul className="list-none">
				<li>
					{navLinks.map(({ href, children, exact }, index) => (
						<ActiveLink key={index} href={href} className={className} exact={exact}>
							{children}
						</ActiveLink>
					))}
				</li>
			</ul>
		</nav>
	);
};
