// server_component.tsx
import "server-only";

import { ActiveLink } from "@/ui/atoms/ActiveLink";

export default function BlogPage() {
	return (
		<div className="py-6">
			<h1 className="py-4">BlogPage</h1>

			<ul className="grid list-none grid-cols-2 gap-4">
				<li className="">
					<ActiveLink href="/blog/rsc" activeClassName="" className="">
						RSC
					</ActiveLink>
					<p>RSC - React Server Components</p>
				</li>
				<li>
					<ActiveLink href="/blog/rcc" activeClassName="" className="">
						RCC
					</ActiveLink>
					<p>RCC - React Client Components</p>
				</li>
				<li>
					<ActiveLink href="/blog/app-routing" activeClassName="" className="">
						Routing
					</ActiveLink>
					<p>App Routing - podstawy</p>
				</li>
				<li>
					<ActiveLink href="/blog/next-js" activeClassName="" className="">
						Next.js na start
					</ActiveLink>
					<p>Środowisko Next.js - konfiguracja, eslint, prettier, wtyczki, itd </p>
				</li>
			</ul>
		</div>
	);
}
