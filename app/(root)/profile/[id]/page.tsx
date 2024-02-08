import { URLProps } from "@/types";
import React from "react";

const Page = ({ params }: URLProps) => {
	// const operatorInfo =
	return <div>{params.name}</div>;
};

export default Page;
