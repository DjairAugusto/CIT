import React from "react";
import { AccountabilityProvider } from "../contexts/AccountabilityContext";
import AccountForm from "./AccountForm";

// TODO avaliar possível junção dos dois menus de Accountability
export default function Accountability() {
    return (
        <AccountabilityProvider>
            <div className="p-6">
                <AccountForm />
            </div>
        </AccountabilityProvider>
    );
}
