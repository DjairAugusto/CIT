import {useState } from "react";
import CondominiumForm from "./CondominiumForm";
import { Forms } from "../../components/Forms";
import AdminForm from "./AdminForm";
import updateMetaTags from "../../utils/updateMetaTags";
import validCnpj from "../../utils/validCnpj";
import validCpf from "../../utils/validCpf";
import validateEmail from "../../utils/validateEmail";
import validateZipCode from "../../utils/validateZipCode";
import {nonAuthorizedInstance as axios} from "../../utils/requisition/citRequisition"
import { useNavigate } from 'react-router-dom';

// TODO avaliar forma de utilizar vetores de dados, tipo vários carros ou perfis
const formsTemplate = {
    condominium: {
        name: "",
        cnpj: "",
        blocks: "",
        units: "",
        floors: "",
        apartments: "",
        address: {
            street: "",
            number: "",
            neighborhood: "",
            city: "",
            state: "",
            zipCode: "",
        },
    },
    admin: {
        name: "",
        cpf: "",
		profile: {
			email: "",
			password: "",
			confirm: "",
		},
    },
};

// TODO separar as funções de validação do Forms.Page pra um uso mais geral 
export default function CondominiumRegistration() {
	const [data, setData] = useState(formsTemplate);
	const navigate = useNavigate();

	updateMetaTags({
		title: "Cadastro de condomínio",
		meta: {
			"description": {attribute: "name", content: "Página de cadastro de condomínio"},
			"og:title": {attribute: "property", content: "Cadastro de condomínio"},
			"og:description": {
				attribute: "property", content: "Página de cadastro de condomín"
			},
		}
	});

	function register(data) {
		let admin = {}
		let condominium = {}
		axios.post("/employee/admin", data.admin).then(response => {
			admin = response.data;
			data.condominium.managerId = admin.id;

			axios.post("/condominium", data.condominium).then(response => {
				condominium = response.data;
				navigate(`/auth/signin`);

			}).catch(error => {
				alert('Erro ao enviar os dados:', error);
				console.error('Erro ao enviar os dados:', error);	
			});

		}).catch(error => {
			alert('Erro ao enviar os dados:', error);
			console.error('Erro ao enviar os dados:', error);	
		});
	}
	
	function fieldsEmpty(fieldsData) {
		const fields = {};

		const checkFields = (data, parentKey = "") => {
			Object.keys(data).forEach((key) => {
				const fullKey = parentKey ? `${parentKey}.${key}` : key;
				if (typeof data[key] === "object" && data[key] !== null) {
					checkFields(data[key], fullKey);
				} else if (!data[key]) {
					fields[fullKey] = "Campo obrigatório";
				}
			});
		};

		checkFields(fieldsData);
		let fieldsErrors = {};
		Object.keys(fields).forEach((key) => {
			if(key.includes('.')) {
				const keyParts = key.split('.');
				const parentKey = keyParts[0];
				if(!fieldsErrors[parentKey]) fieldsErrors[parentKey] = {};
				fieldsErrors[parentKey][keyParts[1]] = fields[key];
			}
			else {
				fieldsErrors[key] = fields[key];
			}
		});
		return fieldsErrors;
	}
	function validateCondominiumForm() {
		let fieldsErrors = {};

		if (!validateZipCode(data.condominium.address?.zipCode)) {
			if (!fieldsErrors.address) fieldsErrors.address = {};
			fieldsErrors.address['zipCode'] = 'CEP inválido';
		}
		
		if(!validCnpj(data.condominium.cnpj)) fieldsErrors['cnpj'] = 'CNPJ inválido';
		fieldsErrors = {...fieldsEmpty(data.condominium), ...fieldsErrors};				
		return fieldsErrors;
	}
	
	function validateAdminForm() {
		let fieldsErrors ={};
		
		if(!validCpf(data.admin.cpf)) fieldsErrors['cpf'] = 'CPF inválido';
		if(!validateEmail(data.admin.profile?.email)) {
			if (!fieldsErrors.profile) fieldsErrors.profile = {};
			fieldsErrors.profile['email'] = 'Email inválido'
		};
		if(data.admin.profile?.confirm !== data.admin.profile?.password) {
			if (!fieldsErrors.profile) fieldsErrors.profile = {};
			fieldsErrors.profile['password'] = 'As senhas não conferem';
			fieldsErrors.profile['confirm'] = 'As senhas não conferem';
		};
		fieldsErrors = {...fieldsEmpty(data.admin), ...fieldsErrors};
		return fieldsErrors;
	}
	
	const updateFieldHandler = (section, field, value) => {
		setData((prevData) => {
			const updatedSection = { ...prevData[section] };

			const fieldParts = field.split(".");
			let currentField = updatedSection;

			for (let i = 0; i < fieldParts.length - 1; i++) {
				const part = fieldParts[i];
				if (!currentField[part]) {
					currentField[part] = {};
				}
				currentField = currentField[part];
			}

			currentField[fieldParts[fieldParts.length - 1]] = value;

			return {
				...prevData,
				[section]: updatedSection,
			};
		});
	};

	const steps = [
		<CondominiumForm
			data={data.condominium}
			updateFieldHandler={updateFieldHandler}
			subtitle={data.condominium.name || "Nome do condominio"}
			fieldsErrors={validateCondominiumForm()}
		/>,
		<AdminForm
			data={data.admin}
			updateFieldHandler={updateFieldHandler}
			subtitle={data.condominium.name || "Nome do condominio"}
			fieldsErrors={validateAdminForm()}
		/>,
	];

    return (
        <Forms.Page
            steps={steps}
            imageSource="/condominium-registration.png"
            validations={[
                Object.keys(validateCondominiumForm()).length === 0,
                Object.keys(validateAdminForm()).length === 0,
            ]}
            callback={() => register(data)}
        />
    );
}
