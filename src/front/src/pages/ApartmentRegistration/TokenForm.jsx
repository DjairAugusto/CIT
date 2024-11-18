import React, { useEffect, useState } from "react";
import { Forms } from "../../components/Forms";
import { nonAuthorizedInstance as axios } from "../../utils/requisition/citRequisition";

export default function TokenForm({ setData, token, updateFieldHandler }) {
	const [error, setError] = useState(null);

	useEffect(() => {
		function fetchApartment() {
			if (!token.match("^(?:[A-Za-z0-9-_]+(?:\\.|$)){3}"))
				return setError("Invalid token");

			axios
				.get(`/apartment/by-token/${token}`)
				.then((res) => {
					if (res.data === undefined)
						throw new Error(
							"Failed to fetch Apartment with that token"
						);

					if (res.data) {
						updateFieldHandler("apartment", res.data);
						setError("");
					}
				})
				.catch((err) => {
					updateFieldHandler("apartment", null);
					if (err.status === 404) setError("Invalid Token");
					else setError(err.message);
				});
		}

		fetchApartment();
	}, [setData, token, updateFieldHandler, error]);

	return (
		<Forms.PageStep
			title="Cadastro de Apartamento"
			subtitle="Insira o Token"
		>
			<Forms.InputText
				placeholder="TOKEN"
				onChange={(e) => updateFieldHandler("token", e.target.value)}
				value={token}
				error={error}
				required
			/>
		</Forms.PageStep>
	);
}
