export default function FormsSelect({ className, options, required = false, ...rest }) {
	return (
		<div className="flex items-center px-4 py-2 border-sm border-medium bg-zinc-50 border-b-2 border-transparent rounded-md">
			{required && <span className="text-red-500">*</span>}
			<select required={required} className="relative w-full bg-transparent h-12 outline-none text-dark placeholder:text-dark text-zinc-700 placeholder:text-zinc-700 peer">
				{
					options.map(option => (
						<option
							key={option.value}
							value={option.value}
						>
							{option.text}
						</option>
					))
				}
			</select>
		</div>
	);
}