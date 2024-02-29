"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";

const Search = () => {
	const [query, setQuery] = useState("");
	const searchParams = useSearchParams();
	const router = useRouter();

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (query) {
				const newUrl = formUrlQuery({
					searchParams: searchParams.toString(),
					key: "query",
					value: query,
				});

				router.push(newUrl, { scroll: false });
			} else {
				const newUrl = removeKeysFromQuery({
					searchParams: searchParams.toString(),
					keysToRemove: ["query"],
				});
				router.push(newUrl, { scroll: false });
			}
		}, 300);

		return () => clearTimeout(delayDebounceFn);
	}, [router, searchParams, query]);
	return (
		<div className="flex w-full rounded-md border-2 border-purple-200/20 bg-teal-600/20 px-4 shadow-sm shadow-purple-200/15 md:max-w-96">
			<Image src={"/assets/search.svg"} alt="search" width={24} height={24} />
			<Input
				className="border-0 bg-transparent text-black font-semibold w-full placeholder:text-black h-[50px] p-3"
				placeholder="Search..."
				onChange={(e) => {}}
			/>
		</div>
	);
};

export default Search;
