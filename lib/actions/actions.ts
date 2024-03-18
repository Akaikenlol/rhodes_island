"use server";

import { GetSearchParams } from "@/types";

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

export const fetchOperatorImage = async (name: string) => {
	const response = await fetch(
		`https://api.rhodesapi.com/api/operator/${name}/e2-image`,
		{ cache: "no-store" }
	);

	if (!response) {
		throw new Error("Failed to fetch operator image");
	}

	const data = await response.json();
	return data;
};

export const fetchOperatorBaseOnDate = async () => {
	const response = await fetch(`https://api.rhodesapi.com/api/operator`, {
		cache: "no-store",
	});

	const data = await response.json();

	const sixStarOperators = data
		.filter((operator: any) => operator.rarity === 6)
		.sort(
			(a: any, b: any) =>
				new Date(b.release_dates).getTime() -
				new Date(a.release_dates).getTime()
		);

	return sixStarOperators;
};

export const fetchOperatorBySearch = async (params: GetSearchParams) => {
	const response = await fetch(`https://api.rhodesapi.com/api/operator`, {
		cache: "no-store",
	});

	const { searchQuery } = params;

	const data = await response.json();

	const sixStarOperators = data.filter(
		(operator: any) => operator.rarity === 6
	);

	const filteredOperators = sixStarOperators.filter((operator: any) =>
		operator.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return filteredOperators;
};

export const fetchOperatorByFilter = async (
	params: GetSearchParams,
	filterType: string
) => {
	const response = await fetch(`https://api.rhodesapi.com/api/operator`, {
		cache: "no-store",
	});

	const { searchQuery } = params;

	const data = await response.json();

	let sixStarOperators = data.filter((operator: any) => operator.rarity === 6);

	switch (filterType) {
		case "all":
			break;
		case "newest":
			sixStarOperators.sort((a: any, b: any) => {
				const aDate =
					a.release_dates.global !== "N/A"
						? a.release_dates.global
						: a.release_dates.cn;

				const bDate =
					b.release_dates.global !== "N/A"
						? b.release_dates.global
						: b.release_dates.cn;

				return new Date(bDate).getTime() - new Date(aDate).getTime();
			});
			break;
		case "oldest":
			sixStarOperators.sort((a: any, b: any) => {
				const aDate =
					a.release_dates.global !== "N/A"
						? a.release_dates.global
						: a.release_dates.cn;
				const bDate =
					b.release_dates.global !== "N/A"
						? b.release_dates.global
						: b.release_dates.cn;

				return new Date(aDate).getTime() - new Date(bDate).getTime();
			});
			break;
		// case "limited":
		// 	sixStarOperators.filter(
		// 		(operator: any) =>
		// 			operator.headhunting === "Yes" && operator.recruitable === "No"
		// 	);

		// 	break;
		// case "recruitable":
		// 	sixStarOperators.filter(
		// 		(operator: any) => operator.recruitable === "Yes"
		// 	);
		// 	break;
		default:
			break;
	}

	return sixStarOperators;
};
