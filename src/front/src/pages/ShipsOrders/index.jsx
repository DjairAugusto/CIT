import React from "react";
import { DeliveryProvider } from "../contexts/DeliveryContext"; 
import Deliveries from "./Deliveries"; 

function Index() {
    return (
        <DeliveryProvider>
            <div className="p-6">
                <Deliveries />
            </div>
        </DeliveryProvider>
    );
}

export default Index;
