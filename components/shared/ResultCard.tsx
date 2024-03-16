import React from "react";
import OperatorCard from "./Card";
import Link from "next/link";

const ResultCard = ({ operator }: { operator: any[] }) => {
	return (
		<>
			<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{operator &&
					operator.length > 0 &&
					operator.map((op: any, index: any) => (
						<Link href={`/profile/${op.name}`} key={op.name}>
							<OperatorCard operator={op} index={index} />
						</Link>
					))}
			</div>
		</>
	);
};

export default ResultCard;
