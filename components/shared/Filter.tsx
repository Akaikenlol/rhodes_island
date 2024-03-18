"use client";

import { FilterProps } from "@/types";
import React, { useState } from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Filters } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/lib/utils";
import ResultCard from "./ResultCard";

const Filter = ({ filter, otherClasses }: FilterProps) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const [active, setActive] = useState("");
	const [operator, setOperator] = useState([]);

	const paramFilter = searchParams.get("filter");

	const handleUpdateParams = async (value: string) => {
		const newUrl = formUrlQuery({
			params: searchParams.toString(),
			key: "filter",
			value,
		});

		router.push(newUrl, { scroll: false });
	};

	return (
		<div className={"relative grow"}>
			<Select
				onValueChange={handleUpdateParams}
				defaultValue={paramFilter || undefined}
			>
				<SelectTrigger
					className={`${otherClasses} border-purple-200/20 bg-teal-600/20 px-5 py-2.5`}
				>
					<div className="line-clamp-1 flex-1 text-left text-xs">
						<SelectValue placeholder="Select a Filter" />
					</div>
				</SelectTrigger>
				<SelectContent className="border-purple-200/20 bg-teal-600">
					<SelectGroup className="flex-grow">
						{Filters.map((item, index) => (
							<SelectItem
								key={index}
								value={item.value}
								className="hover:bg-teal-800/20 "
							>
								{item.name}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
			<ResultCard operator={operator} />
		</div>
	);
};

export default Filter;
