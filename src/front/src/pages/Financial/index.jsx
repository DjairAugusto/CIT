import React from "react";
import { UserProvider } from "./UserContext";
import UserView from "./UserView";

export default function index() {
    return (
        <UserProvider>
            <div className="p-6">
                <UserView />
            </div>
        </UserProvider>
    );
}
