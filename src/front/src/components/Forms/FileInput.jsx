import React from "react";

const FileInput = ({ files = [], onChange, multiple = false }) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer transition-colors duration-300 hover:bg-blue-500 hover:text-white">
				{/* TODO trocar o icone svg por um component do lucide-react */}
				<svg
					className="w-8 h-8"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<path d="M16.88 9h-4V2H6.88v2H4.88V2A1.87 1.87 0 003.01.13 1.87 1.87 0 001.14 2v16a1.87 1.87 0 001.87 1.87h16a1.87 1.87 0 001.87-1.87V10h-4V9zM10.88 10h-2V4h2v6zm4 0h-2V4h2v6z" />
				</svg>
				<span className="mt-2 text-base leading-normal">
					{multiple
						? "Selecione os Arquivos"
						: "Selecione um Arquivo"}
				</span>
				<input
					type="file"
					className="hidden"
					multiple={multiple}
					onChange={onChange}
				/>
			</label>
			{files.length !== 0 && (
				<p className="mt-4">
					Arquivo selecionado{multiple && "s"}:{" "}
					{Array.from(files)
						.map((file) => file.name)
						.join(", ")}
				</p>
			)}
		</div>
	);
};

export default FileInput;
