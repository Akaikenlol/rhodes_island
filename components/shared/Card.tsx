"use client";

import { Prop } from "@/types";
import Image from "next/image";
import React, { useRef } from "react";
import { Motion } from "./Motion";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { Badge } from "../ui/badge";

function OperatorCard({ operator, index }: Prop) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
	return (
		<>
			<Motion
				className="max-w-sm rounded relative w-full bg-gradient-to-t from-cyan-100  to-yellow-100"
				initial="hidden"
				animate="visible"
				transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.25 }}
				viewport={{ amount: 0 }}
				ref={ref}
				style={{
					opacity: opacityProgress,
					scale: scaleProgress,
					transition: "all 0.2s",
				}}
			>
				<div className="relative w-full max-sm:h-[40vh] h-[40vh]">
					<Image
						src={
							operator.art && operator.art[0]
								? operator.art[0].link
								: "/assets/mostima.png"
						}
						alt={operator.name}
						fill
						className="rounded-xl object-cover object-center w-full h-full"
					/>
				</div>

				<div className="py-4 px-2 flex flex-col gap-3">
					<div className="flex justify-between items-center gap-1">
						<h2 className="font-bold text-black text-xl line-clamp-1 w-full">
							{operator.name}
						</h2>
						{operator.release_dates.global === "N/A" ? (
							<Badge className="text-white text-sm capitalize py-1 px-2 bg-teal-500 rounded-md">
								CN
							</Badge>
						) : (
							<Badge className="text-white text-sm capitalize py-1 px-2 bg-teal-500 rounded-md">
								{operator.availability}
							</Badge>
						)}
					</div>
					<div className="flex justify-between gap-4 items-center">
						<div className="flex flex-row gap-2 items-center">
							<Image
								src="/assets/internet.svg"
								alt="availability"
								width={18}
								height={18}
								className="object-contain"
							/>
							<p className="text-black">{operator.affiliation[0]}</p>
						</div>
						<div className="flex flex-row gap-2 items-center">
							<Image
								src="/assets/star.svg"
								alt="rarity"
								width={18}
								height={18}
								className="object-contain"
							/>
							<p className="text-black">{operator.rarity}</p>
						</div>
					</div>
				</div>
			</Motion>
			<Motion
				className="fixed left-0 right-0 h-1 bottom-1 bg-teal-500/20"
				style={{ scaleX }}
			/>
		</>
	);
}

export default OperatorCard;
