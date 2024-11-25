// src/pages/Financial/FinancialMenu.jsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FinancialMenu({ text, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full bg-white rounded-lg shadow-md transition-all duration-500">
            <div
                onClick={toggleMenu}
                className="p-4 w-full flex justify-between items-center cursor-pointer bg-white rounded-lg"
            >
                <div className="flex items-center gap-2">
                    <img src="/iconContract.png" alt="PDF Icon" className="w-8 h-8" />
                    <span className="text-sm font-medium">{text}</span>
                </div>
                {isOpen ? <ChevronUp /> : <ChevronDown />}
            </div>
            <div
                className={`transition-all duration-500 overflow-hidden ${
                    isOpen ? "max-h-96 p-4 border-t border-gray-200" : "max-h-0"
                }`}
            >
                {children}
            </div>
        </div>
    );
}
