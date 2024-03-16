import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import { SearchParamsProps } from "@/types";
import { fetchOperatorBaseOnDate } from "@/lib/actions/action";
import { Filters } from "@/constants";

const Header = async ({ searchParams }: SearchParamsProps) => {
	const data = await fetchOperatorBaseOnDate({
		searchQuery: searchParams.q || "",
	});
	return (
		<section className="flex flex-col gap-10">
			<Search
				route="/"
				iconPosition="left"
				imgSrc="/assets/search.svg"
				placeholder="Search Operator..."
				otherClasses="flex-1"
				results={data}
			/>
			<Filter
				filter={Filters}
				otherClasses="min-h-[56px] sm:min-w-[170px] flex-1"
			/>
			<h2 className="text-3xl text-white font-bold max-sm:text-center">
				Explore <span className="text-teal-500">{data.length}</span> Operators
			</h2>
		</section>
	);
};

export default Header;
