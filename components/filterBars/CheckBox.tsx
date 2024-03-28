'use client';
import React, { useState, createContext, useContext } from "react";
interface HydroData {
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
const hydroData = require('../../data/hydro/hydropwers.json');
import { useHydropower } from "../hydroDetails/HydroContext";

// ----------Context For Selected Province ------
interface FilterContextType {
    checkedFilters: string[];
    setCheckedFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterContext = createContext<FilterContextType>({
    checkedFilters: [],
    setCheckedFilters: () => { }
});

export const useFilterContext = () => useContext(FilterContext);

export const ProvinceProvider: React.FC = ({ children }: any) => {
    const [checkedFilters, setCheckedFilters] = useState<string[]>([]);
    return (
        <FilterContext.Provider value={{ checkedFilters, setCheckedFilters }}>
            {children}
        </FilterContext.Provider>
    );
};


export function ProvinceCheckBox() {

    const [optionsVisible, setOptionsVisible] = useState(false);
    const { checkedFilters, setCheckedFilters } = useFilterContext();

    const toggleVisibility = () => {
        setOptionsVisible(!optionsVisible);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if (checked) {
            setCheckedFilters([...checkedFilters, value]);
        } else {
            setCheckedFilters(checkedFilters.filter(province => province !== value));
        }
    };

    const allProvinces = Array.from(new Set(hydroData.map((data: any) => data.Province)));
    const provinces = allProvinces.map(province => {
        let label = "";
        switch (province) {
            case "Province 1":
                label = "Koshi";
                break;
            case "Province 2":
                label = "Madhesh";
                break;
            case "Province 3":
                label = "Bagmati";
                break;
            case "Province 4":
                label = "Gandaki";
                break;
            case "Province 5":
                label = "Lumbini";
                break;
            case "Province 6":
                label = "Karnali";
                break;
            case "Province 7":
                label = "Sudurpashchim";
                break;
            default:
                label = "";
                break;
        }
        return { value: province, label };
    }).sort((a: any, b) => a.value.localeCompare(b.value));
    console.log("All provinces : ", provinces);
    const filteredData = hydroData.filter((item: HydroData) => checkedFilters.includes(item.Province));
    return (
        <div className="relative mb-3 flex flex-col align-center justify-center w-48">
            <button
                onClick={toggleVisibility}
                className="inline-flex items-center px-4 py-3 border border-gray-400 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-blue-200"
                type="button"
            >
                {"  "} Select Province
                <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            {optionsVisible && (
                <div style={{ zIndex: 100000 }} className="absolute top-full mt-4 p-2 w-44 rounded-lg shadow border border-gray-400 bg-gray-200 text-sm">
                    <ul className="p-2 h-64 overflow-y-auto overflow-x-hidden ">
                        {provinces.map((province: any, index) => (
                            <li key={index}>
                                <label className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-white">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                        value={province.value}
                                        onChange={handleCheckboxChange}
                                        checked={checkedFilters.includes(province.value)}
                                    />
                                    <span className="ms-2">{province.label}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    );
}

// const provinces = [
//     { value: "Province 1", label: "Koshi" },
//     { value: "Province 2", label: "Madhesh" },
//     { value: "Province 3", label: "Bagmati" },
//     { value: "Province 4", label: "Gandaki" },
//     { value: "Province 5", label: "Lumbini" },
//     { value: "Province 6", label: "Karnali" },
//     { value: "Province 7", label: "Sudurpashchim" },
// ];



// Filter Hydropowers based on Districts 

export const DistrictCheckBox = () => {
    const [optionsVisible, setOptionsVisible] = useState(false);
    const { checkedFilters, setCheckedFilters } = useFilterContext();
    // console.log("Districts: => ", districts);
    const toggleVisibility = () => {
        setOptionsVisible(!optionsVisible);
    };

    const handleCheckboxChange = (event: any) => {
        const { value, checked } = event.target;
        if (checked) {
            setCheckedFilters((prev) => [...prev, value]);
        } else {
            setCheckedFilters((prev) => prev.filter((district) => district !== value));
        }
    };

    console.log("Checked Filters", checkedFilters);

    const hasProvinceFilter = checkedFilters.some(filter => filter.includes("Province"));

    let filteredDistricts;
    if (hasProvinceFilter) {
        filteredDistricts = Array.from(new Set(hydroData.filter((data: any) => checkedFilters.includes(data.Province)).map((data: any) => data.District)));
    } else {
        // No province filter selected, return all districts
        filteredDistricts = Array.from(new Set(hydroData.map((data: any) => data.District)));
    }
    // if (hasProvinceFilter) {
    //     filteredDistricts
    // }
    console.log(filteredDistricts)
    return (
        <div className="relative  mb-3 flex flex-col align-center justify-center flex flex-col align-center justify-center">
            <button
                onClick={toggleVisibility}
                className="inline-flex items-center px-4 py-3 border border-gray-400 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-blue-200"
                type="button"
            >
                Select Districts
                <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {optionsVisible && (
                <div style={{ zIndex: 100000 }} className="absolute top-full p-2 mt-4 rounded-lg shadow border border-gray-400 bg-gray-200 text-sm">
                    <ul className="p-2 h-96 overflow-y-auto">
                        {filteredDistricts.map((district: any, index) => (
                            <li key={index}>
                                <label className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-white">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                        value={district}
                                        onChange={handleCheckboxChange}
                                        checked={checkedFilters.includes(district)}
                                    />
                                    <span className="ms-2">{district}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const districts = [
    { "value": "DARCHULA", "label": "darchula" },
    { "value": "SOLUKHUMBU", "label": "solukhumbu" },
    { "value": "PALPA", "label": "palpa" },
    { "value": "GORKHA", "label": "gorkha" },
    { "value": "SYANGJA", "label": "syangja" },
    { "value": "NUWAKOT", "label": "nuwakot" },
    { "value": "DHADING", "label": "dhading" },
    { "value": "SANKHUWASABHA", "label": "sankhuwasabha" },
    { "value": "NAWALPARASI_E", "label": "nawalparasi_e" },
    { "value": "BAGLUNG", "label": "baglung" },
    { "value": "MYAGDI", "label": "myagdi" },
    { "value": "LALITPUR", "label": "lalitpur" },
    { "value": "SINDHUPALCHOK", "label": "sindhupalchok" },
    { "value": "KASKI", "label": "kaski" },
    { "value": "ACHHAM", "label": "achham" },
    { "value": "JAJARKOT", "label": "jajarkot" },
    { "value": "DOLPA", "label": "dolpa" },
    { "value": "RUKUM_W", "label": "rukum_w" },
    { "value": "RASUWA", "label": "rasuwa" },
    { "value": "RAMECHHAP", "label": "ramechhap" },
    { "value": "BAJHANG", "label": "bajhang" },
    { "value": "DOLAKHA", "label": "dolakha" },
    { "value": "LAMJUNG", "label": "lamjung" },
    { "value": "MANANG", "label": "manang" },
    { "value": "PANCHTHAR", "label": "panchthar" },
    { "value": "GULMI", "label": "gulmi" },
    { "value": "ROLPA", "label": "rolpa" },
    { "value": "OKHALDHUNGA", "label": "okhaldhunga" },
    { "value": "RUKUM_E", "label": "rukum_e" },
    { "value": "NAWALPARASI_W", "label": "nawalparasi_w" },
    { "value": "TAPLEJUNG", "label": "taplejung" },
    { "value": "JUMLA", "label": "jumla" },
    { "value": "ARGHAKHANCHI", "label": "arghakhanchi" },
    { "value": "HUMLA", "label": "humla" },
    { "value": "BHOJPUR", "label": "bhojpur" },
    { "value": "PYUTHAN", "label": "pyuthan" },
    { "value": "ILAM", "label": "ilam" },
    { "value": "MUSTANG", "label": "mustang" },
    { "value": "KAILALI", "label": "kailali" },
    { "value": "MUGU", "label": "mugu" },
    { "value": "TERHATHUM", "label": "terhathum" },
    { "value": "MAKAWANPUR", "label": "makwanpur" },
    { "value": "KABHREPALANCHOK", "label": "kabhrepalanchok" },
    { "value": "KALIKOT", "label": "kalikot" },
    { "value": "KHOTANG", "label": "khotang" },
    { "value": "PARBAT", "label": "parbat" },
    { "value": "TANAHU", "label": "tanahu" },
    { "value": "BAJURA", "label": "bajura" },
    { "value": "DAILEKH", "label": "dailekh" },
    { "value": "CHITAWAN", "label": "chitawan" },
    { "value": "DOTI", "label": "doti" },
    { "value": "RUPANDEHI", "label": "rupandehi" },
    { "value": "SURKHET", "label": "surkhet" },
    { "value": "DHANKUTA", "label": "dhankuta" }
];





export const LicenseTypeCheckBox = () => {
    const [optionsVisible, setOptionsVisible] = useState(false);
    const { checkedFilters, setCheckedFilters } = useFilterContext();

    const toggleVisibility = () => {
        setOptionsVisible(!optionsVisible);
    };

    const handleCheckboxChange = (event: any) => {
        const { value, checked } = event.target;
        if (checked) {
            setCheckedFilters((prev) => [...prev, value]);
        } else {
            setCheckedFilters((prev) => prev.filter((licenseType) => licenseType !== value));
        }
    };

    return (
        <div className="relative mb-3 ml-5 flex flex-col align-center justify-center">
            <button
                onClick={toggleVisibility}
                className="inline-flex items-center px-4 py-3 border border-gray-400 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-blue-200"
                type="button"
            >
                Select License Type
                <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {optionsVisible && (
                <div style={{ zIndex: 100000 }} className="absolute top-full mt-4 p-2  rounded-lg shadow border border-gray-400 bg-gray-200 text-sm">
                    <ul className="p-2 h-42 overflow-y-auto">
                        <li>
                            <label className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-white">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                    value="Survey"
                                    onChange={handleCheckboxChange}
                                    checked={checkedFilters.includes("Survey")}
                                />
                                <span className="ms-2">Survey</span>
                            </label>
                        </li>
                        <li>
                            <label className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-white">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                    value="Generation"
                                    onChange={handleCheckboxChange}
                                    checked={checkedFilters.includes("Generation")}
                                />
                                <span className="ms-2">Construction</span>
                            </label>
                        </li>
                        <li>
                            <label className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-white">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                    value="Operation"
                                    onChange={handleCheckboxChange}
                                    checked={checkedFilters.includes("Operation")}
                                />
                                <span className="ms-2">Operation</span>
                            </label>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};




// Capacity range filtration

export const CapacityFilter = () => {
    const [optionsVisible, setOptionsVisible] = useState(false);
    const { checkedFilters, setCheckedFilters } = useFilterContext();

    const toggleVisibility = () => {
        setOptionsVisible(!optionsVisible);
    };


    const handleRadioChange = (event: any) => {
        setCheckedFilters([event.target.value]);
    };

    return (
        <>
            <div className="relative mb-3 ml-5 flex flex-col align-center justify-center">
                <button
                    onClick={toggleVisibility}
                    className="inline-flex items-center px-4 py-3 border border-gray-400 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-blue-200"
                    type="button"
                >
                    Choose Capacity Range
                    <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>
                {optionsVisible && (
                    <div style={{ zIndex: 100000 }} className="absolute top-full h-44 mt-4 p-2 w-48 rounded-lg shadow border border-gray-400 bg-gray-200 text-sm">
                        <ul className="p-2 h-64 overflow-y-auto">
                            <li>
                                <label className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-white">
                                    <input
                                        type="radio"
                                        name="capacity"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                        value="lessThan20"
                                        onChange={handleRadioChange}
                                        checked={checkedFilters.includes("lessThan20")}
                                    />
                                    <span className="ms-2">Less than 20 MW</span>
                                </label>
                            </li>
                            <li>
                                <label className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-white">
                                    <input
                                        type="radio"
                                        name="capacity"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                        value="20to50"
                                        onChange={handleRadioChange}
                                        checked={checkedFilters.includes("20to50")}
                                    />
                                    <span className="ms-2">20 MW - 50 MW</span>
                                </label>
                            </li>
                            <li>
                                <label className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-white">
                                    <input
                                        type="radio"
                                        name="capacity"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                        value="50to100"
                                        onChange={handleRadioChange}
                                        checked={checkedFilters.includes("50to100")}
                                    />
                                    <span className="ms-2">50 MW - 100 MW</span>
                                </label>
                            </li>
                            <li>
                                <label className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-white">
                                    <input
                                        type="radio"
                                        name="capacity"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                        value="above100"
                                        onChange={handleRadioChange}
                                        checked={checkedFilters.includes("above100")}
                                    />
                                    <span className="ms-2">Above 100 MW</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>

    );

}

