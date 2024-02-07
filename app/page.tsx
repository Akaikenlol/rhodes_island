import Image from "next/image";
import { data } from "./_data";
import OperatorCard, { OperatorCardProps } from "@/components/Card";

export default function Home() {
	return (
		<main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
			<h2 className="text-3xl text-white font-bold">Explore Operators</h2>

			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{data.map((item: OperatorCardProps, index) => (
					<OperatorCard key={item.name} operator={item} index={index} />
				))}
			</section>
		</main>
	);
}
