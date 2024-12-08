import { useState } from "react";
import { Forms } from "../../components/Forms";
import VehicleForm from "./VehicleForm";
import VisitorForm from "./VisitorForm";

// TODO avaliar progresso da página de visitante
// TODO integração do cadastro de visitante com o back
// TODO fazer as validações do Forms.Page
export default function VisitorRegistration() {
	const steps = [<VisitorForm />, <VehicleForm />];
	const validations = useState([]);

	return (
		<Forms.Page
			steps={steps}
			validations={validations}
			imageSource="/imgVisitors.jpg"
		/>
	);
}
