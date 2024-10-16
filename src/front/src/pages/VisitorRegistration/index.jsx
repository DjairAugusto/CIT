import { Forms } from "../../components/Forms";
import VehicleForm from "./VehicleForm";
import VisitorForm from "./VisitorForm";

export default function VisitorRegistration() {
	const steps = [<VisitorForm />, <VehicleForm />];

	return (
		<Forms.Page
			steps={steps}
			imageSource="/condominium-registration.png"
		/>
	);
}
