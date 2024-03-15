import React from "react";
import OperatorCard from "./Card";

const ResultCard = ({ operator }: { operator: any[] }) => {
	return (
		<div className="flex-center">
			{operator && operator.length > 0 ? (
				operator.map((op: any, index: any) => (
					<OperatorCard operator={op} index={index} key={index} />
				))
			) : (
				<div>Result Not Found</div>
			)}
		</div>
	);
};

export default ResultCard;
