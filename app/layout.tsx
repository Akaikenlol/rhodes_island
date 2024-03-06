import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";
import Hero from "@/components/shared/Hero";
import Footer from "@/components/shared/Footer";

const dmMono = DM_Mono({
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "Rhodes Island",
	description: "Typical Pharmacy Company",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-primary-500 text-slate-100 !scroll-smooth">
			<body className={dmMono.className}>
				<main className="max-w-7xl mx-auto bg-slate-700">
					<Hero />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
