import React from "react";
import DropMenu from "../../components/DropMenu";
import { Forms } from "../../components/Forms";

export default function ProfileForm({ apartmentNumber, objectArray }) {
	const {
		array: profiles,
		addOne: addProfile,
		removeOne: removeProfile,
		modifyOne: modifyProfile,
	} = objectArray;

	return (
		<Forms.PageStep
			title="Cadastro de Perfis"
			subtitle={`Apartamento ${apartmentNumber}`}
		>
			<button
				className="text-primary-1000 block mb-2"
				onClick={addProfile}
			>
				+ Adicionar Perfil
			</button>
			<div className="flex flex-col gap-6 overflow-y-auto max-h-[600px]">
				{profiles.map((profile, index) => (
					<DropMenu
						key={profile.id}
						text={
							index === 0
								? "Perfil Principal"
								: `Pefil Secundário ${index}`
						}
						removeCallback={
							index === 0 ? null : () => removeProfile(profile.id)
						}
					>
						<div className="flex gap-4 flex-col">
							<Forms.InputText
								placeholder="EMAIL"
								onChange={(e) =>
									modifyProfile(profile.id, [
										"email",
										e.target.value,
									])
								}
								value={profile.email}
								required
							/>
							<Forms.InputText
								placeholder="SENHA"
								type="password"
								onChange={(e) =>
									modifyProfile(profile.id, [
										"password",
										e.target.value,
									])
								}
								value={profile.password}
								required
							/>
						</div>
					</DropMenu>
				))}
			</div>
		</Forms.PageStep>
	);
}
