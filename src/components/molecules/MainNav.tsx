import type { NavLink } from "@/types/Common";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const className: string = "p-4 text-grey-400 hover:text-blue-400 focus-visible:text-blue-400";
const activeClassName: string = "underline text-blue-400";
const navLinks: NavLink[] = [
	{
		name: "Home",
		href: "/",
		className,
		activeClassName,
	},
	{
		name: "All",
		href: "/products",
		className,
		activeClassName,
	},
];

export const MainNav = () => {
	return (
		<nav className="mt-4">
			{navLinks.map(({ href, name, className, activeClassName }, index) => (
				<ActiveLink key={index} href={href} className={className} activeClassName={activeClassName}>
					{name}
				</ActiveLink>
			))}
		</nav>
	);
};
