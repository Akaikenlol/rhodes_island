"use server";

import OperatorCard from "@/components/shared/Card";
import { OperatorCardProps, SearchParamsProps } from "@/types";
import Link from "next/link";

export const fetchOperatorBaseOnDate = async () => {
	const response = await fetch(`https://api.rhodesapi.com/api/operator`, {
		cache: "no-store",
	});

	const data = await response.json();

	const sixStarOperators = data
		.filter((operator: any) => operator.rarity === 6)
		.sort((a: any, b: any) => {
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

	return sixStarOperators.map((item: OperatorCardProps, index: number) => (
		<Link href={`/profile/${item.name}`} key={item.name}>
			<OperatorCard operator={item} index={index} />
		</Link>
	));
};
