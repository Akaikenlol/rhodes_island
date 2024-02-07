import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<header className="bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
			<div className="flex-1 flex flex-col gap-10">
				<Image
					src={"/assets/logo.svg"}
					alt="logo"
					width={101}
					height={101}
					className="object-contain"
				/>
				<h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-relaxed">
					Explore The <span className="text-teal-500">Divers Realms</span> of
					Rhodes Island
				</h1>
			</div>
			<div className="lg:flex-1 relative w-full h-[50vh] justify-center">
				<Image
					src={"/assets/RI.svg"}
					alt="RI"
					width={1000}
					height={1000}
					className="object-contain"
				/>
			</div>
		</header>
	);
};

export default Hero;
