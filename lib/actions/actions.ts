"use server";

let Max_limit = 12;

export const fetchOperator = async (rarity: number) => {
	const response = await fetch(
		`https://rhodesapi.up.railway.app/api/operator?rarity=${rarity}`
	);

	const data = await response.json();

	// const sixStarOperators = data.filter(
	// 	(operator: any) => operator.rarity === 6
	// );

	// return sixStarOperators;
	return data;
};
