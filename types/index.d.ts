export interface URLProps {
	params: { name: string };
	searchParams: { [key: string]: string | undefined };
}

export interface Operator {
	params: { name: string };
	rarity: number;
	profession: string;
	avatar: string;
}

export interface OperatorCardProps {
	name: string;
	art: {
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

export interface Prop {
	operator: OperatorCardProps;
	index: number;
}

export interface ProfilePageProps {
	params: {
		id: string;
	};
}
