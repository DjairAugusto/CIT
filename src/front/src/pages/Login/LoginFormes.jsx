import React from 'react';
import {Forms} from "../../components/Forms";

export default function LoginFormes({data, updateFieldHandler, fieldsErrors}) {
  return (
    <Forms.PageStep center={true}>
      <div className="self-start" style={{position: 'absolute', top: '55px', left: '30px'}}>
        <img
          src="/componentehorizontal.png"
          alt="Logo Condomínio Inteligente"
          style={{width: '300px', height: 'auto'}}  // Logo maior
        />
      </div>
      <h2 className="text-left my-10 text-4xl font-light">Login</h2> {/* Alinhado à esquerda e maior */}
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
  );
}
