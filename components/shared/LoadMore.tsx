"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import OperatorCard from "./Card";
import Link from "next/link";
import { OperatorCardProps } from "@/types";

const LoadMore = () => {
	const { ref, inView } = useInView();
	const [data, setData] = useState<OperatorCardProps[]>([]);

	// useEffect(() => {
	// 	if (inView) {
	// 		fetchSixStarOperator().then((res) => {
	// 			setData(res);
	// 		});
	// 	}
	// }, [inView]);

	return (
		<>
			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{data.map((item: OperatorCardProps, index: number) => (
					<Link href={`/profile/${item.name}`} key={index}>
						<OperatorCard key={item.name} operator={item} index={index} />
					</Link>
				))}
			</section>
			<section className="flex justify-center items-center w-full">
				<div ref={ref}>
					<Image
						src={"/assets/spinner.svg"}
						alt="spinner"
						width={56}
						height={56}
						className="object-contain"
					/>
				</div>
			</section>
		</>
	);
};

export default LoadMore;
