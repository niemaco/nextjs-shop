import React from "react";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div data-id="cms-page">{children}</div>;
}
