import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/ui/molecules/MainNav";

const inter = Inter({ subsets: ["latin"] });

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
		<html lang="en">
			<body className={inter.className}>
				<header className="container mx-auto px-4">
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
	);
}
