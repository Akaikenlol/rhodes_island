"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const ProfileCard = () => {
	return (
		<>
			<Carousel>
				<CarouselContent>
					<CarouselItem>...</CarouselItem>
					<CarouselItem>...</CarouselItem>
					<CarouselItem>...</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</>
	);
};

export default ProfileCard;
