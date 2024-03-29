import { ShoppingCart } from "lucide-react";
import { type Route } from "next";
import { ActiveLink } from "@/components/atoms/ActiveLink";
import { SearchForm } from "@/components/molecules/SearchForm";
import { getCartItemCount, getExistingCart } from "@/api/cart";
import { mainNavigationLinks } from "@/api/navigation";

const className: string =
	"text-gray-600 group-hover:text-blue-400 group-focus-visible:text-blue-400";

export const MainNavigation = async () => {
	const cart = await getExistingCart();
	const quantity = cart ? getCartItemCount(cart) : 0;

	return (
		<nav className="flex items-center justify-between">
			{/*<NextImage*/}
			{/*	width={80}*/}
			{/*	height={80}*/}
			{/*	className="aspect-square rounded-full"*/}
			{/*	src={AppLogo}*/}
			{/*	alt="Logo"*/}
			{/*/>*/}

			<SearchForm />

			<ul className="flex list-none flex-wrap">
				{mainNavigationLinks.map(({ href, label, exact }, index) => (
					<li key={index} className="group flex items-center gap-x-2 p-4 first:pl-0 last:pr-0 ">
						<ActiveLink key={index} href={href as Route} className={className} exact={exact}>
							{label}
						</ActiveLink>
					</li>
				))}
			</ul>

			<div className="flex text-gray-600">
				<ShoppingCart className="mr-2" />
				<span>{quantity}</span>
				<span className="sr-only">Shopping Cart</span>
			</div>

			<div className="flex w-10 items-center justify-center">
				{/*<SignedOut>*/}
				{/*	<SignInButton />*/}
				{/*</SignedOut>*/}
				{/*<SignIn>*/}
				{/*	<UserButton*/}
				{/*		userProfileMode="navigation"*/}
				{/*		userProfileUrl="/user-profile/"*/}
				{/*		// showName*/}
				{/*		appearance={{*/}
				{/*			elements: {*/}
				{/*				userButtonBox: "",*/}
				{/*				userButtonOuterIdentifier: "md:text-lg font-semibold blue-font dark:text-white",*/}
				{/*			},*/}
				{/*		}}*/}
				{/*		afterSignOutUrl={process.env.NEXT_PUBLIC_BASE_URL}*/}
				{/*	/>*/}
				{/*</SignIn>*/}
			</div>
		</nav>
	);
};
