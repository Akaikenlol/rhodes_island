import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
	return (
		<section className="text-center flex px-4 sm:px-16 py-8 flex-col bg-gradient-to-t from-amber-50 to-cyan-50 gap-3">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-20">
				<Skeleton
					className="bg-gradient-to-t
						from-cyan-100
						to-yellow-100
						rounded-md
						py-2
						h-[80vh]"
				/>
				<Skeleton
					className="bg-teal-400/20 
						rounded-md
						py-2
						h-[80vh]"
				/>
			</div>
		</section>
	);
};

export default Loading;
