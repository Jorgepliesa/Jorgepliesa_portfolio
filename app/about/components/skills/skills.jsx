"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CodepenIcon, WebhookIcon, ActivityIcon, MobileIcon } from "./icons"
import { useLanguage } from "@/context/LanguageContext";
const skillCategories = {
	core: {
		title: "Core Programming & Systems",
		icon: CodepenIcon,
		description: "Lenguajes puros, especialmente de bajo nivel y de propósito general",
		languages: [
			{ name: "C++", highlight: true },
			{ name: "Java", highlight: true },
			{ name: "C", highlight: false },
			{ name: "SQL", highlight: true },
			{ name: "Pyhton", highlight: false },
			{ name: "JavaScript", highlight: true },
			{ name: "HTML5", highlight: false },
			{ name: "SCSS", highlight: false },
			{ name: "TypeScript", highlight: true },
			{ name: "R", highlight: false },
			{ name: "php", highlight: false },
			{ name: "C#", highlight: false },
		],
		tools: [
			"OpenGL",
			"SFML",
			"Jupyter Notebook",
			"SageMath",
		],
	},
	web: {
		title: "Full-Stack Web & Mobile",
		icon: MobileIcon,
		description: "Building modern, responsive and cross-platform applications",
		languages: [
			{ name: "React Native, Expo", highlight: true },
			{ name: "NestJS, Express, TypeORM", highlight: true },
			{ name: "node.js", highlight: true },
			{ name: "Angular", highlight: true },
			{ name: "Ionic", highlight: true },
			{ name: "HTML5", highlight: true },
			{ name: "SCSS", highlight: true },
			{ name: "TypeScript", highlight: false },
			{ name: "JavaScript", highlight: false },
			{ name: "php", highlight: false },
		],
		tools: [
			"Swagger",
			"Postman",
			"Jasmine/Karma",
			"Kendo UI",
			"Expo Go",
		],
	},
	Architecture: {
		title: "Architecture, DevOps & Databases",
		icon: WebhookIcon,
		description: "Infrastructure, Data & CI/CD",
		languages: [
			{ name: "Git", highlight: true },
			{ name: "Azure DevOps", highlight: true },
			{ name: "SonarQube", highlight: true },
			{ name: "Docker", highlight: true },
			{ name: "PostgreSQL + TimeScaleDB", highlight: true },
			{ name: "XAMPP", highlight: false },
			{ name: "Apache", highlight: false },
			{ name: "Agile Methodologies (Scrum)", highlight: false },
		],
		tools: [
			"MySQL",
			"Oracle",
			"Github",
			"PostgreSQL",
		],
	},
	
	IT: {
		title: "Networking & IoT",
		icon: ActivityIcon,
		description: "Cyber-Defense, Hardware Interfaces & semantics",
		languages: [
			{ name: "WireShark", highlight: false },
			{ name: "GNS3", highlight: false },
			{ name: "Arduino", highlight: true },
			{ name: "Solidity & Ethereum", highlight: false },
		],
		tools: ["Arduino", "API Telegram" , "MAGERIT", "PILAR"],
	},
};

function SkillCard({ skill, isSelected, onClick }) {
	const Icon = skill.icon;
	return (
		<motion.div
			onClick={onClick}
			className={`relative cursor-pointer group p-6 rounded-2xl border transition-all duration-300 ${
				isSelected
					? "bg-white/20 border-black border-2 shadow-lg"
					: "bg-white/10 border-gray-300/20 hover:bg-white/20 hover:border-gray-300/30"
			}`}
			whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 0.97 }}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}>
			{/* Glow effect - removed for selected state */}
			{!isSelected && (
				<div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-50 bg-gradient-to-r from-gray-400/20 to-gray-600/20 blur-xl" />
			)}

			<div className="relative z-10 flex flex-col items-center text-center space-y-4">
				<div
					className={`p-4 rounded-xl transition-all duration-300 ${
						isSelected ? "bg-white/30" : "bg-white/10 group-hover:bg-white/20"
					}`}>
					<Icon className="w-8 h-8 text-black" />
				</div>
				<div>
					<h3 className="font-semibold text-black text-lg mb-2">
						{skill.title}
					</h3>
					<p className="text-gray-600 text-sm leading-relaxed">
						{skill.description}
					</p>
				</div>
			</div>
		</motion.div>
	);
}
const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

function SkillDetails({ selectedSkill }) {
  if (!selectedSkill) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mt-12 space-y-8"
    >
      {/* Languages & Frameworks Section */}
      <motion.div
        className="bg-white/40 border border-gray-300/30 rounded-2xl p-8 shadow-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-black mb-6 text-center">
          Technology Stack
        </h3>
        <motion.div
          key={selectedSkill.title}
          className="flex flex-wrap justify-center gap-3"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
          initial="hidden"
          animate="show"
        >
          {selectedSkill.languages.map((skill) => (
            <motion.span
              key={skill.name}
              variants={tagVariants}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default flex items-center gap-2
                ${
                  skill.highlight
                    ? "bg-black text-white shadow-md border-black scale-105 z-10 hover:shadow-lg"
                    : "bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 text-black hover:bg-white/60"
                }`}
            >
              {skill.highlight && (
                <span className="text-yellow-400 text-[10px] animate-pulse">✦</span>
              )}
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Tools Section */}
      <motion.div
        className="bg-white/20 border border-gray-300/20 rounded-2xl p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-xl font-medium text-gray-500 mb-6 text-center uppercase tracking-wider">
          Infrastructure & Tools
        </h3>
        <motion.div
          key={selectedSkill.title + "-tools"}
          className="flex flex-wrap justify-center gap-3"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
          initial="hidden"
          animate="show"
        >
          {selectedSkill.tools.map((tool) => (
            <motion.span
              key={tool}
              variants={tagVariants}
              className="px-4 py-1.5 bg-gray-200/30 border border-gray-400/20 rounded-lg text-gray-300 text-xs font-medium"
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
	const [selectedCategory, setSelectedCategory] = useState("web");
	const { t } = useLanguage();
	return (
		<div className="relative">
			<div className="mx-auto container px-6 py-20">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center space-y-4 mb-16">
					<h2 className="text-5xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
						Skills & Expertise
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
						{t('about.desc_skills')}
					</p>
				</motion.div>

				{/* Skill Categories Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
					{Object.entries(skillCategories).map(([key, skill], index) => (
						<motion.div
							key={key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}>
							<SkillCard
								skill={skill}
								isSelected={selectedCategory === key}
								onClick={() => setSelectedCategory(key)}
							/>
						</motion.div>
					))}
				</div>

				{/* Skill Details */}
				<AnimatePresence mode="wait">
					<SkillDetails selectedSkill={skillCategories[selectedCategory]} />
				</AnimatePresence>
			</div>
		</div>
	);
}
