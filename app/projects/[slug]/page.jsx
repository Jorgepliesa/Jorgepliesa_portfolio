"use client";
import { useState, useEffect, use, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import projectES from "@/json/dataES.json";
import projectEN from "@/json/dataEN.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinux, faWindows } from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faKeyboard, faArrowUpRightFromSquare, faChevronLeft, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import NotFound from "@/app/not-found";
import Image from "next/image";
import BlurImage from "@/public/image/placeholder/blur.jpg";
import Button from "@/components/Button";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

function ProjectImage({ src, alt, index }) {
	const [loaded, setLoaded] = useState(false);
	const handleLoad = useCallback(() => setLoaded(true), []);

	return (
		<div className="relative mb-5 max-w-7xl mx-auto w-full">
			{!loaded && (
				<div className="absolute inset-0 animate-pulse bg-neutral-800 rounded" />
			)}
			<Image
				src={src}
				alt={alt}
				width={1920}
				height={1080}
				className={`h-auto w-full object-contain transition-opacity duration-500 rounded ${loaded ? "opacity-100" : "opacity-0"}`}
				placeholder="blur"
				blurDataURL={BlurImage.src}
				loading={index === 0 ? "eager" : "lazy"}
				onLoad={handleLoad}
			/>
		</div>
	);
}

function ImageCarousel({ images, altPrefix }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const isVideo = (url) => {
		return url.match(/\.(mp4|webm|ogg)$/i);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	if (!images || images.length === 0) return null;

	if (images.length === 1) {
		return isVideo(images[0]) ? (
			<video
				className="h-auto w-full object-contain transition-opacity duration-500 rounded"
				controls
			>
				<source src={images[0]} type="video/mp4" />
			</video>
		) : (
			<ProjectImage src={images[0]} alt={`${altPrefix} 1`} index={10} />
		);
	}

	return (
		<div className="relative w-full max-w-7xl mx-auto group">
			<div className="overflow-hidden rounded bg-black">
				<div
					className="flex transition-transform duration-500 ease-in-out"
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
					{images.map((img, i) => (
						<div key={i} className="min-w-full flex-shrink-0 aspect-video relative overflow-hidden w-full flex items-center justify-center bg-black">
							{isVideo(img) ? (
								<video
									className="block w-full h-full max-w-full object-contain"
									controls
									preload="metadata"
									onClick={(e => e.stopPropagation())}
								>
									<source src={img} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
							) : (
								<div className="w-full h-full relative flex items-center justify-center">
									<ProjectImage src={img} alt={`${altPrefix} ${i + 1}`} index={10 + i} />
								</div>
							)}
						</div>
					))}
				</div>
			</div>

			<button
				onClick={prevSlide}
				className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
				<FontAwesomeIcon icon={faChevronLeft} className="text-[#39ff14]" />
			</button>
			<button
				onClick={nextSlide}
				className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
				<FontAwesomeIcon icon={faChevronLeft} className="rotate-180 text-[#39ff14]" />
			</button>

			<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
				{images.map((_, i) => (
					<button
						key={i}
						onClick={() => setCurrentIndex(i)}
						className={`w-3 h-3 rounded-full transition-colors ${
							currentIndex === i ? "bg-white" : "bg-white/50"
						}`}
						aria-label={`Go to slide ${i + 1}`}
					/>
				))}
			</div>
		</div>
	);
}

function ScrollDownButton() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop < document.documentElement.scrollHeight - document.documentElement.clientHeight) {

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
				setIsAtBottom(true);

    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
			setIsAtBottom(false);
    }
  };

  return (
    <div className="fixed bottom-5 left-0 right-0 flex justify-center items-center mb-10">
      <motion.div
        className="h-10 w-10 bg-neutral-900 rounded-full flex justify-center items-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleScroll}
      >
        <FontAwesomeIcon
          icon={isAtBottom ? faChevronUp : faChevronDown}
          className="text-white text-2xl"
        />
      </motion.div>
    </div>
  );
}


