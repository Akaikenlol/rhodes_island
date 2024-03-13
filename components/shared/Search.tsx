"use client";

import { SearchProps } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { Button } from "../ui/button";

const Search = ({
	route,
	iconPosition,
	imgSrc,
	placeholder,
	otherClasses,
}: SearchProps) => {
	const router = useRouter();

	const pathname = usePathname();
	const searchParams = useSearchParams();

	const query = searchParams.get("q");
	const [search, setSearch] = useState(query || "");

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (search) {
				const newUrl = formUrlQuery({
					params: searchParams.toString(),
					key: "q",
					value: search,
				});
				router.push(newUrl, { scroll: false });
			} else {
				if (pathname === route) {
					const newUrl = removeKeysFromQuery({
						params: searchParams.toString(),
						keysToRemove: ["q"],
					});
					router.push(newUrl, { scroll: false });
				}
			}
		}, 300);

		return () => clearTimeout(delayDebounceFn);
	}, [search, searchParams]);

	return (
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
	);
};

export default Search;
