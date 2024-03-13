"use client";

import { FilterProps } from "@/types";
import React, { useState } from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Filters } from "@/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/lib/utils";

const Filter = ({ filter, otherClasses }: FilterProps) => {
	return (
		<div className={"relative grow"}>
			<Select>
				<SelectTrigger
					className={`${otherClasses} border-purple-200/20 bg-teal-600/20 px-5 py-2.5`}
				>
					<div className="line-clamp-1 flex-1 text-left text-xs">
						<SelectValue placeholder="Select a Filter" />
					</div>
				</SelectTrigger>
				<SelectContent className="border-purple-200/20 bg-teal-600/50">
					<SelectGroup>
						{Filters.map((item, index) => (
							<SelectItem
								key={index}
								value={item.value}
								onClickCapture={() => {}}
							>
								{item.name}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};

export default Filter;
