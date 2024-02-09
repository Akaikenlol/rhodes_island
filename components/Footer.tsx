import Image from "next/image";
import React from "react";

const Footer = () => {
	return (
		<footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-slate-600">
			<p className="text-base font-bold text-white">@2024 Rhodes Island</p>
			<Image
				src={"/assets/RI.svg"}
				alt="logo"
				width={50}
				height={50}
				className="object-contain"
			/>

			<div className="flex items-center gap-6">
				<Image
					src="/assets/tiktok.svg"
					alt="logo"
					width={19}
					height={19}
					className="object-contain"
				/>
				<Image
					src="/assets/instagram.svg"
					alt="logo"
					width={19}
					height={19}
					className="object-contain"
				/>
				<Image
					src="/assets/twitter.svg"
					alt="logo"
					width={19}
					height={19}
					className="object-contain"
				/>
			</div>
		</footer>
	);
};

export default Footer;
