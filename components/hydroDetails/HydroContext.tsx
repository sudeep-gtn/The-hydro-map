'use client';
import React, { createContext, useContext, useState } from "react";

// Define the context
export const HydropowerContext = createContext<any>(null);

// Define the hook to use the context
export const useHydropower = () => {
    const context = useContext(HydropowerContext);
    if (!context) {
        throw new Error("useHydropower must be used within a HydropowerProvider");
    }
    return context;
};

// Define the provider component
export const HydropowerProvider: React.FC = ({ children }: any) => {
    const [selectedHydropower, setSelectedHydropower] = useState<any>(null);

    return (
        <HydropowerContext.Provider
            value={{ selectedHydropower, setSelectedHydropower }}
        >
            {children}
        </HydropowerContext.Provider>
    );
};