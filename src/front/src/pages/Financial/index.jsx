import React from "react";
import { FinancialProvider } from "../contexts/FinancialContext";
import UserViewFinancial from "./UserFinancialView";

const Index = () => {
  return (
    <FinancialProvider>
      <div className="min-h-screen bg-gray-100">
        <UserViewFinancial />
      </div>
    </FinancialProvider>
  );
};

export default Index;
