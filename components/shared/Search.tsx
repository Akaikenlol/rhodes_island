"use client";

import { SearchProps } from "@/types";
import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";

const Search = ({
	route,
	iconPosition,
	imgSrc,
	placeholder,
	otherClasses,
}: SearchProps) => {
	return (
		<div
			className={`border-purple-200/20 bg-teal-600/20 flex min-h-[56px] grow items-center gap-4 rounded-md px-4 ${otherClasses}`}
		>
			<Image
				src={imgSrc}
				alt="search icon"
				width={24}
				height={24}
				className="cursor-pointer"
			/>
			<Input
				type="text"
				placeholder={placeholder}
				value={""}
				onChange={() => {}}
				className="border-0 bg-transparent text-black font-semibold w-full placeholder:text-black p-3"
			/>
		</div>
	);
};

export default Search;
