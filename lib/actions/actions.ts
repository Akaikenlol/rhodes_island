"use server";

export const fetchOperator = async (rarity: number) => {
	const response = await fetch(
		`https://rhodesapi.up.railway.app/api/operator?rarity=${rarity}`
	);
	const data = await response.json();
	return data;
};

export const fetchSixStarOperator = async () => {
	const response = await fetch(`https://rhodesapi.up.railway.app/api/operator`);

	const data = await response.json();

	const sixStarOperators = data.filter(
		(operator: any) => operator.rarity === 6
	);

	return sixStarOperators;
};
