"use client";

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
}

// interface HydropowerContextType {
//   hydropowerData: HydropowerData[];
//   setHydropowerData: any;
//   selectedHydropower: any;
//   updateSelectedHydropower: any;
// }

export const HydropowerContext = createContext<any>(null);

export const HydropowerProvider: React.FC = ({ children }: any) => {
  const [selectedHydropower, setSelectedHydropower] = useState<any>(null);

  return (
    <HydropowerContext.Provider value={{ selectedHydropower, setSelectedHydropower }} >
      {children}
    </HydropowerContext.Provider>
  );
};

export const useHydropower = () => {
  return useContext(HydropowerContext);
};
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
    <>
      <div className="bg-blue-200 rounded">
        <p className="text-center h-14 font-semibold text-lg p-4 border-b border-gray-400  ">
          Aayu Chhatigad Hydropower Project
        </p>
      </div>
      <div className="border border-gray-300 shadow-sm overflow-y-scroll h-96 mx-auto static">
        <table className="w-full text-sm leading-5 z-0">
          <tbody>
            <tr>
              <td className="py-3 px-4 text-left font-bold text-gray-600 w-1/3">
                Isuue Date
              </td>
              <td className="py-3 px-4 text-left">12/21/2073</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-3 px-4 text-left font-bold text-gray-600 w-1/3">
                Validity
              </td>
              <td className="py-3 px-4 text-left">12/20/2075</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-left font-bold text-gray-600 w-1/3">
                Liscese No
              </td>
              <td className="py-3 px-4 text-left">798</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-3 px-4 text-left font-bold text-gray-600 w-1/3">
                Address
              </td>
              <td className="py-3 px-4 text-left">
                Anamnagar-32,Kathmandu,Nepal. GPO 20863, 4102710, Kadam KC
                9851159634
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-left font-bold text-gray-600 w-1/3">
                License Type
              </td>
              <td className="py-3 px-4 text-left">Survey</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-3 px-4 text-left font-bold text-gray-600 w-1/3">
                Promoter
              </td>
              <td className="py-3 px-4 text-left">
                Puwa Khola-1 Hydro Power Pvt.Ltd.
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-left font-bold text-gray-600 w-1/3">
                River
              </td>
              <td className="py-3 px-4 text-left">Chatti Gad</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-3 px-4 text-left font-bold text-gray-600 w-1/3">
                Capacity (MW)
              </td>
              <td className="py-3 px-4 text-left">13.942</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-left font-bold text-gray-600 w-1/3">
                River
              </td>
              <td className="py-3 px-4 text-left">Chatti Gad</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-3 px-4 text-left font-bold text-gray-600 w-1/3">
                Capacity (MW)
              </td>
              <td className="py-3 px-4 text-left">13.942</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-left font-bold text-gray-600 w-1/3">
                River
              </td>
              <td className="py-3 px-4 text-left">Chatti Gad</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-3 px-4 text-left font-bold text-gray-600 w-1/3">
                Capacity (MW)
              </td>
              <td className="py-3 px-4 text-left">13.942</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HydropowerDetailsSidebar;
