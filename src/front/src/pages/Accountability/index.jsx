import React from "react";
import { AccountabilityProvider } from "../contexts/AccountabilityContext";
import AccountForm from "./AccountForm";

export default function Accountability() {
    return (
        <AccountabilityProvider>
            <div className="p-6">
                <AccountForm />
            </div>
        </AccountabilityProvider>
    );
}
