import "./globals.css";
import { Fira_Code, Space_Mono, Orbitron, Share_Tech_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";
import { LanguageProvider } from "@/context/LanguageContext";

const firaCode = Fira_Code({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
	variable: "--font-poppins",
});

const spaceMono = Space_Mono({
	subsets: ["latin"],
	weight: ["400", "700"],
	display: "swap",
	variable: "--font-jost", 
});

const orbitron = Orbitron({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	display: "swap",
	variable: "--font-orbitron",
});

const shareTechMono = Share_Tech_Mono({
	subsets: ["latin"],
	weight: ["400"],
	display: "swap",
	variable: "--font-share-tech-mono",
});

export const metadata = {
	metadataBase: new URL("https://jorgepliesa-portfolio.vercel.app/"),
	title: "Jorge Pérez Liesa | Portofolio",

	description:
		"Jorge, Computer Engineer with experience in Full Stack and software development. Passionate about video game design and software architecture (C++, Java, React, SQL, Python, NestJS, etc.).",
	author: "Jorge Pérez Liesa",
	siteUrl: "https://jorgepliesa-portfolio.vercel.app/",
	applicationName: "Jorge Pérez Liesa",

	keywords: [
		"jorge",
		"jorge perez liesa",
		"bloodfallen",
		"jorge perez",
		"jorgepliesa",
	],

	openGraph: {
		type: "website",
		url: "https://jorgepliesa-portfolio.vercel.app/",
		title: "Jorge Pérez Liesa | Portofolio",
		siteName: "Jorge Pérez Liesa | Portofolio",
		description: "My name is Jorge Pérez Liesa, This is my portofolio website.",
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Jorge Pérez Liesa Portofolio",
				width: 1200,
				height: 630,
			},
		],
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Jorge Pérez Liesa",
	url: "https://jorgepliesa-portfolio.vercel.app/",
	jobTitle: "Computer Engineer",
	worksFor: [
		{ "@type": "Organization", name: "Ascension" },
	],
	alumniOf: {
		"@type": "CollegeOrUniversity",
		name: "Universidad de Zaragoza",
	},
	sameAs: [
		"https://github.com/jorgepliesa",
		"https://www.linkedin.com/in/jorge-perez-liesa/",
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${firaCode.variable} ${spaceMono.variable} ${orbitron.variable} ${shareTechMono.variable}`}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<LanguageProvider>
					<ClientTopProgressBar />
					<Navbar />
					{children}
				</LanguageProvider>
				<Analytics />
			</body>
		</html>
	);
}
