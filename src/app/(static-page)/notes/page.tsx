// server_component.tsx
import "server-only";

import { ActiveLink } from "@/components/atoms/ActiveLink";

export default function NotesPage() {
	return (
		<div className="py-6">
			<h1 className="py-4">Notes</h1>

			<ul className="grid list-none grid-cols-2 gap-4">
				<li className="">
					<ActiveLink href="/notes/mdx">Using MDX</ActiveLink>
					<p>MDX format</p>
				</li>
				<li className="">
					<ActiveLink href="/notes/rsc">RSC</ActiveLink>
					<p>RSC - React Server Components</p>
				</li>
				<li>
					<ActiveLink href="/notes/rcc">RCC</ActiveLink>
					<p>RCC - React Client Components</p>
				</li>
				<li>
					<ActiveLink href="/notes/app-routing">Routing</ActiveLink>
					<p>App Routing - podstawy</p>
				</li>
				<li>
					<ActiveLink href="/notes/next-js">Next.js na start</ActiveLink>
					<p>Środowisko Next.js - konfiguracja, eslint, prettier, wtyczki, itd </p>
				</li>
			</ul>
		</div>
	);
}
