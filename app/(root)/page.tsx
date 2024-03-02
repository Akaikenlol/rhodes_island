import OperatorCard from "@/components/shared/Card";
import Link from "next/link";
import { fetchSixStarOperator } from "@/lib/actions/actions";
import LoadMore from "@/components/shared/LoadMore";
import Search from "@/components/shared/Search";
import { OperatorCardProps } from "@/types";

export default async function Home() {
	const data = await fetchSixStarOperator();
	return (
		<main className="sm:p-12 py-14 px-8 flex flex-col gap-10">
			<div className="sm:flex-row flex-col flex flex-between gap-20 ">
				<h2 className="text-3xl text-white font-bold">
					Explore {data.length} Operators
				</h2>
				<Search />
			</div>

			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{data.map((item: OperatorCardProps, index: number) => (
					<Link href={`/profile/${item.name}`}>
						<OperatorCard key={item.name} operator={item} index={index} />
					</Link>
				))}
			</section>
			<LoadMore />
		</main>
	);
}
