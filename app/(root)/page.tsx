import Filter from "@/components/shared/Filter";
import LoadMore from "@/components/shared/LoadMore";
import Search from "@/components/shared/Search";
import { Filters } from "@/constants";
// import { fetchSixStarOperator } from "@/lib/actions/action";
import { fetchOperatorBaseOnDate } from "@/lib/actions/action";

export default async function Home() {
	// const data = await fetchSixStarOperator();
	const data = await fetchOperatorBaseOnDate();
	return (
		<main className="sm:p-12 py-14 px-8 flex flex-col gap-10">
			<div className="sm:flex-row flex-col flex flex-between gap-20 ">
				<h2 className="text-3xl text-white font-bold">
					Explore {data.length} Operators
				</h2>
				<Search
					route="/"
					iconPosition="left"
					imgSrc="/assets/search.svg"
					placeholder="Search Operator..."
					otherClasses="flex-1"
				/>
				<Filter filter={Filters} />
			</div>

			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{data}
			</section>
			<LoadMore />
		</main>
	);
}
