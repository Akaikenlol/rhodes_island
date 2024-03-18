import Header from "@/components/shared/Header";
import { fetchOperatorBaseOnDate } from "@/lib/actions/action";
import { SearchParamsProps } from "@/types";

export default async function Home({ searchParams }: SearchParamsProps) {
	const filterType = searchParams ? searchParams["filter"] : null;
	const data = await fetchOperatorBaseOnDate(
		{
			searchQuery: searchParams.q || "",
			filterType: searchParams.filter,
		},
		searchParams.filter || ""
	);
	return (
		<section className="sm:p-10 py-10 px-8 flex flex-col gap-10 ">
			<Header searchParams={searchParams} />
			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{data}
			</section>
		</section>
	);
}
