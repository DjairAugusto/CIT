import React from "react";
import DropMenu from "../../components/DropMenu";
import { Forms } from "../../components/Forms";

export default function ProfileForm({
	apartmentNumber,
	objectArray,
	inhabitantsObjectArray,
}) {
	const {
		array: profiles,
		addOne: addProfile,
		removeOne: removeProfile,
		modifyOne: modifyProfile,
	} = objectArray;

	const { array: inhabitants, modifyOne: modifyInhabitant } =
		inhabitantsObjectArray;

	function getOnChangeSelect(profile) {
		return (e) => {
			const current = inhabitants.find(
				(inhabitant) => inhabitant.profile === profile
			);
			if (current) modifyInhabitant(current.id, ["profile", undefined]);
			modifyInhabitant(e.target.value, ["profile", profile]);
		};
	}

	function getSelectOptions(profile) {
		return inhabitants
			.filter(
				(inhabitant) =>
					inhabitant.profile === "" ||
					inhabitant.profile === undefined ||
					inhabitant.profile === profile
			)
			.map((inhabitant) => {
				return {
					value: inhabitant.id,
					text: inhabitant.name,
				};
			});
	}

	function getRemoveCallback(profile) {
		return () => {
			const inhabitant = inhabitants.find(
				(inhabitant) => inhabitant.profile === profile
			);
			if (inhabitant)
				modifyInhabitant(inhabitant.id, ["profile", undefined]);
			removeProfile(profile.id);
		};
	}

	return (
		<Forms.PageStep
			title="Cadastro de Perfis"
			subtitle={`Apartamento ${apartmentNumber}`}
		>
			<button
				className="text-primary-1000 block mb-2"
				onClick={addProfile}
				disabled={profiles.length >= inhabitants.length}
			>
				+ Adicionar Perfil
			</button>
			<div className="flex flex-col gap-6 overflow-y-auto max-h-[600px]">
				{profiles.map((profile, index) => {
					return (
						<DropMenu
							key={profile.id}
							text={
								index === 0
									? "Perfil Principal"
									: `Pefil Secundário ${index}`
							}
							removeCallback={index === 0 ? null : getRemoveCallback(profile)}
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
								<Forms.Select
									required
									defaultOption="Escolha um Morador"
									options={getSelectOptions(profile)}
									onChange={getOnChangeSelect(profile)}
									value={
										inhabitants.find(
											(inhabitant) =>
												inhabitant.profile === profile
										)?.id
									}
								/>
							</div>
						</DropMenu>
					);
				})}
			</div>
		</Forms.PageStep>
	);
}
