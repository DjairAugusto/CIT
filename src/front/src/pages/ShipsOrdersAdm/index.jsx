import React from "react";
import { DeliveryProvider } from "../contexts/DeliveryContext";
import AdminDeliveries from "./AdminDeliveries";

function Index() {
  return (
    <DeliveryProvider>
      <div className="p-6">
        <AdminDeliveries />
      </div>
    </DeliveryProvider>
  );
}

export default Index;
