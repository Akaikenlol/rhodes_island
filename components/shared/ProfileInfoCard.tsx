import React from "react";
import { Badge } from "@/components/ui/badge";

const ProfileInfoCard = ({ data }: any) => {
	return (
		<div className="bg-teal-500/20 rounded-md">
			<h2 className="text-black text-2xl py-2">{data.name} Profile</h2>
			<div className="grid grid-flow-col grid-rows-2 gap-7 text-left rounded-md text-black px-8 py-12">
				<div className="flex flex-col gap-2">
					<h3>Artist: {data.artist}</h3>
					<h3>CV: {data.va}</h3>
					<h3>Gender: {data.lore.gender}</h3>
					<h3>Birthday: {data.lore.birthday}</h3>
					<h3>Place of Birth: {data.lore.place_of_birth}</h3>
					<h3>Race: {data.lore.race}</h3>
					<h3>Height: {data.lore.height}</h3>
					<h3>Combat Experience: {data.lore.combat_experience}</h3>
				</div>
				<div className="flex flex-col gap-3">
					<h3>Affiliation: {data.affiliation}</h3>
					<h3>Infection Status: {data.lore.infection_status}</h3>
					<h3 className="flex gap-2">
						Class:{" "}
						{data.class.map((cl: string, index: any) => (
							<Badge
								className="bg-teal-400/20 rounded-md border-none px-4 py-2 uppercase font-normal"
								key={index}
							>
								{cl}
							</Badge>
						))}
					</h3>
					<h3 className="flex gap-2">
						Tags:{" "}
						{data.tags.map((tag: string, index: any) => (
							<Badge
								className="bg-teal-400/20 rounded-md border-none px-4 py-2 uppercase font-normal"
								key={index}
							>
								{tag}
							</Badge>
						))}
					</h3>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfoCard;
