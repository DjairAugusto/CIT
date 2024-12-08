import React from "react";
import { FinancialProvider } from "../contexts/FinancialContext";
import FinancialManagement from "./FinancialManagement";

const Index = () => {
  return (
    <FinancialProvider>
      <FinancialManagement />
    </FinancialProvider>
  );
};

export default Index;
