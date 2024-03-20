import { type Route } from "next";
import { ActiveLink } from "@/components/atoms/ActiveLink";
import { footerNavigationLinks } from "@/api/navigation";

const className: string =
	"text-gray-600 group-hover:text-blue-400 group-focus-visible:text-blue-400";

export const FooterNavigation = async () => {
	return (
		<nav className="flex items-center justify-between">
			<ul className="flex list-none flex-wrap">
				{footerNavigationLinks.map(({ href, label, exact }, index) => (
					<li key={index} className="group flex items-center gap-x-2 px-2 first:pl-0 last:pr-0 ">
						<ActiveLink key={index} href={href as Route} className={className} exact={exact}>
							{label}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
