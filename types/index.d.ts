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
	release_dates: {
		global: string;
		cn: string;
	};
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

export interface SearchProps {
	route: string;
	iconPosition?: string;
	imgSrc: string;
	placeholder: string;
	otherClasses?: string;
}

export interface FilterProps {
	filter: {
		name: string;
		value: string;
	}[];
	otherClasses?: string;
	// containerClasses?: string;
}

export interface UrlQueryParams {
	params: string;
	key: string;
	value: string | null;
}

export interface RemoveUrlQueryParams {
	params: string;
	keysToRemove: string[];
}
