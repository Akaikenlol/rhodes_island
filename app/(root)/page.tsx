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
		<main className="sm:p-10 py-10 px-8 flex flex-col gap-10 ">
			<h2 className="text-3xl text-white font-bold max-sm:text-center">
				Explore <span className="text-teal-500">{data.length}</span> Operators
			</h2>
			<div className="grid lg:grid-cols-2 sm:grid-rows-1 gap-5 ">
				<Search
					route="/"
					iconPosition="left"
					imgSrc="/assets/search.svg"
					placeholder="Search Operator..."
					otherClasses="flex-1"
				/>
				<Filter
					filter={Filters}
					otherClasses="min-h-[56px] sm:min-w-[170px] flex-1"
					// containerClasses="hidden max-md:flex"
				/>
			</div>

			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{data}
			</section>
			{/* <LoadMore /> */}
		</main>
	);
}
