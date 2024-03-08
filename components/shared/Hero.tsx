"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
	const component = useRef(null);
	const imgcomponent = useRef(null);

	useEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline();

			tl.fromTo(
				".title-animation",
				{
					x: -100,
					opacity: 0,
					rotate: -10,
				},
				{
					x: 0,
					opacity: 1,
					rotate: 0,
					ease: "elastic.out(1, 0.3)",
					duration: 1,
					transformOrigin: "left top",
					stagger: {
						each: 0.1,
						from: "random",
					},
				}
			);
		}, component);
		return () => ctx.revert();
	}, []);

	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.fromTo(
				".logo",
				{ opacity: 0, scale: 1.5 },
				{ scale: 1, opacity: 1, duration: 1.5, ease: "power3.inOut" }
			);
		});
		return () => ctx.revert();
	}, []);

	const renderLetters = (title: string) => {
		if (!title) return;

		return title.split("").map((letter, index) => (
			<span className="title-animation inline-block" key={index}>
				{letter}
			</span>
		));
	};
	return (
		<header
			className="bg-center bg-cover bg-no-repeat sm:py-4 sm:px-8 py-4 px-8 flex justify-between items-center lg:items-center max-lg:flex-col w-full sm:gap-16"
			ref={component}
		>
			<div className="lg:flex-1 relative w-full flex flex-col sm:flex-row justify-between items-center gap-10 ">
				<h1 className="max-sm:text-5xl text-5xl text-white lg:max-w-lg font-semibold leading-relaxed max-sm:leading-relaxed max-sm:text-center  title-animation">
					{renderLetters("Explore The")}{" "}
					<span className="text-teal-500">
						{renderLetters("Divers Realms")}{" "}
					</span>
					{renderLetters("of Rhodes Island")}
				</h1>
				<Link href={"/"} ref={imgcomponent} className="logo">
					<Image
						src={"/assets/RI.svg"}
						alt="RI"
						width={400}
						height={400}
						className="object-contain "
					/>
				</Link>
			</div>
		</header>
	);
};

export default Hero;
