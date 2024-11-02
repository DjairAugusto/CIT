import React, { useState } from "react";

export default function Description({ text: initialText }) {
	const [text, setText] = useState(initialText);
	const [length, setLength] = useState(initialText.length);
	const [value, setValue] = useState("0");

	const inputValue = (e) => {
		const newValue = e.target.value;
		setValue(newValue);
	};

	const inputChange = (e) => {
		const newText = e.target.value;
		setText(newText);
		setLength(newText.length);
	};

	return (
		<section className="font-sans mx-16 mt-4">
			<h1 className="text-4xl mb-8">Detalhes</h1>
			<div className="flex items-start">
				<textarea
					cols="200"
					rows="6"
					className="outline-none border-none"
					value={text}
					onChange={inputChange}
					autoFocus
				/>
			</div>
			<div className="mt-20 ">
				<div className="w-2/4 inline-block">
					<h3 className="text-2xl mb-10">Horário de Funcionamento</h3>
					<p className="inline-block">
						Segunda à sexta: -
						<input
							type="time"
							className="remove-clock-icon mx-2"
						/>{" "}
						às
						<input type="time" className="remove-clock-icon mx-2" />
					</p>
					<p>
						Sábado e Domingo: -
						<input
							type="time"
							className="remove-clock-icon mx-2"
						/>{" "}
						às
						<input type="time" className="remove-clock-icon mx-2" />
					</p>
					<p></p>
				</div>
				<div className="w-2/4 inline-block">
					<h3 className="text-2xl mb-10">Taxas</h3>
					<p>
						Segunda à Sexta - R$
						<input
							type="number"
							min="0"
							className="w-20 ml-2 border-none"
							value={value}
							onChange={inputValue}
						/>
					</p>
					<p>
						Sábado e Domingo - R$
						<input
							type="number"
							min="0"
							className="w-20 ml-2 border-none"
							value={value}
							onChange={inputValue}
						/>
					</p>
				</div>
			</div>
		</section>
	);
}
