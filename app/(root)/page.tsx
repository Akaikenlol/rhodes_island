import OperatorCard, { OperatorCardProps } from "@/components/Card";
import Link from "next/link";
import { fetchOperator } from "@/lib/actions/actions";
import LoadMore from "@/components/LoadMore";

export default async function Home() {
	const data = await fetchOperator(6, 2);
	return (
		<main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
			<h2 className="text-3xl text-white font-bold">
				Explore {data.length} Operators
			</h2>

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
