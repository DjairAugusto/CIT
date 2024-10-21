import React, { useState } from "react";
import DropMenu from "../../components/DropMenu";
import { Forms } from "../../components/Forms";
import useObjectArray from "../../hooks/useObjectArray";

export default function ProfileForm() {
    const [profile, setProfile] = useState({});
    const {
        array: employees,
        addOne: addEmployee,
        removeOne: removeEmployee,
        modifyOne: modifyEmployee,
    } = useObjectArray({
        entries: [
            "name",
            "role",
            "phone",
        ],
        oneNeeded: true
    });

    const modifyProfile = (id, [key, value]) => {
        setProfile(prevProfile => ({
            ...prevProfile,
            [key]: value
        }));
    };

    return (
        <Forms.PageStep
            title="Cadastro de Funcionário"
            subtitle="Funcionário XXX"
        >
            <div className="w-full h-fit">
                <button
                    className="text-primary-1000 block mb-2"
                    onClick={addEmployee}
                >+ Adicionar Funcionário</button>
                <div className="flex flex-col gap-6 overflow-y-auto max-h-[600px]">
                    <DropMenu
                        text="Perfil Principal"
                        removeCallback={null}
                    >
                        <div className="flex gap-4 flex-col">
                            {
                                employees.map(employee => (
                                    <div key={employee.id} className="flex gap-4 flex-col">
                                        <Forms.InputText
                                            placeholder="NOME DO FUNCIONÁRIO"
                                            onChange={e => modifyEmployee(employee.id, ["name", e.nativeEvent.srcElement.value])}
                                            required
                                        />
                                        <Forms.InputText
                                            placeholder="CARGO"
                                            onChange={e => modifyEmployee(employee.id, ["role", e.nativeEvent.srcElement.value])}
                                            required
                                        />
                                        <Forms.InputText
                                            placeholder="TELEFONE"
                                            onChange={e => modifyEmployee(employee.id, ["phone", e.nativeEvent.srcElement.value])}
                                        />
                                        <button
                                            className="text-red-500"
                                            onClick={() => removeEmployee(employee.id)}
                                        >Remover Funcionário</button>
                                    </div>
                                ))
                            }
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
                </div>
            </div>
        </Forms.PageStep>
    );
}