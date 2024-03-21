import React, { useState } from "react";

// Importing hydroData doesn't seem to be used in this component

export default function ProvinceCheckBox() {
    const [optionsVisible, setOptionsVisible] = useState(false);

    const toggleVisibility = () => {
        setOptionsVisible(!optionsVisible);
    };

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
    { value: "koshi", label: "Koshi Province" },
    { value: "madhesh", label: "Madhesh" },
    { value: "bagmati", label: "Bagmati" },
    { value: "gandaki", label: "Gandaki" },
    { value: "lumbini", label: "Lumbini" },
    { value: "karnali", label: "Karnali" },
    { value: "sudurpashchim", label: "Sudurpashchim" },
];




