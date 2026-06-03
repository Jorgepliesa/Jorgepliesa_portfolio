import projectES from "@/json/dataES.json";
import projectEN from "@/json/dataEN.json";

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const jsonData = useLanguage() === "es" ? projectES : projectEN;
	const project = jsonData.Projects.find((item) => item.slug === slug);

	if (!project) {
		return { title: "Not Found | jorgepliesa" };
	}

	return {
		title: `${project.title} | jorgepliesa`,
		description: project.desc[0]?.slice(0, 160),
	};
}

export default function Layout({ children }) {
	return children;
}
