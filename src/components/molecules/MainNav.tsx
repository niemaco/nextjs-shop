import { ShoppingCart } from "lucide-react";
import { ActiveLink, type ActiveLinkProps } from "@/ui/atoms/ActiveLink";
import { BaseIcon, type IconProps } from "@/ui/atoms/BaseIcon";

const className: string =
	"text-gray-600 group-hover:text-blue-400 group-focus-visible:text-blue-400";

type NavLink = ActiveLinkProps<string> & {
	icon?: IconProps["name"];
};

const navLinks: NavLink[] = [
	{
		children: "Home",
		href: "/",
		exact: true,
		icon: "home",
	},
	{
		children: "All",
		href: "/products",
		icon: "layout-list",
	},
	{
		children: "Blog",
		href: "/blog",
		children: "Notes",
		href: "/notes",
		icon: "notebook",
	},
];

export const MainNav = () => {
	return (
		<nav className="flex items-center justify-between">
			<ul className="flex list-none flex-wrap">
				{navLinks.map(({ href, children, exact, icon }, index) => (
					<li key={index} className="group flex items-center gap-x-2 p-4 first:pl-0 last:pr-0 ">
						{icon && (
							<BaseIcon
								name={icon}
								size={20}
								className="group-hover:text-blue-400 group-focus-visible:text-blue-400"
							/>
						)}
						<ActiveLink key={index} href={href} className={className} exact={exact}>
							{children}
						</ActiveLink>
					</li>
				))}
			</ul>

			<div className="flex text-gray-600">
				<ShoppingCart className="mr-2" />
				<span>0</span>
				<span className="sr-only">Shopping Cart</span>
			</div>
		</nav>
	);
};
