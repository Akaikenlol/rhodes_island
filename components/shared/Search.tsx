"use client";

import { SearchProps } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { Button } from "../ui/button";
import { fetchOperatorBaseOnDate } from "@/lib/actions/action";
import { fetchOperatorBySearch } from "@/lib/actions/actions";
import OperatorCard from "./Card";
import ProfileInfoCard from "./ProfileInfoCard";
import ResultCard from "./ResultCard";
// import { fetchOperatorBySearch } from "@/lib/actions/action";

const Search = ({
	route,
	iconPosition,
	imgSrc,
	placeholder,
	otherClasses,
	searchQuery,
}: SearchProps) => {
	const router = useRouter();

	const pathname = usePathname();
	const searchParams = useSearchParams();

	const query = searchParams.get("q");
	const [search, setSearch] = useState(query || "");
	const [operator, setOperator] = useState([]);

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (search) {
				const newUrl = formUrlQuery({
					params: searchParams.toString(),
					key: "q",
					value: search,
				});
				router.push(newUrl, { scroll: false });

				// fetch the data from api when search is changed
				const fetchData = async () => {
					const data = await fetchOperatorBySearch({ searchQuery: search });
					setOperator(data);
					console.log(data);
				};
				fetchData();
			} else {
				if (pathname === route) {
					const newUrl = removeKeysFromQuery({
						params: searchParams.toString(),
						keysToRemove: ["q"],
					});
					router.push(newUrl, { scroll: false });
				}
				// Clear the operator when search is empty
				setOperator([]);
			}
		}, 300);

		return () => clearTimeout(delayDebounceFn);
	}, [search, searchParams]);

	return (
		<>
			<div
				className={`border-purple-200/20 bg-teal-600/20 flex min-h-[56px] grow items-center gap-4 rounded-md px-4 ${otherClasses}`}
			>
				<Button>
					<Image
						src={imgSrc}
						alt="search icon"
						width={24}
						height={24}
						className="cursor-pointer"
					/>
				</Button>
				<Input
					type="text"
					placeholder={placeholder}
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="border-0 bg-transparent text-black w-full placeholder:text-black p-3"
				/>
			</div>
			<ResultCard operator={operator} />
		</>
	);
};

export default Search;
