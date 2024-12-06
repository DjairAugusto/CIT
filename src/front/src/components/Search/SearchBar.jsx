import React from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import { Search, Filter, Plus } from "lucide-react";
import Roles from "../../utils/roles";

export default function SearchBar({ value, onChange, useRole = true }) {
	return (
		<div className="flex gap-2 w-full">
			<SearchInput value={value} onChange={onChange} />
			<SearchButton icon={<Search />} />
			{useRole && Roles.isAdmin() && <SearchButton icon={<Plus />} />}
			<SearchButton icon={<Filter />} />
		</div>
	);
}
