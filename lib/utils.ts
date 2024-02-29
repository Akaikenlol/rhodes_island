import { FormUrlQueryParams, RemoveUrlQueryParams } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "qs";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// FORM URL QUERY
export const formUrlQuery = ({
	searchParams,
	key,
	value,
}: FormUrlQueryParams) => {
	const params = { ...qs.parse(searchParams.toString()), key: value };

	return `${window.location.pathname}?${
		(qs.stringify(params), { skipNulls: true, addQueryPrefix: true })
	}`;
};

export function removeKeysFromQuery({
	searchParams,
	keysToRemove,
}: RemoveUrlQueryParams) {
	const currentUrl = qs.parse(searchParams);

	keysToRemove.forEach((key) => {
		delete currentUrl[key];
	});

	// Remove null or undefined values
	Object.keys(currentUrl).forEach(
		(key) => currentUrl[key] == null && delete currentUrl[key]
	);

	return `${window.location.pathname}?${qs.stringify(currentUrl)}`;
}
