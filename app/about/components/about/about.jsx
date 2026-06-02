import Image from "next/image";
import Card from "./spotify/card";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me1.jpg";
import Me2 from "@/public/image/me2.jpg";
import Me3 from "@/public/image/me3.jpg";
import Hr from "@/components/Hr";
import { useLanguage } from "@/context/LanguageContext";

function Title() {
	const { t } = useLanguage();
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">{t('about.title')}</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="relative w-full h-full">
								<Image
									src={Me1}
									alt="jorgepliesa"
									fill
									sizes="(max-width: 768px) 80vw, 40vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="relative w-full h-full">
								<Image
									src={Me2}
									alt="jorgepliesa"
									fill
									sizes="(max-width: 768px) 60vw, 25vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="relative w-full h-full">
								<Image
									src={Me3}
									alt="jorgepliesa"
									fill
									sizes="(max-width: 768px) 80vw, 35vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,

						type: "spring",
					}}>
					<h2 className="text-2xl font-bold tracking-wider mb-3">
						Jorge Pérez Liesa
					</h2>
					<p className="text-gray-400 text-justify body text-lg leading-relaxed">
						I am a{" "}
					<span className="text-white font-medium">
						Software & Game Developer{" "}
					</span>
					specialized in building immersive digital experiences and secure systems, bridging the gap between{" "}
					<span className="text-white font-medium">
						Modern Web Ecosystems and Core Software Architectures
					</span>
					. A Computer Science graduate from the{" "}
					<span className="text-white font-medium">
						University of Zaragoza
					</span>
					, my academic and professional journey is defined by tackling complex logic, ranging from low-level graphics optimization in C++ to full-stack application development.
					<br />
					<br />
					Recently, I engineered highly responsive web products as a Front-End Developer at{" "}
					<span className="text-white font-medium">
						Nervia Consultores
					</span>
					, where I drove test coverage to 95% and optimized software deployment cycles via Azure DevOps. Simultaneously, I am leading the technical architecture of my thesis: a gamified cross-platform mobile application powered by{" "}
					<span className="text-white font-medium">
						React Native and NestJS
					</span>
					, designed to motivate and support pediatric cancer survivors. 
					<br />
					<br />
					I am driven by clean code, cyber-defense patterns, and interactive design. I am currently seeking full-time opportunities in software engineering, cibersecurity, or game development—ready for{" "}
					<span className="text-white font-medium">
						100% remote roles or relocation wherever it takes
					</span>
					.
					</p>
					{/* <Card /> */}
				</motion.div>
			</div>
		</>
	);
}