function Page(props) {
    const params = use(props.params);
    const router = useRouter();
    const [data, setData] = useState(null);
	const jsonData = useLanguage() === "es" ? projectES : projectEN;
	const {t} = useLanguage(); 
    useEffect(() => {
		const selectedData = jsonData.Projects.find(
			(item) => item.slug === params.slug
		);
		if (selectedData === undefined) {
			setData("404");
		} else {
			setData(selectedData);
		}
	}, [params.slug]);

    if (data === "404") {
		return (
			<>
				<NotFound />
			</>
		);
	} else if (!data) {
		return (
			<div className="relative min-h-screen w-full  gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
				<div className="min-h-screen flex justify-center items-center w-full">
					<div className="mx-auto grid grid-cols-1 md:grid-cols-2  w-full">
						<div className="flex justify-center items-start flex-col mb-5 space-y-10 w-ful p-4">
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
						</div>
						<div className="flex justify-start items-start flex-col mb-5 w-full p-4">
							<div className="animate-pulse duration-500 shadow-lg bg-neutral-400 rounded  w-full h-full "></div>
						</div>
					</div>
				</div>
				{/* images */}
				<div className="mx-auto grid grid-cols-1 p-5 md:p-20  w-full h-auto">
					<div className="w-full h-auto aspect-video">
						<div className="animate-pulse duration-500 shadow-lg bg-neutral-400 h-full w-full rounded"></div>
					</div>
				</div>
			</div>
		);
	}
    return (
		<div className="relative min-h-screen w-full gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
			<button
				onClick={() => router.back()}
				className="fixed top-2 -left-2 md:left-10 flex justify-center items-center rounded-full p-4 transition duration-300 ease-in-out z-50"
				aria-label="Go back">
				<FontAwesomeIcon
					icon={faChevronLeft}
					className="text-[#39ff14] pr-10"
				/>
			</button>
			<ScrollDownButton />
			<div className="min-h-screen flex justify-center items-center">
				<div className="mx-auto grid grid-cols-1 md:grid-cols-2  mt-10 md:mt-0">
					<div className="min-h-screen sm:min-h-0 flex justify-center items-start flex-col mb-5 space-y-10 mx-auto">
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Project
							</h2>
							<h1 className="text-4xl font-medium text-neutral-900">
								{data.title}
							</h1>
						</div>
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Technology
							</h2>
							<p className="text-2xl font-normal text-neutral-400">
								{data.tech.join(", ")}
							</p>
						</div>
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Year
							</h2>
							<p className="text-2xl font-normal text-neutral-400">
								{data.year}
							</p>
						</div>
						{data.preview && (
							<div>
								<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
									Preview
								</h2>
								<p className="text-2xl font-normal text-neutral-400">
									<a
										href={data.preview}
										target="_blank"
										rel="noopener noreferrer">
										Preview{" "}
										<FontAwesomeIcon
											icon={faArrowUpRightFromSquare}
											className="ml-3"
										/>
									</a>
								</p>
							</div>
						)}
						{data.code && (
							<div>
								<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
									Source Code
								</h2>
								<p className="text-2xl font-normal text-neutral-900">
									<a
										href={data.code}
										target="_blank"
										rel="noopener noreferrer">
										Github{" "}
										<FontAwesomeIcon
											icon={faGithub}
											className="ml-3"
										/>
									</a>
								</p>
							</div>
						)}
						<div className="flex justify-start items-start flex-col mb-5 ">
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Platforms & Input
							</h2>
							<div className="flex space-x-6 text-4xl text-neutral-500">
								{data.platforms.includes("linux") && <FontAwesomeIcon icon={faLinux} title="Linux" />}
								{data.platforms.includes("windows") && <FontAwesomeIcon icon={faWindows} title="Windows" />}
								{data.platforms.includes("gamepad") && <FontAwesomeIcon icon={faGamepad} title="Gamepad Support" />}
								{data.platforms.includes("keyboard") && <FontAwesomeIcon icon={faKeyboard} title="Keyboard & Mouse Support" />}
							</div>
						</div>
						<div className="flex space-x-5">
							<Button variation="primary">
									<Link
										href={"/docs/GDD.pdf"}
										target="_blank"
										rel="noopener noreferrer">
										View GDD
									</Link>
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
					</div>
					<div className="flex justify-start items-start flex-col mb-5 ">
						<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
							{t('projects.description')}
						</h2>
						{data.desc.map((desc, index) => (
							<p
								key={index}
								className="text-xl text-justify tracking-wide font-normal text-gray-400 mb-5 max-w-[1000px]">
								{desc}
							</p>
						))}
					</div>
					<div className="flex justify-start items-start flex-col mb-5 md:col-start-2">
						<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400 md:-mt-[200px]">
							Goal
						</h2>
						<p className="text-xl text-justify tracking-wide font-normal text-gray-400 mb-5 max-w-[1000px]">
							{data.goal}
						</p>
					</div>
					<div></div>
				</div>
			</div>

			{/* Trailer Section */}
			{data.trailer && (
				<div className="mx-auto flex flex-col items-center justify-center w-full max-w-7xl px-5 md:px-20 mb-20 space-y-10">
					<div className="w-full flex justify-center items-center">
						<h2 className="uppercase font-normal text-3xl tracking-[8px] text-neutral-200 text-center">
							Trailer
						</h2>
					</div>
					<div className="w-full rounded overflow-hidden shadow-xl bg-black aspect-video relative flex justify-center items-center">
						<video
							src={data.trailer}
							controls
							className="w-full h-full object-contain"
							preload="metadata"
						>
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			)}

			{/* Custom Game Sections */}
			{data.sections && data.sections.map((section, idx) => (
				<div key={idx} className="mx-auto flex flex-col items-center justify-center w-full max-w-7xl px-5 md:px-20 mb-20 space-y-10">
					<div className="w-full flex justify-center items-center">
						<h2 className="uppercase font-normal text-3xl tracking-[8px] text-neutral-200 text-center">
							{section.title}
						</h2>
					</div>
					<div className="w-full md:max-h-[600px] max-w-[800px] overflow-hidden rounded shadow-xl bg-black aspect-video relative flex justify-center items-center">
						<ImageCarousel images={section.images || (section.image ? [section.image] : [])} altPrefix={section.title} />
					</div>
					<div className="w-full flex justify-center items-center">
						<div className="max-w-4xl text-xl text-justify tracking-wide font-normal text-gray-400 space-y-6">
							{Array.isArray(section.text) ? (
								section.text.map((paragraph, pIdx) => (
									<p key={pIdx}>{paragraph}</p>
								))
							) : (
								<p>{section.text}</p>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Page;
