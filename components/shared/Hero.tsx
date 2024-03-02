import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
	return (
		<header className="bg-center bg-cover bg-no-repeat sm:p-12 py-12 px-8 flex justify-between items-center lg:items-center max-lg:flex-col w-full sm:gap-16">
			<div className="lg:flex-1 relative w-full h-[50vh] flex flex-col sm:flex-row justify-between items-center gap-10">
				<h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-relaxed">
					Explore The <span className="text-teal-500">Divers Realms</span> of
					Rhodes Island
				</h1>
				<Link href={"/"}>
					<Image
						src={"/assets/RI.svg"}
						alt="RI"
						width={400}
						height={400}
						className="object-contain"
					/>
				</Link>
			</div>
		</header>
	);
};

export default Hero;
