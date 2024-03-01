"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React, { type ReactNode } from "react";
import { type Route } from "next";

export type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
};

const defaultClass: string = "text-grey-400 hover:text-blue-400 focus-visible:text-blue-400";
const defaultActiveClass: string = "underline text-blue-400";
export const ActiveLink = <T extends string>({
	href,
	children,
	className = defaultClass,
	activeClassName = defaultActiveClass,
	exact,
}: ActiveLinkProps<T>) => {
	const currentPathName = usePathname();
	const isActive = exact ? currentPathName === href : currentPathName.startsWith(href as string);

	return (
		<Link
			href={href}
			className={clsx(className, isActive && activeClassName)}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};
