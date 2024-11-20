export default function FormsSelect({
	className,
	defaultOption,
	options,
	required = false,
	value = "",
	...rest
}) {
	return (
		<div className="flex items-center px-4 py-2 border-sm border-medium bg-zinc-50 border-b-2 border-transparent rounded-md">
			{required && <span className="text-red-500">*</span>}
			<select
				required={required}
				className="relative w-full bg-transparent h-12 outline-none text-dark placeholder:text-dark text-zinc-700 placeholder:text-zinc-700 peer"
				value={value ? value : ""}
				{...rest}
			>
				{defaultOption && (
					<option value="" disabled hidden>
						{defaultOption}
					</option>
				)}
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.text}
					</option>
				))}
			</select>
		</div>
	);
}
