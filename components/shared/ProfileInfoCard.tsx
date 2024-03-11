import React from "react";
import { Badge } from "@/components/ui/badge";

const ProfileInfoCard = ({ data }: any) => {
	const {
		name,
		artist,
		va,
		lore,
		affiliation,
		class: classData,
		tags,
		headhunting,
		recruitable,
	} = data;

	const renderBadges = (items: string[]) =>
		items.map((item: string, index: number) => (
			<Badge
				className="bg-teal-400/20 rounded-md border-none px-4 py-2 uppercase font-normal"
				key={index}
			>
				{item}
			</Badge>
		));

	return (
		<div className="bg-teal-500/20 rounded-md">
			<h2 className="text-black text-2xl py-2">{name} Profile</h2>
			<div className="grid grid-flow-col grid-rows-2 gap-7 text-left rounded-md text-black px-8 py-12 text-sm">
				<div className="flex flex-col gap-2">
					<h3>Artist: {artist}</h3>
					<h3>CV: {va}</h3>
					<h3>Gender: {lore.gender}</h3>
					<h3>Birthday: {lore.birthday}</h3>
					<h3>Place of Birth: {lore.place_of_birth}</h3>
					<h3>Race: {lore.race}</h3>
					<h3>Height: {lore.height}</h3>
					<h3>Combat Experience: {lore.combat_experience}</h3>
				</div>
				<div className="flex flex-col gap-2 sm:gap-3">
					<h3 className="text-sm sm:text-base line-clamp-1">
						Infection Status: {lore.infection_status}
					</h3>
					<h3 className="flex gap-1 sm:gap-2 cursor-pointer items-center">
						Affiliation: {renderBadges(affiliation)}
					</h3>
					<h3 className="flex gap-1 sm:gap-2 cursor-pointer items-center max-sm:w-fit">
						Class: {renderBadges(classData)}
					</h3>
					<h3 className="flex gap-1 sm:gap-2 cursor-pointer items-center max-sm:w-fit">
						Tags: {renderBadges(tags.slice(0, 3))}
					</h3>
					<h3 className="text-sm sm:text-base items-center">
						Availability:{" "}
						{headhunting === "Yes" && recruitable === "No" ? (
							<Badge className="bg-yellow-500 rounded-md border-none px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm uppercase font-normal cursor-pointer">
								Limited Headhunting
							</Badge>
						) : (
							<Badge className="bg-cyan-400 rounded-md border-none px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm uppercase font-normal cursor-pointer">
								Recruitment
							</Badge>
						)}
					</h3>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfoCard;
