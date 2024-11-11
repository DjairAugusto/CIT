import React from "react";
import { DeliveryProvider } from "../contexts/DeliveryContext"; 
import DeliveriesPage from "./Deliveries"; 

function Index() {
    return (
        <DeliveryProvider>
            <div className="p-6">
                <DeliveriesPage />
            </div>
        </DeliveryProvider>
    );
}

export default Index;
