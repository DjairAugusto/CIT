import {createContext} from "react";

export const authContext = createContext({
    role: [],
    setRole: () => {},
    user: {},
    setUser: () => {}
});