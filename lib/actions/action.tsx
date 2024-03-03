"use server";

import OperatorCard from "@/components/shared/Card";
import { OperatorCardProps } from "@/types";
import Link from "next/link";

export const fetchSixStarOperator = async () => {
	const response = await fetch(`https://api.rhodesapi.com/api/operator`, {
		cache: "no-store",
	});

	const data = await response.json();

	const sixStarOperators = data.filter(
		(operator: any) => operator.rarity === 6
	);

	return sixStarOperators.map((item: OperatorCardProps, index: number) => (
		<Link href={`/profile/${item.name}`}>
			<OperatorCard key={item.name} operator={item} index={index} />
		</Link>
	));
};
