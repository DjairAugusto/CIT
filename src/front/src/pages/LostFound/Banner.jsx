import React, { useState } from "react";

export default function LostFoundBanner() {
	const [imageSrc, setImageSrc] = useState("");
	const showImage = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				setImageSrc(e.target.result);
			};
			reader.readAsDataURL(file);
		}
	};
	return (
		<div className="flex flex-col text-center justify-center items-center">
			<div className="relative w-full h-96 overflow-hidden">
				{imageSrc && (
					<img
						src={imageSrc}
						className="object-cover w-full h-full flex text-center"
						alt="Uploaded"
					/>
				)}
				<label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white cursor-pointer z-10">
					<input
						className="hidden"
						type="file"
						onChange={showImage}
						name="input-file"
					/>
					Carregar Imagem
				</label>
			</div>
		</div>
	);
}