import React, { useState } from "react";
import DropMenu from "../../components/DropMenu";
import { Forms } from "../../components/Forms";

let nextId = 0;

export default function ProfileForm() {
	const [profiles, setProfiles] = useState([
		{
			id: nextId++,
			email: "",
			password: "",
		}
	]);

	function addProfile() {
		setProfiles([
			...profiles,
			{
				id: nextId++,
				email: "",
				password: "",
			}
		]);
	}

	function removeProfile(target) {
		setProfiles(profiles.filter(value => value.id !== target));
	}

	function modifyProfile(target, [key, value]) {
		const newProfiles = [];
		Object.assign(newProfiles, profiles);
		const profile = newProfiles.find(value => value.id === target);
		profile[key] = value;
		
		setProfiles(newProfiles);
	}

	return (
		<div className="flex flex-col gap-6 justify-between items-center w-full h-fit">
			<div className="w-full">
				<h1 className="text-center text-4xl mb-4">
					Cadastro de Perfis
				</h1>
				<div className="w-full flex items-center justify-center">
					<div className="bg-zinc-400 h-[1px] w-full"></div>
					<h6 className="px-4 whitespace-nowrap m-auto">
						Apartamento XXX
					</h6>
					<div className="bg-zinc-400 h-[1px] w-full"></div>
				</div>
			</div>

			<div className="w-full h-fit">
				<button
					className="text-primary-1000 block mb-2"
					onClick={addProfile}
				>+ Adicionar Perfil</button>
				<div className="flex flex-col gap-6 overflow-y-auto max-h-[600px]">
					{
						profiles.map((profile, index) => (
							<DropMenu
								key={profile.id}
								text={index === 0 ? "Perfil Principal" : `Pefil Secundário ${index}`}
								removeCallback={index === 0 ? null : () => removeProfile(profile.id)}
							>
								<div className="flex gap-4 flex-col">
									<Forms.InputText
										placeholder="EMAIL"
										onChange={e => modifyProfile(profile.id, ["email", e.nativeEvent.srcElement.value])}
										required
									/>
									<Forms.InputText
										placeholder="SENHA"
										type="password"
										onChange={e => modifyProfile(profile.id, ["password", e.nativeEvent.srcElement.value])}
										required
									/>
								</div>
							</DropMenu>
						))
					}
				</div>
			</div>
		</div>
	);
}