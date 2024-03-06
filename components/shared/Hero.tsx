import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
	return (
		<header className="bg-center bg-cover bg-no-repeat sm:py-4 sm:px-8 py-4 px-8 flex justify-between items-center lg:items-center max-lg:flex-col w-full sm:gap-16">
			<div className="lg:flex-1 relative w-full flex flex-col sm:flex-row justify-between items-center gap-10 ">
				<h1 className="max-sm:text-4xl text-5xl text-white lg:max-w-lg font-bold leading-relaxed max-sm:text-center">
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
