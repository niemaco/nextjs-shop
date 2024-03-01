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
}: {
	href: Route<T> | URL;
	className: string;
	activeClassName: string;
	children: ReactNode;
}) => {
	const currentPathName = usePathname();
	const isActive = currentPathName === href;

	return (
		<Link
			href={href}
			className={clsx(className, isActive && activeClassName)}
			aria-current={isActive}
		>
			{children}
		</Link>
	);
};
