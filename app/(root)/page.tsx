import Filter from "@/components/shared/Filter";
import Header from "@/components/shared/Header";
import Search from "@/components/shared/Search";
import { Filters } from "@/constants";
import { fetchOperatorBaseOnDate } from "@/lib/actions/action";
import { SearchParamsProps } from "@/types";

export default async function Home({ searchParams }: SearchParamsProps) {
	const data = await fetchOperatorBaseOnDate({
		searchQuery: searchParams.q || "",
	});
	return (
		<section className="sm:p-10 py-10 px-8 flex flex-col gap-10 ">
			<Header searchParams={searchParams} />
			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{data}
			</section>
		</section>
	);
}
