"use server";

import OperatorCard from "@/components/shared/Card";
import { GetSearchParams, OperatorCardProps } from "@/types";
import Link from "next/link";

export const fetchOperatorBaseOnDate = async (
	params: GetSearchParams,
	filterType: string
) => {
	const response = await fetch(`https://api.rhodesapi.com/api/operator`, {
		cache: "no-store",
	});

	const { searchQuery } = params;

	const data = await response.json();

	let sixStarOperators = data.filter((operator: any) => operator.rarity === 6);

	let sortOptions = {};

	switch (filterType) {
		case "all":
			sixStarOperators;
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
		default:
			break;
	}

	return sixStarOperators.map((item: OperatorCardProps, index: number) => (
		<Link href={`/profile/${item.name}`} key={item.name}>
			<OperatorCard operator={item} index={index} />
		</Link>
	));
};
