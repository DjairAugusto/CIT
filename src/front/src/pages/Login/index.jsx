import React, {useEffect} from "react";
import {Forms} from "../../components/Forms";
import {useState} from "react";
import LoginFormes from "./LoginFormes";
import {useNavigate} from "react-router-dom";
import {nonAuthorizedInstance as axios} from "../../utils/requisition/citRequisition";
import validateLogin from "../../utils/validateLogin";
import {Cookies} from "../../utils/cookies";

const formsTemplate = {
	email: "",
	password: "",
};

export default function Login() {
	const [data, setData] = useState(formsTemplate);
	const navigate = useNavigate();
	const [error, setError] = useState("");

	function register(data) {
		axios
			.post("/auth/login", data)
			.then((response) => {
				Cookies.set("AuthorizationToken", response.data.token);
				navigate(`/condominium`);
			})
			.catch((error) => {
				setError(error.response.data.message);
			});
	}

	function fieldsEmpty(fieldsData) {
		const fields = {};

		const checkFields = (data, parentKey = "") => {
			Object.keys(data).forEach((key) => {
				const fullKey = parentKey ? `${parentKey}.${key}` : key;
				if(typeof data[key] === "object" && data[key] !== null) {
					checkFields(data[key], fullKey);
				} else if(!data[key]) {
					fields[fullKey] = "Campo obrigatório";
				}
			});
		};

		checkFields(fieldsData);
		let fieldsErrors = {};
		Object.keys(fields).forEach((key) => {
			if(key.includes(".")) {
				const keyParts = key.split(".");
				const parentKey = keyParts[0];
				if(!fieldsErrors[parentKey]) fieldsErrors[parentKey] = {};
				fieldsErrors[parentKey][keyParts[1]] = fields[key];
			} else {
				fieldsErrors[key] = fields[key];
			}
		});
		return fieldsErrors;
	}

	function checkValidadeRequest() {
		console.log(error);
		if(error !== "") {
			const msg = "Credenciais inválidas";
			return { email: msg, password: msg };
		}
		return {}
	}

	const updateFieldHandler = (field, value) => {
		setError("");
		setData((prevData) => {
			const updatedData = {...prevData};

			const fieldParts = field.split(".");
			let currentField = updatedData;

			for(let i = 0; i < fieldParts.length - 1; i++) {
				const part = fieldParts[i];
				if(!currentField[part]) {
					currentField[part] = {};
				}
				currentField = currentField[part];
			}

			currentField[fieldParts[fieldParts.length - 1]] = value;

			return updatedData;
		});
	};

	function validateLoginForms() {
		let fieldsErrors = {};

		fieldsErrors = {...fieldsEmpty(data), ...fieldsErrors};
		fieldsErrors = {...checkValidadeRequest(), ...fieldsErrors};	

		return fieldsErrors;
	}

	const steps = [
		<LoginFormes
			data={data}
			updateFieldHandler={updateFieldHandler}
			fieldsErrors={validateLoginForms()}
		/>,
	];

	useEffect(() => {
		async function checkLoginStatus() {
			const isLoggedIn = await validateLogin();
			if(isLoggedIn) {
				navigate("/condominium");
			}
		}
		checkLoginStatus();
	}, [navigate]);


	return (
		<Forms.Page
			steps={steps}
			imageSource="/prediologin.png"
			validations={[Object.keys(validateLoginForms()).length === 0]}
			callback={() => register(data)}
			buttonFinishText="Entrar"
		/>
	);
}
