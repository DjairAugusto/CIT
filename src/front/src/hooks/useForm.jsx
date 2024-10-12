import { useState } from "react";

export default function useForm(steps) {
	const [currentStep, setCurrentStep] = useState(0);

	function changeSteps(i, e) {
		if (e) e.preventDefault();
		if (i < 0 || i >= steps.length) return;

		setCurrentStep(i);
	}

	return {
		currentStep,
		currentComponent: steps[currentStep],
		isLast: currentStep + 1 === steps.length ? true : false,
		isFirst: currentStep === 0 ? true : false,
		changeSteps,
	};
}
