import React from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import { Search, Filter, Plus } from "lucide-react";
import Roles from "../../utils/roles";

export default function SearchBar({
	value,
	onChange,
	callbacks = {},
	useRole = true,
}) {
	return (
		<div className="flex gap-2 w-full min-h-12">
			<SearchInput value={value} onChange={onChange} />
			{callbacks.search && (
				<SearchButton onClick={callbacks.search} icon={<Search />} />
			)}
			{useRole && Roles.isAdmin() && callbacks.create && (
				<SearchButton onClick={callbacks.create} icon={<Plus />} />
			)}
			{callbacks.filter && (
				<SearchButton onClick={callbacks.filter} icon={<Filter />} />
			)}
		</div>
	);
}
