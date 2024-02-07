import Image from "next/image";
import React from "react";

export interface OperatorCardProps {
	name: string;
	image: {
		name: string;
		link: string;
	}[];

	availability: string;
	affiliation: string;
	class: string[];
	lore: {
		combat_experience: string;
	};
	rarity: number;
}

interface Prop {
	operator: OperatorCardProps;
	index: number;
}

const OperatorCard = ({ operator }: Prop) => {
	return (
		<div className="max-w-sm rounded relative w-full bg-gradient-to-t from-cyan-100  to-yellow-100">
			<div className="relative w-full h-[40vh]">
				<Image
					src={operator.image[2].link}
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
					<div className="py-1 px-2 bg-[#161921] rounded-sm">
						<p className="text-white text-sm font-bold capitalize">
							{operator.availability}
						</p>
					</div>
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
						<p className="text-black">{operator.affiliation}</p>
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
		</div>
	);
};

export default OperatorCard;
