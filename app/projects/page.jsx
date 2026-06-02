"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";

// images
import Intervyou1 from "@/public/image/projects/Ascension/Imagen1.png";
import Intervyou2 from "@/public/image/projects/Ascension/ascension2.png";
import Intervyou3 from "@/public/image/projects/Ascension/ascension3.png";
import ProjectAll from "@/public/image/projects.png";

import Hr from "@/components/Hr";
import ProjectCard from "./components/ProjectCard";
import Projects from "@/json/data.json";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "@/context/LanguageContext";

const category = {
	1: "Software Development",
	2: "Videogames",
	9: "Other",
};

export default function Page() {
	const [activeCategory, setActiveCategory] = useState(null);
	const projects = Projects.Projects.filter((item) => item.show === true);
	const { t } = useLanguage();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<main className="overflow-hidden">
				<FixedButon href="/#projects">
					<FontAwesomeIcon icon={faChevronLeft} className="text-[#39ff14] pr-10" />
				</FixedButon>
				<div className="relative h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
					<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
						<motion.div
							initial={{ scale: 1 }}
							animate={{ scale: 1.6 }}
							transition={{ duration: 1, ease: "circOut" }}
							className="relative bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 ">
							<Image
								src={ProjectAll}
								alt="jorgepliesa"
								fill
								placeholder="blur"
								className="object-cover"
								sizes="(max-width: 768px) 80vw, 30vw"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none md:backdrop-filter-none bg-black-100 bg-opacity-50 md:bg-transparent md:pt-0">
						<h1 className="md:bg-black bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-8xl font-bold">
							{t('projects.title')}
						</h1>
						<Hr />
						<p className="title  text-xl mt-4 tracking-wider text-gray-400 leading-[1.7rem] mb-5 max-w-[600px]">
							{t('projects.desc')}
						</p>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "circOut" }}
							onClick={() => {
								window.scrollTo({
									top: 1000,
									behavior: "smooth",
								});
							}}
							className="mb-3">
							<Button variation="primary">Scroll Down</Button>
						</motion.div>
					</div>
				</div>
				<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<Hr variant="long"></Hr>
						<h1 className="text-3xl font-bold mt-3">Hightlight</h1>
					</div>
				</div>
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="absolute top-28 left-10 h-[40%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="relative w-full h-full shadow-lg">
									<Image
										src={Intervyou1}
										alt="jorgepliesa"
										fill
										placeholder="blur"
										className="rat object-cover"
										sizes="50vw"
									/>
								</motion.div>
							</div>
							<div className="absolute top-10 right-28 h-[30%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
									className="relative w-full h-full shadow-lg ">
									<Image
										src={Intervyou3}
										alt="jorgepliesa"
										fill
										placeholder="blur"
										className="object-cover"
										style={{ objectPosition: "0% 0%" }}
										sizes="40vw"
									/>
								</motion.div>
							</div>
							<div className="absolute bottom-10 md:bottom-26 right-20 h-[35%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
									className="relative w-full h-full shadow-lg">
									<Image
										src={Intervyou2}
										alt="jorgepliesa"
										fill
										placeholder="blur"
										className="object-cover"
										sizes="40vw"
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
							Ascension - Roguelike/Arcade Football Videogame 
						</h2>
						<p className="text-gray-400 text-justify body text-lg">
							Para un proyecto de la universidad en grupo, diseñamos un videojuego de fútbol 
							con mecánicas de roguelike desde cero. Diseñado en C++, construimos nuestro propio
							motor gráfico utilizando OpenGL y SFML, implementando físicas personalizadas y una IA 
							desafiante para los oponentes. El juego presenta niveles generados proceduralmente, 
							power-ups únicos y una jugabilidad adictiva que combina estrategia y acción en cada partido.
							El juego tiene un apartado artístico pixel art en 2D, con una sección en 3D para jugar los penaltis.
							<br /> <br />
							Resalto este proyecto puesto que en un videojuego es donde se involucran todas las areas de la informática, 
							desde el diseño de algoritmos, la optimización de código, el diseño gráfico, la inteligencia artificial,
							 entre otros. Además, es un proyecto que me permitió aprender y aplicar una gran cantidad de conocimientos 
							 técnicos en un contexto práctico y creativo.
						</p>{" "}
						<div className="mt-3">
							<Button variation="primary">
								<Link href="projects/Ascension">More</Link>
							</Button>
							<Button variation="secondary">
								<a
									href="https://jorgepliesa.itch.io/ascension"
									target="_blank"
									rel="noopener noreferrer">
									Play!
								</a>
							</Button>
						</div>
					</motion.div>
				</div>
				<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start">
						<Hr variant="long"></Hr>
						<motion.h1
							className="text-3xl font-bold mt-3"
							initial={{
								opacity: 0,
								x: -200,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.7,
								type: "spring",
							}}>
							{t('projects.more_projects')}
						</motion.h1>
					</div>
				</div>

				{/* choose category */}
				<motion.div
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						type: "spring",
					}}
					className="flex flex-row justify-center items-start flex-wrap gap-3 md:gap-5 my-5 ">
					{Object.keys(category).map((key, index) => (
						<button
							key={index}
							className={`px-2 md:px-4 py-2 rounded-lg cursor-pointer transition-all ease duration-300 focus:bg-gray-300 focus:text-black focus:ring focus:ring-slate-500 ${
								activeCategory === key
									? "bg-gray-300 text-black hover:bg-gray-700 hover:text-white"
									: "bg-gray-700 text-white hover:bg-gray-300 hover:text-black"
							}`}
							onClick={() => setActiveCategory(activeCategory === key ? null : key)}>
							{category[key]}
						</button>
					))}
				</motion.div>

				{/* projects */}
				<div className="w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10 cursor-pointer">
					{projects.map((project, index) => (
						<ProjectCard
							project={project}
							key={index}
							activeCategory={activeCategory}
						/>
					))}
				</div>

				{/* view in archive btn */}
				{/*<motion.div
					initial={{
						opacity: 0,
					}}
					whileInView={{
						opacity: 1,
					}}
					className="flex justify-center items-center flex-col my-5 self-start ">
					<Button variation="primary">
						<Link href="projects/archive">View In Archive</Link>
					</Button>
				</motion.div>*/}
			</main>
		</>
	);
}
