import React from 'react'
import { Forms } from "../../components/Forms";
import {useState} from "react";
import LoginFormes from './LoginFormes';
import {useNavigate} from 'react-router-dom';
import axios from "../../utils/requisition/citRequisition"
import validateEmail from "../../utils/validateEmail";
import { Cookies } from '../../utils/cookies';

const formsTemplate = {
    email: "",
	password: "",
}

export default function Login() {
	const [data, setData] = useState(formsTemplate);
	const navigate = useNavigate();

	if(Cookies.get('AuthorizationToken')) {
		navigate('/home');
	}

	function register(data) {
		axios.post("/auth/login", data).then(response => {
			Cookies.set("AuthorizationToken", response.data.token);
			navigate(`/home`);
		}).catch(error => {
			console.log(error);
			// TODO Exbir mensagem de erro do login // back pronto em outra branch
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
    
	const updateFieldHandler = (field, value) => {
		setData((prevData) => {
			const updatedData = { ...prevData };

			const fieldParts = field.split(".");
			let currentField = updatedData;

			for (let i = 0; i < fieldParts.length - 1; i++) {
				const part = fieldParts[i];
				if (!currentField[part]) {
					currentField[part] = {};
				}
				currentField = currentField[part];
			}

			currentField[fieldParts[fieldParts.length - 1]] = value;

			return updatedData;
		});
	};

	function validateLogin() {
		let fieldsErrors ={};
		
		fieldsErrors = {...fieldsEmpty(data), ...fieldsErrors};
		return fieldsErrors;
	}
	
	const steps = [
		<LoginFormes
			data={data}
			updateFieldHandler={updateFieldHandler}
			fieldsErrors={validateLogin()}
		/>,
	]
    
	return (
		<Forms.Page
			steps={steps}
			imageSource="/condominium-registration.png"
			validations={[[true]]}
			callbak={() => register(data)}
		/>
	);
}