import FormsButton from "./FormsButton";
import FormsInputCheckBox from "./FormsInputCheckBox";
import FormsInputText from "./FormsInputText";
import FormsPage from "./FormsPage";
import FormsPageStep from "./FormsPageStep";
import FormsRoot from "./FormsRoot";
import FormsSelect from "./FormsSelect";
import FormsInputMask from "./FormsInputMask";
import FormsTextArea from "./FormsTextArea";
import FileInput from "./FileInput";

export const Forms = {
	Root: FormsRoot,
	InputText: FormsInputText,
	InputMask: FormsInputMask,
	Button: FormsButton,
	CheckBox: FormsInputCheckBox,
	Select: FormsSelect,
	Page: FormsPage,
	PageStep: FormsPageStep,
	TextArea: FormsTextArea,
	File: ({ onChange, file }) => (
		<FileInput files={[file]} onChange={onChange} multiple={false} />
	),
	Files: ({ onChange, files }) => (
		<FileInput files={files} onChange={onChange} multiple />
	),
};
