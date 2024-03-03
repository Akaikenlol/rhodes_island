"use server";

// export const fetchOperator = async (rarity: number) => {
// 	const response = await fetch(
// 		`https://api.rhodesapi.com/api/operator?rarity=${rarity}`
// 	);
// 	const data = await response.json();
// 	return data;
// };

export const fetchOperator = async () => {
	const response = await fetch(`https://api.rhodesapi.com/api/operator`, {
		cache: "no-store",
	});
	const data = await response.json();
	return data;
};

export const fetchSixStarOperator = async () => {
	const response = await fetch(`https://api.rhodesapi.com/api/operator`, {
		cache: "no-store",
	});

	const data = await response.json();

	const sixStarOperators = data.filter(
		(operator: any) => operator.rarity === 6
	);

	return sixStarOperators;
};

export const fetchOperatorByName = async (name: string) => {
	const response = await fetch(
		`https://rhodesapi.up.railway.app/api/operator/${name}`,
		{ cache: "no-store" }
	);

	if (!response) {
		throw new Error("Failed to fetch operator");
	}

	const data = await response.json();
	// console.log(data);
	return data;
};
