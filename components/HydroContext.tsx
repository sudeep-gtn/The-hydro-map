import React , {useState ,createContext, useContext} from "react";
import 'tailwindcss/tailwind.css';
import hydroJSON from '../data/hydro/hydropwers.json';


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

// interface SidebarProps {
//     selectedHydropower: HydropowerDetails | null;
// };
interface HydropowerContextType {
    hydropowerData: HydropowerData[];
    setHydropowerData: React.Dispatch<React.SetStateAction<HydropowerData[]>>;
};

const HydropowerContext = createContext<HydropowerContextType | undefined>(undefined);

export const HydropowerProvider = ({ children }:any) => {
    const [hydropowerData, setHydropowerData] = useState<HydropowerData[]>([]);
  
    return (
      <HydropowerContext.Provider value={{ hydropowerData, setHydropowerData }}>
        {children}
      </HydropowerContext.Provider>
    );
};

export const useHydropower = () => {
    const context = useContext(HydropowerContext);
    if (!context) {
      throw new Error('useHydropower must be used within a HydropowerProvider');
    }
    return context;
};




// const HydropowerDetailsSidebar: React.FC<SidebarProps> = ({ selectedHydropower }) => {
//     if (!selectedHydropower) {
//         return null;
//     }
//     console.log("Hydropower selected : ", selectedHydropower);
//     return (
//         <div className="block w-full overflow-x-auto max-w-xl border">
//             <table className="items-center w-full bg-transparent border-collapse">
//                 <thead>
//                     <tr>
//                         <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
//                             Hello
//                         </th>
//                         <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
//                             {selectedHydropower.Promoter}
//                         </th>
//                         <th
//                             className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-100">
//                     <tr className="text-gray-500">
//                         <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Provine 1</th>
//                         <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
//                             5,649</td>
//                         <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
//                             <div className="flex items-center">
//                                 <span className="mr-2 text-xs font-medium">30%</span>
//                                 <div className="relative w-full">
//                                     <div className="w-full bg-gray-200 rounded-sm h-2">
//                                         <div className="bg-cyan-600 h-2 rounded-sm w-30"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </td>
//                     </tr>
//                     <tr className="text-gray-500">
//                         <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
//                             Province 2</th>
//                         <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
//                             4,025</td>
//                         <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
//                             <div className="flex items-center">
//                                 <span className="mr-2 text-xs font-medium">24%</span>
//                                 <div className="relative w-full">
//                                     <div className="w-full bg-gray-200 rounded-sm h-2">
//                                         <div className="bg-orange-300 h-2 rounded-sm w-24"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </td>
//                     </tr>
//                     <tr className="text-gray-500">
//                         <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Bagmati
//                         </th>
//                         <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
//                             3,105</td>
//                         <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
//                             <div className="flex items-center">
//                                 <span className="mr-2 text-xs font-medium">18%</span>
//                                 <div className="relative w-full">
//                                     <div className="w-full bg-gray-200 rounded-sm h-2">
//                                         <div className="bg-teal-400 h-2 rounded-sm w-18"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </td>
//                     </tr>
//                     <tr className="text-gray-500">
//                         <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Province 4
//                         </th>
//                         <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
//                             1251</td>
//                         <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
//                             <div className="flex items-center">
//                                 <span className="mr-2 text-xs font-medium">12%</span>
//                                 <div className="relative w-full">
//                                     <div className="w-full bg-gray-200 rounded-sm h-2">
//                                         <div className="bg-pink-600 h-2 rounded-sm w-12"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </td>
//                     </tr>
//                     <tr className="text-gray-500">
//                         <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Province 5
//                         </th>
//                         <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">734
//                         </td>
//                         <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
//                             <div className="flex items-center">
//                                 <span className="mr-2 text-xs font-medium">9%</span>
//                                 <div className="relative w-full">
//                                     <div className="w-full bg-gray-200 rounded-sm h-2">
//                                         <div className="bg-indigo-600 h-2 rounded-sm w-9"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </td>
//                     </tr>
//                     <tr className="text-gray-500">
//                         <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Province 6
//                         </th>
//                         <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">734
//                         </td>
//                         <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
//                             <div className="flex items-center">
//                                 <span className="mr-2 text-xs font-medium">9%</span>
//                                 <div className="relative w-full">
//                                     <div className="w-full bg-gray-200 rounded-sm h-2">
//                                         <div className="bg-indigo-600 h-2 rounded-sm w-9"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </td>
//                     </tr>
//                     <tr className="text-gray-500">
//                         <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Province 7
//                         </th>
//                         <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">734
//                         </td>
//                         <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
//                             <div className="flex items-center">
//                                 <span className="mr-2 text-xs font-medium">9%</span>
//                                 <div className="relative w-full">
//                                     <div className="w-full bg-gray-200 rounded-sm h-2">
//                                         <div className="bg-indigo-600 h-2 rounded-sm w-9"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default HydropowerDetailsSidebar;