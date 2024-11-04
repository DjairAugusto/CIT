import React from "react";
import { AccountabilityProvider } from "../contexts/AccountabilityContext";
import AdminForm from "./AdminForm";

export default function AccountabilityAdmin() {
    return (
        <AccountabilityProvider>
            <div className="p-6">
                <AdminForm />
            </div>
        </AccountabilityProvider>
    );
}
