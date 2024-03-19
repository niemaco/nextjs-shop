import { ShoppingCart } from "lucide-react";
import { ActiveLink, type ActiveLinkProps } from "@/components/atoms/ActiveLink";
import { BaseIcon, type IconProps } from "@/components/atoms/BaseIcon";
import NextImage from "next/image";
import AppLogo from "../../../public/logo.jpeg";
import { SearchForm } from "@/components/molecules/SearchForm";
import { getCartItemCount, getExistingCart } from "@/utils/cart";
import { SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";

const className: string =
	"text-gray-600 group-hover:text-blue-400 group-focus-visible:text-blue-400";

type NavLink = ActiveLinkProps<string> & {
	icon?: IconProps["name"];
};

const navLinks: NavLink[] = [
	{
		children: "Homepage",
		href: "/",
		exact: true,
		icon: "home",
	},
	{
		children: "Products",
		href: "/products",
		icon: "layout-list",
	},
	{
		children: "Accessories",
		href: "/categories/accessories",
	},
	{
		children: "Hoodies",
		href: "/categories/hoodies",
	},
	{
		children: "T-shirts",
		href: "/categories/t-shirts",
		icon: "shirt",
	},
	{
		children: "Notes",
		href: "/notes",
		icon: "notebook",
	},
];

export const MainNav = async () => {
	const cart = await getExistingCart();
	const quantity = getCartItemCount(cart);

	return (
		<nav className="flex items-center justify-between">
			<NextImage
				width={80}
				height={80}
				className="aspect-square rounded-full"
				src={AppLogo}
				alt="Logo"
			/>

			<SearchForm />

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
				<span>{quantity}</span>
				<span className="sr-only">Shopping Cart</span>
			</div>

			<SignIn>
				<UserButton userProfileMode="navigation" />
			</SignIn>
			<SignedOut>
				<SignInButton />
			</SignedOut>
		</nav>
	);
};
