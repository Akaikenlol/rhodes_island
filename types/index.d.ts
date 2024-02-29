export interface URLProps {
	params: { name: string };
	searchParams: { [key: string]: string | undefined };
}

declare type FormUrlQueryParams = {
	searchParams: string;
	key: string;
	value: string;
};

declare type RemoveUrlQueryParams = {
	searchParams: string;
	keysToRemove: string[];
};
