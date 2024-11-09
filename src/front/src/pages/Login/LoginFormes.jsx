import React from 'react'
import { Forms } from "../../components/Forms";

export default function LoginFormes({data, updateFieldHandler, fieldsErrors}) {
	return (
		<Forms.PageStep
			center={true}
		>
			<div className='self-start'>
				<img src="componentehorizontal.png" alt="Logo Condomínio Inteligente" style={{ width: '200px', height: 'auto' }} />
			</div>
			<h2 className='text-center my-10 text-2xl'>Login</h2>
			<div className="flex gap-4 flex-col">
				<Forms.InputText 
					type="email"
					placeholder="E-mail"
					value={data.email || ""}
					onChange={(e) => updateFieldHandler("email", e.target.value)}
					error={fieldsErrors.email}
					required
				/>
				<Forms.InputText 
					type="password"
					placeholder="Senha"
					value={data.password || ""}
					onChange={(e) => updateFieldHandler("password", e.target.value)}
					error={fieldsErrors.password}
					required
				/>
			</div>
		</Forms.PageStep>
	)
}
