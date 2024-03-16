import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
	return (
		<section className="sm:p-10 py-10 px-8 flex flex-col gap-10 ">
			<h2 className="text-3xl text-white font-bold max-sm:text-center">
				Searched Operators
			</h2>
			<div className="flex flex-col gap-10">
				<Skeleton className="border-purple-200/20 bg-teal-600/20 flex min-h-[56px] grow items-center gap-4 rounded-md px-4 flex-1" />
				<Skeleton className="min-h-[56px] sm:min-w-[170px] flex-1 border-purple-200/20 bg-teal-600/20 px-5 py-2.5 rounded-md" />
			</div>
			<div className="flex flex-col gap-10">
				<h2 className="text-3xl text-white font-bold max-sm:text-center">
					Explore Operators
				</h2>
				<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
					{[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
						<Skeleton
							className="relative w-full max-sm:h-[50vh] h-[50vh] max-w-sm rounded bg-gradient-to-t from-cyan-100/20  to-yellow-100/20"
							key={index}
						/>
					))}
				</section>
			</div>
			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
					<Skeleton
						className="relative w-full max-sm:h-[50vh] h-[50vh] max-w-sm rounded bg-gradient-to-t from-cyan-100/20  to-yellow-100/20"
						key={index}
					/>
				))}
			</section>
		</section>
	);
};

export default Loading;
