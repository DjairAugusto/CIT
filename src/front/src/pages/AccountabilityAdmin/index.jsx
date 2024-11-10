import React from "react";
import { AccountabilityProvider } from "../contexts/AccountabilityContext";
import AdminForm from "./AdminForm";

// TODO avaliar possível junção dos dois menus de Accountability
export default function AccountabilityAdmin() {
    return (
        <AccountabilityProvider>
            <div className="p-6">
                <AdminForm />
            </div>
        </AccountabilityProvider>
    );
}
