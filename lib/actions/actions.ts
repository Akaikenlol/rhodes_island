"use server";

const MAX_LIMIT = 12;

export const fetchOperator = async (rarity: number, page: number) => {
	const response = await fetch(
		`https://rhodesapi.up.railway.app/api/operator?rarity=${rarity}&page=${page}`
	);

	const data = await response.json();

	const sixStarOperators = data.filter(
		(operator: any) => operator.rarity === 6
	);

	return sixStarOperators;
};
