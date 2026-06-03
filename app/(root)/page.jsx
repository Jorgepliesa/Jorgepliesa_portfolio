// Copyright (C) 2025 Alvalen Bilyunazra
// This file is part of Alvalens-porto-2-nextJs.
// Licensed under the GNU GPL v3.0. See LICENSE for details.

"use client";
import { useState, useEffect} from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FullPageWrapper, Section, useFullPage } from "@alvalens/react-fullpage-snap";

// components
import Button from "@/components/Button";
import Me from "@/public/image/me1.jpg";
import MeAbout from "@/public/image/me2.jpg";
import Setup from "@/public/image/setup.jpg";
import ProjectAll from "@/public/image/projects.jpg";
import Hr from "@/components/Hr";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "@/context/LanguageContext";

function ScrollIndicator() {
	const { activeIndex } = useFullPage();
	const [dismissed, setDismissed] = useState(false);
	
	useEffect(() => {
		if (activeIndex !== 0) setDismissed(true);
	}, [activeIndex]);

	return (
		<AnimatePresence>
			{activeIndex === 0 && !dismissed && (
				<motion.div
					className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.6, delay: 1.2 } }}
					exit={{ opacity: 0, transition: { duration: 0.4 } }}>
					<span className="text-[10px] uppercase tracking-[4px] text-gray-500 font-medium">
						Scroll
					</span>
					<motion.div
						className="w-[1.5px] h-14 bg-gray-500 origin-top"
						animate={{
							scaleY: [0, 1, 1],
							opacity: [0, 1, 0],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
							times: [0, 0.5, 1],
						}}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

const MyPage = () => {
	const { t } = useLanguage();
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<FullPageWrapper>
			<Section>
				<div className="mx-auto w-[90%] max-w-screen-2xl grid grid-cols-1 md:grid-cols-3 gap-2 p-4 md:p-10 overflow-hidden pt-16 md:pt-0">
					<motion.div
						className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							type: "spring",
						}}>
						<div className="block md:hidden col-span-1 mx-auto mt-2 mb-2">
							<div className="bg-slate-500 rounded-full h-60 w-60 grayscale hover:grayscale-0 transition-all ease duration-300">
								<Image
									src={Me}
									width={500}
									height={500}
									className="rounded-full w-full h-full object-cover "
									alt="jorgepliesa"
									placeholder="blur"
								/>
							</div>
						</div>
						<motion.h3
							className="uppercase text-xs md:text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.2,
								type: "spring",
							}}>
							Jorge Pérez Liesa
						</motion.h3>
						<motion.h1
							className="text-black text-base md:text-6xl lg:text-6xl 2xl:text-8xl font-bold my-2 md:my-5"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.3,
								type: "spring",
							}}>
							Computer Engineer
							<br/>
							Software Developer
						</motion.h1>
						<motion.p
							className="title text-ms md:text-md 2xl:text-xl mt-4 tracking-wider text-gray-400 leading-[1.7rem]"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.4,
								type: "spring",
							}}
						>
							{/* En móvil, si no está expandido, corta el texto. En PC (md:) siempre muestra el texto entero */}
							<span className={`md:hidden transition-all duration-300 ${
								isExpanded 
									? "text-[11px] body leading-relaxed text-gray-350" 
									: "text-xs title leading-[1.7rem]"
							}`}>
								{isExpanded ? t('home.desc_pc') : `${t('home.desc_mobile')} `}
							</span>
							
							{/* Este bloque solo existe en PC y siempre muestra la versión larga */}
							<span className="hidden md:inline title text-base">
								{t('home.desc_pc')}
							</span>

							{/* Botón interactivo de "..." que solo aparece en móvil */}
							<button
								onClick={() => setIsExpanded(!isExpanded)}
								className="inline-block md:hidden ml-1 text-[#39ff14] font-bold focus:outline-none hover:underline"
								aria-label={isExpanded ? "Read less" : "Read more"}
							>
								{isExpanded ? " [show less]" : "..."}
							</button>
						</motion.p>
						<motion.div
							className="buttons text-xs flex flex-row justify-center md:justify-start items-center space-x-3 mt-8 w-full max-w-md mx-auto md:mx-0 px-4 md:px-0"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.5,
								type: "spring",
							}}>
							<Button variation="primary">
								<Link
									href={"/docs/CV_V_JorgePerezLiesa.pdf"}
									target="_blank"
									rel="noopener noreferrer"
									download>
									{t('home.download_cv')}
								</Link>
							</Button>
							<Button variation="secondary">
								<a href="#contact">{t('home.contact_me')}</a>
							</Button>
						</motion.div>
					</motion.div>
					<motion.div
						className="hidden md:flex col-span-1 mx-auto justify-center items-center "
						initial={{ x: 100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 0.7,
							type: "spring",
						}}>
						<div className="rounded-full h-auto w-auto max-w-[26vw] lg:px-12 grayscale hover:grayscale-0 transition-all ease duration-300">
							<Image
								src={Me}
								width={400}
								height={550}
								placeholder="blur"
								alt="jorgepliesa"
								className="rounded-full w-full h-full object-cover"
							/>
						</div>
					</motion.div>
				</div>
			</Section>
			<Section>
				<div className="relative min-h-screen md:h-screen w-screen gap-8 md:gap-4 flex flex-col justify-start md:justify-center items-center overflow-hidden py-10 md:py-0">
					<div className="z-10 relative md:absolute md:top-1/2 md:right-[10%] md:-translate-y-1/2">
						<motion.div
							className="relative bg-slate-300 rounded-sm h-[400px] md:h-[60vh] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
							initial={{
								x: 300,
								opacity: 0,
								z: -100,
							}}
							whileInView={{
								x: 0,
								opacity: 1,
								z: 0,
							}}
							transition={{
								delay: 0.5,
								type: "spring",
								stiffness: 100,
								damping: 20,
							}}>
							<Image
								src={MeAbout}
								fill
								sizes="(max-width: 768px) 80vw, 30vw"
								className="object-cover"
								alt="jorgepliesa"
								placeholder="blur"
							/>
						</motion.div>
					</div>
					<div className="z-0 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start text-start px-10 py-5 pb-10">
						<motion.h1
							className="bg-black lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-4xl md:text-8xl font-bold"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.1,
								type: "spring",
							}}>
							{t("home.about_me")}
						</motion.h1>
						<Hr />
						<motion.p
							className="title  text-base md:text-xl tracking-wider text-gray-400 leading-snug mb-3 max-w-[1000px]"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.2,
								type: "spring",
							}}>
							{t('home.desc_about_me')}
						</motion.p>
						<motion.div
							initial={{ y: 40, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{
								delay: 0.3,
								type: "spring",
							}}>
							<Button variation="primary">
								<Link href="/about">Learn More</Link>
							</Button>
						</motion.div>
					</div>
				</div>
			</Section>
			<Section>
				<div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
					<div className="z-0 mb-48 md:mb-0  md:absolute md:top-1/2  md:right-[10%] md:-translate-y-1/2">
						<motion.div
							className="relative bg-slate-300 rounded-sm h-[400px] md:h-[60vh] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
							initial={{
								x: 300,
								opacity: 0,
								z: -100,
							}}
							whileInView={{
								x: 0,
								opacity: 1,
								z: 0,
							}}
							transition={{
								delay: 0.5,
								type: "spring",
								stiffness: 100,
								damping: 20,
							}}>
							<Image
								src={ProjectAll}
								fill
								sizes="(max-width: 768px) 80vw, 30vw"
								className="object-cover"
								alt="jorgepliesa Setup"
								placeholder="blur"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
						<motion.h1
							className="text-black text-2xl md:text-8xl font-bold"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.1,
								type: "spring",
							}}>
							{t("home.my_projects")}
						</motion.h1>
						<Hr />
						<motion.p
							className="title text-base md:text-xl mt-2 tracking-wider text-gray-400 leading-snug mb-3 max-w-[1000px]"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.2,
								type: "spring",
							}}>
							{t('home.desc_projects')}{" "}
						</motion.p>
						<motion.div
							initial={{ y: 40, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{
								delay: 0.3,
								type: "spring",
							}}>
							<Button variation="primary">
								<Link href="/projects">Learn More</Link>
							</Button>
						</motion.div>
					</div>
				</div>
			</Section>
			<Section>
				<div className="relative md:h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
					<div className="z-0 mb-48 md:mb-0  md:absolute md:top-1/2  md:right-[10%] md:-translate-y-1/2">
						<motion.div
							className="relative bg-slate-300 rounded-sm h-[400px] md:h-[60vh] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
							initial={{
								x: 300,
								opacity: 0,
								z: -100,
							}}
							whileInView={{
								x: 0,
								opacity: 1,
								z: 0,
							}}
							transition={{
								delay: 0.5,
								type: "spring",
								stiffness: 100,
								damping: 20,
							}}>
							<Image
								src={Setup}
								fill
								sizes="(max-width: 768px) 80vw, 30vw"
								className="object-cover"
								alt="jorgepliesa Setup"
								placeholder="blur"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] bottom-0 md:bottom-auto md:top-1/3 col-span-2 flex flex-col justify-center items-start text-start px-10 py-6 md:py-0">
						<motion.h1
							className="text-black text-4xl md:text-8xl font-bold mb-3"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.1,
								type: "spring",
							}}>
							{t("home.get_in_touch")}
						</motion.h1>
						<Hr />
						<motion.p
							className="title text-sm md:text-xl mt-4 tracking-wider text-gray-400 leading-relaxed max-w-[1000px]"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.2,
								type: "spring",
							}}>
							{t('home.desc_get_in_touch')}
						</motion.p>
						<motion.p
							className="title text-base md:text-xl tracking-wider text-gray-500 leading-relaxed mb-5"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.3,
								type: "spring",
							}}>
							<a href="mailto:jorgepliesa@gmail.com?subject=Hello&body=Estimado Jorge: ">
								jorgepliesa@gmail.com
							</a>
						</motion.p>
						<div className="flex justify-start items-center space-x-4">
							<motion.a
								href="mailto:jorgepliesa@gmail.com?subject=Hello&body=Estimado Jorge: "
								aria-label="Send email"
								className="flex justify-center items-center bg-gray-700 w-12 h-12 md:w-14 md:h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
								initial={{ y: 40, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{
									y: { delay: 0.1 },
									opacity: { delay: 0.2 },
								}}>
								<FontAwesomeIcon
									icon={faEnvelope}
									className="text-3xl"
								/>
							</motion.a>
							<motion.a
								href="https://github.com/jorgepliesa"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub profile"
								className="flex justify-center items-center bg-gray-700 w-12 h-12 md:w-14 md:h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									y: { delay: 0.2 },
									opacity: { delay: 0.3 },
								}}>
								<FontAwesomeIcon
									icon={faGithub}
									className="text-3xl"
								/>
							</motion.a>
							{/*<motion.a
								href="https://www.instagram.com/alvalens_/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram profile"
								className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									y: { delay: 0.3 },
									opacity: { delay: 0.4 },
								}}>
								<FontAwesomeIcon
									icon={faInstagram}
									className="text-3xl"
								/>
							</motion.a>*/}
							<motion.a
								href="https://www.linkedin.com/in/jorge-perez-liesa/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn profile"
								className="flex justify-center items-center bg-gray-700 w-12 h-12 md:w-14 md:h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									y: { delay: 0.4 },
									opacity: { delay: 0.5 },
								}}>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="text-3xl"
								/>
							</motion.a>
							{/*<motion.a
								href="https://discordapp.com/users/bloody#6118"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Discord profile"
								className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									y: { delay: 0.5 },
									opacity: { delay: 0.6 },
								}}>
								<FontAwesomeIcon
									icon={faDiscord}
									className="text-3xl"
								/>
							</motion.a>*/}
						</div>
					</div>
				</div>
			</Section>
			<ScrollIndicator />
		</FullPageWrapper>
	);
};

export default MyPage;
