import React, { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

export default function ProvinceCheckBox() {
    const [optionsVisible, setOptionsVisible] = useState(false);
    const toggleVisibility = () => {
        setOptionsVisible(!optionsVisible);
    };
    return (
        <div style={{ zIndex: 1000000000 }} className="flex flex-col justify-center align-middle mb-3 w-48">
            <button onClick={() => toggleVisibility()} id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" className="inline-flex items-center px-4 py-3 border border-gray-400 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-blue-200 " type="button">Select Province<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg></button>

            <div className={`${optionsVisible ? "" : "hidden"}  rounded-lg shadow w-60 `}>
                <ul className="absolute text-ba h-64 px-3 pb-3 border border-gray-400 rounded-lg overflow-y-auto bg-gray-200 text-sm " aria-labelledby="dropdownSearchButton">
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-white">
                            <input id="checkbox-item-11" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 " />
                            <label htmlFor="checkbox-item-11" className="w-full ms-2 text-sm font-medium text-black-900 rounded ">Koshi Province </label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-white">
                            <input id="checkbox-item-11" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 " />
                            <label htmlFor="checkbox-item-11" className="w-full ms-2 text-sm font-medium text-black-900 rounded ">Province 2 </label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-white">
                            <input id="checkbox-item-11" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 " />
                            <label htmlFor="checkbox-item-11" className="w-full ms-2 text-sm font-medium text-black-900 rounded ">Bagmati Province </label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-white">
                            <input id="checkbox-item-11" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 " />
                            <label htmlFor="checkbox-item-11" className="w-full ms-2 text-sm font-medium text-black-900 rounded "> Province 4 </label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-white">
                            <input id="checkbox-item-11" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 " />
                            <label htmlFor="checkbox-item-11" className="w-full ms-2 text-sm font-medium text-black-900 rounded "> Province 5 </label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-white">
                            <input id="checkbox-item-11" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 " />
                            <label htmlFor="checkbox-item-11" className="w-full ms-2 text-sm font-medium text-black-900 rounded "> Province 6 </label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-white">
                            <input id="checkbox-item-11" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 " />
                            <label htmlFor="checkbox-item-11" className="w-full ms-2 text-sm font-medium text-black-900 rounded "> Province 7 </label>
                        </div>
                    </li>

                </ul>
            </div>

        </div>
    );
}