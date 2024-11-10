import { Forms } from "../../components/Forms";
import VehicleForm from "./VehicleForm";
import VisitorForm from "./VisitorForm";

// TODO avaliar progresso da página de visitante
// TODO integração do cadastro de visitante com o back
export default function VisitorRegistration() {
	const steps = [<VisitorForm />, <VehicleForm />];

	return (
		<Forms.Page
			steps={steps}
			imageSource="/imgVisitors.jpg"
		/>
	);
}
