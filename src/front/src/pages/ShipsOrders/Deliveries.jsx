import React, { useContext } from "react";
import { DeliveryContext } from "../contexts/DeliveryContext";

const Deliveries = () => {
  const { deliveries } = useContext(DeliveryContext);

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl text-teal-400 font-bold">*CONDOMINIUM NAME*</h1>
      <p className="text-gray-500 mt-2">Resident Name</p>
      <p className="text-gray-500">Block B, Apartment 302</p>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-5">Deliveries and Packages</h2>
        {deliveries.length === 0 ? (
          <div>
            <img
              src="/public/emptybox.png"
              alt="No packages"
              className="mx-auto mb-5"
            />
            <p className="text-gray-600">Oops, no packages found for you.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {deliveries.map((delivery, index) => (
              <div
                key={index}
                className="bg-gray-200 p-4 rounded-md shadow-md text-center"
              >
                <img
                  src="/public/packagepic.png"
                  alt="Package"
                  className="mx-auto mb-4"
                />
                <p className="font-bold">Package received on {delivery.date}</p>
                <p className="text-gray-600">Time: {delivery.time}</p>
                <p className="text-gray-600">Recipient: {delivery.recipient}</p>
                <p className="font-bold mt-2 text-teal-500">Awaiting pickup</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Deliveries;
