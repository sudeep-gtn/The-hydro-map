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

    const filteredData = hydroData.filter((item: HydroData) => checkedFilters.includes(item.Province));
    return (
        <div className="relative mb-3 w-48">
            <button
                onClick={toggleVisibility}
                className="inline-flex items-center px-4 py-3 border border-gray-400 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-blue-200"
                type="button"
            >
                Select Province
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
                <div style={{ zIndex: 100000 }} className="absolute top-full mt-4 p-2 w-48 rounded-lg shadow border border-gray-400 bg-gray-200 text-sm">
                    <ul className="p-2 h-64 overflow-y-auto">
                        {provinces.map((province, index) => (
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

const provinces = [
    { value: "Province 1", label: "Koshi" },
    { value: "Province 2", label: "Madhesh" },
    { value: "Province 3", label: "Bagmati" },
    { value: "Province 4", label: "Gandaki" },
    { value: "Province 5", label: "Lumbini" },
    { value: "Province 6", label: "Karnali" },
    { value: "Province 7", label: "Sudurpashchim" },
];



// Filter Hydropowers based on Districts 

export const DistrictCheckBox = () => {
    const [optionsVisible, setOptionsVisible] = useState(false);
    const { checkedFilters, setCheckedFilters } = useFilterContext();
    console.log("Districts: => ", districts);
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
    console.log("Checked Filters : ", checkedFilters);
    return (
        <div className="relative mb-3">
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
                <div style={{ zIndex: 100000 }} className="absolute top-full mt-4 p-2  rounded-lg shadow border border-gray-400 bg-gray-200 text-sm">
                    <ul className="p-2 h-96 overflow-y-auto">
                        {districts.map((district, index) => (
                            <li key={index}>
                                <label className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-white">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                        value={district.value}
                                        onChange={handleCheckboxChange}
                                        checked={checkedFilters.includes(district.value)}
                                    />
                                    <span className="ms-2">{district.label}</span>
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
    { value: "achham", label: "Achham" },
    { value: "arghakhanchi", label: "Arghakhanchi" },
    { value: "baglung", label: "Baglung" },
    { value: "baitadi", label: "Baitadi" },
    { value: "bajhang", label: "Bajhang" },
    { value: "bajura", label: "Bajura" },
    { value: "banke", label: "Banke" },
    { value: "bara", label: "Bara" },
    { value: "bardiya", label: "Bardiya" },
    { value: "bhaktapur", label: "Bhaktapur" },
    { value: "bhojpur", label: "Bhojpur" },
    { value: "chitwan", label: "Chitwan" },
    { value: "dadeldhura", label: "Dadeldhura" },
    { value: "dailekh", label: "Dailekh" },
    { value: "dang deukhuri", label: "Dang Deukhuri" },
    { value: "darchula", label: "Darchula" },
    { value: "dhading", label: "Dhading" },
    { value: "dhankuta", label: "Dhankuta" },
    { value: "dhanusa", label: "Dhanusa" },
    { value: "dholkha", label: "Dholkha" },
    { value: "dolpa", label: "Dolpa" },
    { value: "doti", label: "Doti" },
    { value: "gorkha", label: "Gorkha" },
    { value: "gulmi", label: "Gulmi" },
    { value: "humla", label: "Humla" },
    { value: "ilam", label: "Ilam" },
    { value: "jajarkot", label: "Jajarkot" },
    { value: "jhapa", label: "Jhapa" },
    { value: "jumla", label: "Jumla" },
    { value: "kailali", label: "Kailali" },
    { value: "kalikot", label: "Kalikot" },
    { value: "kanchanpur", label: "Kanchanpur" },
    { value: "kapilvastu", label: "Kapilvastu" },
    { value: "kaski", label: "Kaski" },
    { value: "kathmandu", label: "Kathmandu" },
    { value: "kavrepalanchok", label: "Kavrepalanchok" },
    { value: "khotang", label: "Khotang" },
    { value: "lalitpur", label: "Lalitpur" },
    { value: "lamjung", label: "Lamjung" },
    { value: "mahottari", label: "Mahottari" },
    { value: "makwanpur", label: "Makwanpur" },
    { value: "manang", label: "Manang" },
    { value: "morang", label: "Morang" },
    { value: "mugu", label: "Mugu" },
    { value: "mustang", label: "Mustang" },
    { value: "myagdi", label: "Myagdi" },
    { value: "nawalparasi", label: "Nawalparasi" },
    { value: "nuwakot", label: "Nuwakot" },
    { value: "okhaldhunga", label: "Okhaldhunga" },
    { value: "palpa", label: "Palpa" },
    { value: "panchthar", label: "Panchthar" },
    { value: "parbat", label: "Parbat" },
    { value: "parsa", label: "Parsa" },
    { value: "pyuthan", label: "Pyuthan" },
    { value: "ramechhap", label: "Ramechhap" },
    { value: "rasuwa", label: "Rasuwa" },
    { value: "rautahat", label: "Rautahat" },
    { value: "rolpa", label: "Rolpa" },
    { value: "rukum", label: "Rukum" },
    { value: "rupandehi", label: "Rupandehi" },
    { value: "salyan", label: "Salyan" },
    { value: "sankhuwasabha", label: "Sankhuwasabha" },
    { value: "saptari", label: "Saptari" },
    { value: "sarlahi", label: "Sarlahi" },
    { value: "sindhuli", label: "Sindhuli" },
    { value: "sindhupalchok", label: "Sindhupalchok" },
    { value: "siraha", label: "Siraha" },
    { value: "solukhumbu", label: "Solukhumbu" },
    { value: "sunsari", label: "Sunsari" },
    { value: "surkhet", label: "Surkhet" },
    { value: "syangja", label: "Syangja" },
    { value: "tanahu", label: "Tanahu" },
    { value: "taplejung", label: "Taplejung" },
    { value: "terhathum", label: "Terhathum" },
    { value: "udayapur", label: "Udayapur" }
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
        <div className="relative mb-3">
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