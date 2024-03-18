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
      <div className="border border-gray-300 shadow-sm rounded-lg overflow-hidden mx-auto ">
        <div className="text-center bg-gray-200 font-semibold text-lg p-4 border-b border-gray-400 ">Kulekhani Hydropower</div>
        <table className="w-full text-sm leading-5">
          <thead className="bg-gray-100 mt-2">
            <tr>
              <th className="py-3 px-4  text-left font-medium text-gray-600">Project</th>
              <th className="py-3 px-4 text-left font-medium text-gray-600">Kulekhani Project b</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4 text-left font-medium text-gray-600">Calories</td>
              <td className="py-3 px-4 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, iusto!</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-3 px-4 text-left font-medium text-gray-600 w-7">Address</td>
              <td className="py-3 px-4 text-left">Lorem ipsum dolor sit amet consectetur.</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-left font-medium text-gray-600">Liscese No</td>
              <td className="py-3 px-4 text-left">240</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-3 px-4 text-left font-medium text-gray-600">Total Fat</td>
              <td className="py-3 px-4 text-left">12g</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-left font-medium text-gray-600">Calories</td>
              <td className="py-3 px-4 text-left">240</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-3 px-4 text-left font-medium text-gray-600">Total Fat</td>
              <td className="py-3 px-4 text-left">12g</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-left font-medium text-gray-600">Calories</td>
              <td className="py-3 px-4 text-left">240</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-3 px-4 text-left font-medium text-gray-600">Total Fat</td>
              <td className="py-3 px-4 text-left">12g</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-left font-medium text-gray-600">Calories</td>
              <td className="py-3 px-4 text-left">240</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-3 px-4 text-left font-medium text-gray-600">Total Fat</td>
              <td className="py-3 px-4 text-left">12g</td>
            </tr>
          </tbody>
        </table>
    </div>
    );
};

export default HydropowerDetailsSidebar;
