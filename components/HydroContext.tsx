'use client';

// HydropowerContext.tsx
import React, { createContext, useContext, useState } from "react";

interface HydropowerData {
  Project: string;
  Province: string;
  District: string;
  Municipality: string;
  Capacity: number;
  River: string;
  LicenseNo: number;
  IssueDate: string;
  Validity: string;
  Promoter: string;
};

interface HydropowerContextType {
  hydropowerData: HydropowerData[];
  setHydropowerData: any;
  selectedHydropower: any;
  updateSelectedHydropower: any;
}

export const HydropowerContext = createContext<HydropowerContextType | null>(null);

export const HydropowerProvider: React.FC = ({ children }:any) => {
  const [hydropowerData, setHydropowerData] = useState<HydropowerData[]>([]);
  const [selectedHydropower, setSelectedHydropower] = useState<HydropowerData | null>(null);

  const updateSelectedHydropower = (data: HydropowerData | null) => {
    setSelectedHydropower(data);
  };
  return (
    <HydropowerContext.Provider value={{ hydropowerData, setHydropowerData, selectedHydropower, updateSelectedHydropower }}>
      {children}
    </HydropowerContext.Provider>
  );
};

export function useHydropower(){
  const context = useContext(HydropowerContext);
  if(!context) return ("NO Context Provided ......");
  return context;
}
// export function useHydropower() {
//   const context = useContext(HydropowerContext);
//   if (!context) {
//     throw new Error('useHydropower must be used within a HydropowerProvider');
//   }
//   return context;
// };


const HydropowerDetailsSidebar = () => {

    // console.log("Hydropower selected : ", selectedHydropower);
    return (
      <div class="border border-gray-300 shadow-sm rounded-lg overflow-hidden max-w-sm mx-auto mt-16">
      <table class="w-full text-sm leading-5">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-3 px-4 text-left font-medium text-gray-600">Nutrient</th>
            <th class="py-3 px-4 text-left font-medium text-gray-600">Amount per Serving (100g)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-3 px-4 text-left font-medium text-gray-600">Calories</td>
            <td class="py-3 px-4 text-left">240</td>
          </tr>
          <tr class="bg-gray-50">
            <td class="py-3 px-4 text-left font-medium text-gray-600">Total Fat</td>
            <td class="py-3 px-4 text-left">12g</td>
          </tr>
          <tr>
            <td class="py-3 px-4 text-left font-medium text-gray-600 pl-8">Saturated Fat</td>
            <td class="py-3 px-4 text-left">3.5g</td>
          </tr>
          <tr class="bg-gray-50">
            <td class="py-3 px-4 text-left font-medium text-gray-600 pl-8">Trans Fat</td>
            <td class="py-3 px-4 text-left">0g</td>
          </tr>
          <tr>
            <td class="py-3 px-4 text-left font-medium text-gray-600">Cholesterol</td>
            <td class="py-3 px-4 text-left">45mg</td>
          </tr>
          <tr class="bg-gray-50">
            <td class="py-3 px-4 text-left font-medium text-gray-600">Sodium</td>
            <td class="py-3 px-4 text-left">430mg</td>
          </tr>
          <tr>
            <td class="py-3 px-4 text-left font-medium text-gray-600">Total Carbohydrate</td>
            <td class="py-3 px-4 text-left">19g</td>
          </tr>
          <tr class="bg-gray-50">
            <td class="py-3 px-4 text-left font-medium text-gray-600 pl-8">Dietary Fiber</td>
            <td class="py-3 px-4 text-left">3g</td>
          </tr>
          <tr>
            <td class="py-3 px-4 text-left font-medium text-gray-600 pl-8">Sugars</td>
            <td class="py-3 px-4 text-left">4g</td>
          </tr>
          <tr class="bg-gray-50">
            <td class="py-3 px-4 text-left font-medium text-gray-600">Protein</td>
            <td class="py-3 px-4 text-left">22g</td>
          </tr>
        </tbody>
      </table>
    </div>
    );
};

export default HydropowerDetailsSidebar;
