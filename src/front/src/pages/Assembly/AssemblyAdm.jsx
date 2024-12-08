import React from "react";
import AssemblyAdmBanner from "./Banner";
import AssemblyFiles from "./AssemblyFiles";
import Buttons from "./Buttons";

const AssemblyAdm = () => {
    return(
        <main>
            <AssemblyAdmBanner />
            <AssemblyFiles />
            <Buttons />
        </main>
    );  
};

export default AssemblyAdm;