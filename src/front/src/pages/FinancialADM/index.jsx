import React from "react";
import { FinancialProvider } from "../contexts/FinancialContext";
import FinancialForm from "./FinancialForm";

export default function index() {
    return (
        <FinancialProvider>
            <div className="p-6">
                <FinancialForm />
            </div>
        </FinancialProvider>
    );
}
