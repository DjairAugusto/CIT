import React from "react";
import { Forms } from "../components/Forms";
import { Lock, Mails } from "lucide-react";
import DropMenu from "../components/DropMenu";
export default function Demo() {
	return (
		<>
			<h1>Demo</h1>
			<p>Esta é uma página para Demostracao dos componetes dos itens</p>
			<div className="mx-auto my-10 w-1/3 flex flex-col gap-4 p-4 bg-slate-600">
				<Forms.InputText label="Nome" />
				<Forms.InputText
					label="Nome"
					type="password"
				/>
				<Forms.InputText
					label="Nome"
					LeftIcon={<Mails />}
				/>
				<Forms.InputText
					label="Nome"
					RightIcon={<Mails />}
				/>
				<Forms.InputText
					label="Nome"
					RightIcon={<Mails />}
					LeftIcon={<Mails />}
				/>
				<Forms.InputText
					label="Nome"
					type="password"
					RightIcon={<Mails />}
				/>
				<Forms.InputText
					label="Nome"
					LeftIcon={<Mails />}
					placeholder="Escreva o seu melhor e-Mail"
				/>
				<Forms.InputText
					label="Nome"
					type="password"
					LeftIcon={<Lock />}
					placeholder="Senha"
					required
				/>
			</div>
			<div className="mx-auto my-10 w-1/3 flex flex-col gap-4 p-4 bg-slate-600">
				<DropMenu text="Text">
					<div className="flex gap-4 flex-col">
						<Forms.InputText label="Nome" />
						<Forms.InputText
							label="Nome"
							type="password"
						/>
						<Forms.InputText
							label="Nome"
							LeftIcon={<Mails />}
						/>
						<Forms.InputText
							label="Nome"
							RightIcon={<Mails />}
						/>
						<Forms.InputText
							label="Nome"
							RightIcon={<Mails />}
							LeftIcon={<Mails />}
						/>
						<Forms.InputText
							label="Nome"
							type="password"
							RightIcon={<Mails />}
						/>
						<Forms.InputText
							label="Nome"
							LeftIcon={<Mails />}
							placeholder="Escreva o seu melhor e-Mail"
						/>
						<Forms.InputText
							label="Nome"
							type="password"
							LeftIcon={<Lock />}
							placeholder="Senha"
							required
						/>
					</div>
				</DropMenu>
			</div>
			<div className="mx-auto my-10 w-1/3 flex flex-col gap-4 p-4 bg-slate-600">
				<DropMenu text="Exemplo de texto">
					<p>
						Você pode escrever oque voce quiser aqui dentro, e
						colocar qualquer qualquer elementor HTML ou componete
					</p>
				</DropMenu>
			</div>
		</>
	);
}
