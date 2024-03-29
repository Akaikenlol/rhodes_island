"use client";

import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Motion } from "./Motion";

const ProfileCard = ({ data }: any) => {
	return (
		<>
			<Carousel
				plugins={[
					Autoplay({
						delay: 3000,
					}),
				]}
			>
				<CarouselContent>
					{data.art.map((art: any, index: number) => (
						<CarouselItem key={index}>
							<h3 className="text-black">{art?.name} Art</h3>
							<Motion
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.9 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
							>
								<Image
									src={art.link}
									alt="Operator Profile Picture"
									className="object-cover py-2"
									width={500}
									height={500}
									priority
								/>
							</Motion>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="bg-slate-800/20" />
				<CarouselNext className="bg-slate-800/20" />
			</Carousel>
		</>
	);
};

export default ProfileCard;
