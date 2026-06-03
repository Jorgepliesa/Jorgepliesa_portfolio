import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMedal,
	faGraduationCap,
	faTrophy,
	faAward,
	faChevronDown,
	faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Napoli from "@/public/image/Napoli.jpg";
import Me4 from "@/public/image/me4.jpg";
import Me5 from "@/public/image/me5.jpg";
import Me6 from "@/public/image/me6.jpg";
import { useLanguage } from "@/context/LanguageContext";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
			<motion.div
				className="flex justify-center items-start flex-col mb-5"
				initial={{
					opacity: 0,
					y: 50,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					delay: 0.3,
					duration: 0.8,
					type: "spring",
					stiffness: 100,
				}}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Education() {
	const [isExpanded, setIsExpanded] = useState(false);
	const { t } = useLanguage();

	const achievementsByYear = {
		2025: [
			{
				icon: faMedal,
				title: "1st place (Gold Medal)",
				subtitle: "Fesmaro IT Business Competition",
				date: "Mar 2025",
				color: "from-yellow-400 to-orange-500",
			},
			{
				icon: faAward,
				title: "Finalist",
				subtitle: "Hackfest Build to Billion 2025",
				date: "Apr 2025",
				color: "from-blue-500 to-purple-600",
			},
			{
				icon: faMedal,
				title: "3rd place (Bronze Medal)",
				subtitle: "Faculty of Engineering Most Outstanding Student",
				date: "Feb 2025",
				color: "from-amber-600 to-yellow-600",
			},
		],
		2024: [
			{
				icon: faTrophy,
				title: "Special Award | Gold Medal | Incubation Opportunity",
				subtitle: "Indonesia Inventor Day 2024 (IID)",
				date: "Aug 2024",
				color: "from-yellow-400 to-orange-500",
			},
			{
				icon: faMedal,
				title: "1st place (Gold Medal)",
				subtitle: "Tech & Trade Expo 2024",
				date: "Jul 2024",
				color: "from-yellow-400 to-orange-500",
			},
			{
				icon: faMedal,
				title: "2nd place (Silver Medal)",
				subtitle: "IdeaFest 2024",
				date: "Jul 2024",
				color: "from-slate-400 to-slate-500",
			},
			{
				icon: faAward,
				title: "Finalist",
				subtitle: "37th National Student Science Week (PIMNAS)",
				date: "Oct 2024",
				color: "from-blue-500 to-purple-600",
			},
			{
				icon: faMedal,
				title: "3rd place (Bronze Medal)",
				subtitle: "Student Digital Innovation Competition (LIDM)",
				date: "Jun 2024",
				color: "from-amber-600 to-yellow-600",
			},
			{
				icon: faMedal,
				title: "3rd place (Bronze Medal)",
				subtitle: "Fesmaro UI/UX Design",
				date: "Jun 2024",
				color: "from-amber-600 to-yellow-600",
			},
		],
		2023: [
			{
				icon: faAward,
				title: "Finalist",
				subtitle: "36th National Student Science Week (PIMNAS)",
				date: "Nov 2023",
				color: "from-blue-500 to-purple-600",
			},
			{
				icon: faMedal,
				title: "3rd place (Bronze Medal)",
				subtitle: "FORKAFEST 3.0 Web Development competition",
				date: "Jan 2023",
				color: "from-amber-600 to-yellow-600",
			},
		],
	};

	// Flatten all achievements into a single array for easier limiting
	const allAchievements = Object.entries(achievementsByYear)
		.sort(([a], [b]) => parseInt(b) - parseInt(a))
		.flatMap(([year, achievements]) =>
			achievements.map((achievement) => ({ ...achievement, year }))
		);

	const visibleAchievements = isExpanded
		? allAchievements
		: allAchievements.slice(0, 6);
	const hasMoreAchievements = allAchievements.length > 6;

	return (
		<Wrapper>
			<section className="grid gap-8 md:gap-12">
				{" "}
				{/* Header */}
				<motion.div
					className="text-center space-y-2"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
						Education
					</h1>
					<p className="text-muted-foreground max-w-[800px] mx-auto">
						{t('about.title_education')}
					</p>
				</motion.div>
				{/* Main Content */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Education Section - Left */}
					<motion.div
						className="px-5"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<div className="font-medium text-lg mb-4">
							2020 - 2026
						</div>
						<div>
							<h2 className="font-semibold text-xl">
								{t('about.university')}
							</h2>
							<h3 className="text-md font-normal mb-3">
								Escuela de Ingeniería y Arquitectura (EINA) | {t('about.studies')}
							</h3>
							<div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me5}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me4}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me6}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<p className="text-gray-400 text-justify body text-lg leading-relaxed">
									{/* PÁRRAFO 1 */}
									{t('about.edu_p1_1')}
									<span className="text-white font-medium">
										{t('about.edu_p1_bold1')}
									</span>
									{t('about.edu_p1_2')}
									<span className="text-white font-medium">
										{t('about.edu_p1_bold2')}
									</span>
									{t('about.edu_p1_3')}
									<span className="text-white font-medium">
										{t('about.edu_p1_bold3')}
									</span>
									{t('about.edu_p1_4')}
									
									<br />
									<br />
									
									{/* PÁRRAFO 2 */}
									{t('about.edu_p2_1')}
									<span className="text-white font-medium">
										{t('about.edu_p2_bold1')}
									</span>
									{t('about.edu_p2_2')}
									
									<br />
									<br />
									
									{/* PÁRRAFO 3 */}
									{t('about.edu_p3_1')}
									<span className="text-white font-medium">
										{t('about.edu_p3_bold1')}
									</span>
									{t('about.edu_p3_2')}
								</p>
							</div>
							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
									{/*GPA: 4 out of 4 */}
								</div>
							</div>
						</div>
					</motion.div>{" "}
					{/* Erasmus Section - Right */}
					<motion.div
						className="px-5"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}>
						<div className="font-medium text-lg mb-4">
							2023 - 2024
						</div>
						<div>
							<h2 className="font-semibold text-xl">
								Università degli Studi della Campania Luigi Vanvitelli
							</h2>
							<h3 className="text-md font-normal mb-3">
								Erasmus+ Program | Naples, Italy
							</h3>
							<div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
								<div className="group w-full h-full">
									<Image
										src={Napoli}
										width={400}
										height={225}
										alt="Erasmus"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
							</div>
							<p className="text-gray-400 text-justify body text-lg">
								Durante el curso 2023-2024 participé en el programa{" "}
								<span className="text-white font-medium">Erasmus+</span>{" "}
								en Nápoles, Italia. Una experiencia que marcó tanto mi
								desarrollo profesional como personal al sumergirme en un entorno académico y
								cultural completamente nuevo. 
								En la <span className="text-white font-medium">Università degli Studi della 
									Campania Luigi Vanvitelli</span>, tuve la oportunidad de ampliar mis horizontes 
									académicos y culturales,
								enfrentándome a nuevos desafíos y adaptándome a un sistema educativo diferente,
								además de <span className="text-white font-medium">crecer personalmente</span> al convivir con estudiantes de diversas nacionalidades
								y culturas, <span className="text-white font-medium">aprender un idioma de cero</span> y desenvolverme manteniendo conversaciones fluidas
								e integrarme bien en su comunidad.
								 <br />
								<br />
								Esta experiencia no solo <span className="text-white font-medium">fortaleció mi capacidad de adaptación y resiliencia</span>,
								sino que también me permitió desarrollar una perspectiva internacional que enriquece 
								mi enfoque hacia la ingeniería y el trabajo en equipo. Sin duda fue una decisión que <span className="text-white font-medium">recomiendo
								a cualquier estudiante</span>, ya que el crecimiento personal y profesional que se obtiene es enorme,
								además de ser una experiencia que se disfruta muchísimo.
							</p>
						</div>
					</motion.div>
					{/* Achievements Section (temporarily commented out)
						The original Achievements UI has been extracted to
						`app/about/components/educationAchievements.jsx` so the
						markup and behavior are preserved for future reuse.

						To re-enable, uncomment the import at the top of this file:
						  // import AchievementsSection from './educationAchievements'

						And replace this comment with:
						  <AchievementsSection
							visibleAchievements={visibleAchievements}
							isExpanded={isExpanded}
							setIsExpanded={setIsExpanded}
							hasMoreAchievements={hasMoreAchievements}
							allAchievements={allAchievements}
						  />
					*/}
				</div>
			</section>
		</Wrapper>
	);
}
