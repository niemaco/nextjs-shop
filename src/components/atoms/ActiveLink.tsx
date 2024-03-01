"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React, { type ReactNode } from "react";
import { type Route } from "next";

export const ActiveLink = <T extends string>({
	href,
	className,
	activeClassName,
	children,
	exact,
}: {
	href: Route<T> | URL;
	children: ReactNode;
	className: string;
	activeClassName: string;
	exact?: boolean;
}) => {
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
