import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/molecules/MainNav";

const lato = Lato({
	weight: ["400", "700"],
	subsets: ["latin", "latin-ext"],
	variable: "--font-lato",
	display: "swap",
});
export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={lato.variable}>
					<header className="container mx-auto border-b-2 p-4">
						<MainNav></MainNav>
					</header>
					<main className="container mx-auto px-4">{children}</main>
					<footer className="container mx-auto border-t-2 px-4 py-2">
						<p className="flex justify-between">
							<span>Created by Karol Osuchowski</span>
							<span>Copyright © 2024</span>
						</p>
					</footer>
				</body>
			</html>
		</ClerkProvider>
	);
}
