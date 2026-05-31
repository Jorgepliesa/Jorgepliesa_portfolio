"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const navVariant = {
	open: {
		clipPath: "circle(2000px at calc(100% - 40px) 40px)",
		transition: {
			type: "tween",
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1],
		},
	},
	closed: {
		clipPath: "circle(0px at calc(100% - 40px) 40px)",
		transition: {
			delay: 0.3,
			type: "tween",
			duration: 0.3,
			ease: [0.4, 0, 1, 1],
		},
	},
};

const itemVariants = {
	open: (custom) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: custom,
			type: "tween",
			duration: 0.3,
			ease: [0.22, 1, 0.36, 1],
		},
	}),
	closed: {
		opacity: 0,
		x: -80,
		transition: {
			type: "tween",
			duration: 0.2,
		},
	},
};

const NavItems = ({ isNavOpen, setIsNavOpen }) => {
	const handleItemClick = () => {
		setIsNavOpen(false);
	};
	const { t, language, toggleLanguage } = useLanguage();

	return (
		<>
			<motion.div
				className={`fixed z-[45] w-full h-screen flex items-center justify-center overflow-hidden`}
				variants={navVariant}
				animate={isNavOpen ? "open" : "closed"}
				initial={false}>
				<div className="relative opacity-95 flex flex-col items-center space-x-8 min-h-[100vh] min-w-[100vw]" style={{background: 'linear-gradient(180deg, rgba(10,10,10,0.9), rgba(5,5,7,0.95))', boxShadow: 'inset 0 0 80px rgba(57,255,20,0.02)'}}>
					<div className="flex flex-col items-center space-y-8 my-auto mx-0 z-50">
						{/* title */}
						<motion.h1
							variants={itemVariants}
							animate={isNavOpen ? "open" : "closed"}
							className="text-6xl font-bold text-white ">
							{t('nav.menu')}
						</motion.h1>
						<Link href="/#home">
							<div
								className="text-2xl font-bold text-white"
								onClick={handleItemClick}>
								<motion.h2
									className="text-white"
									variants={itemVariants}
									animate={isNavOpen ? "open" : "closed"}
									custom={0.1}>
									{t('nav.home')}
								</motion.h2>
							</div>
						</Link>
						<Link href="/about">
							<div
								onClick={handleItemClick}
								className="text-2xl font-bold text-white">
								<motion.h2
									className="text-white"
									variants={itemVariants}
									animate={isNavOpen ? "open" : "closed"}
									custom={0.2}>
									{t('nav.about')}
								</motion.h2>
							</div>
						</Link>
						<Link href="/projects">
							<div
								onClick={handleItemClick}
								className="text-2xl font-bold text-white">
								<motion.h2
									className="text-white"
									variants={itemVariants}
									animate={isNavOpen ? "open" : "closed"}
									custom={0.3}>
									{t('nav.projects')}
								</motion.h2>
							</div>
						</Link>
						<Link href="/#contact">
							<div
								onClick={handleItemClick}
								className="text-2xl font-bold text-white">
								<motion.h2
									className="text-white"
									variants={itemVariants}
									animate={isNavOpen ? "open" : "closed"}
									custom={0.4}>
									{t('nav.contact')}
								</motion.h2>
							</div>
						</Link>
						
						{/* Language Switcher */}
						<motion.button
							onClick={toggleLanguage}
							variants={itemVariants}
							animate={isNavOpen ? "open" : "closed"}
							custom={0.5}
							className="mt-8 px-6 py-2 border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-colors rounded-full font-bold"
						>
							{language === 'en' ? 'ESPAÑOL' : 'ENGLISH'}
						</motion.button>
					</div>
				</div>
			</motion.div>
		</>
	);
};

const Navbar = () => {
	const navRef = useRef(null);
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<>
				<nav
				ref={navRef}
				className={`navbar px-5 md:px-24 w-screen fixed transition-colors ease duration-500 ${
					isNavOpen
						? "glass-weak"
						: ""
				} inset-0 flex flex-row justify-between items-center h-16 z-50 `} style={{backgroundColor: 'transparent'}}>
				<div>
						<h1
							className={`text-2xl ml-2 md:ml-0 transition-colors ease duration-500 neon`}>
							Jorgepliesa
						</h1>
				</div>
				<div className="flex flex-row items-center">
					<button
						aria-label={isNavOpen ? "Close menu" : "Open menu"}
							className="burger button flex flex-col justify-center items-center space-y-1.5 "
						onClick={toggleNav}>
						<div
								className={`w-10 h-1 rounded-full transition-all ease duration-300 ${
									isNavOpen ? "rotate-45 translate-y-[2px] bg-[var(--color-accent)] shadow-[0_0_12px_rgba(57,255,20,0.6)]" : "bg-[var(--color-fg)] shadow-[0_0_8px_rgba(57,255,20,0.25)]"
								}`} />
							<div className={`w-10 h-1 rounded-full transition-all ease duration-300 ${
									isNavOpen ? "-rotate-45 -translate-y-2 bg-[var(--color-accent)] shadow-[0_0_12px_rgba(57,255,20,0.6)]" : "bg-[var(--color-fg)] shadow-[0_0_8px_rgba(57,255,20,0.25)]"
								}`} />
					</button>
				</div>
			</nav>
			{/* items */}
			<NavItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</>
	);
};
export default Navbar;
