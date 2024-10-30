import React from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import { Search, Filter, Plus } from "lucide-react";

export default function SearchBar({role}) {
	return (
		<div className="flex gap-2 w-full">
			<SearchInput />
			<SearchButton icon={<Search />} />
			{role === "ADMIN" && <SearchButton icon={<Plus />} />}
			<SearchButton icon={<Filter />} />
		</div>
	);
}
