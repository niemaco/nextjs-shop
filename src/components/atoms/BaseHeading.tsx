import React from "react";

type BaseHeadingProps = Readonly<{
	children: React.ReactNode;
}>;

export const BaseHeading = ({ children }: BaseHeadingProps) => {
	return <h1 className="mb-8 text-3xl font-bold">{children}</h1>;
};
