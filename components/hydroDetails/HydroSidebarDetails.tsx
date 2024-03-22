'use client';

import React, { useEffect, useState } from "react";
import { useHydropower } from "./HydroContext";

const HydropowerDetailsSidebar = () => {
  const { selectedHydropower } = useHydropower();
  const excludedKeys = ['Latitude', 'Longitude', 'Project'];
  const renderDetails = () => {
    if (!selectedHydropower) return null;

    return Object.keys(selectedHydropower)
      .filter(key => !excludedKeys.includes(key)) // Filter out excluded keys
      .map((key, index) => (
        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
          <td className="py-3 px-4 text-left font-bold text-gray-600 w-1/3">
            {key}
          </td>
          <td className="py-3 px-4 text-left">{selectedHydropower[key]}</td>
        </tr>
      ));
  };
  return (
    <>
      <div className="bg-blue-200 rounded">
        <p className="text-center h-14 font-semibold text-lg p-4 border-b border-gray-400">
          {selectedHydropower
            ? selectedHydropower.Project
            : "No data selected"}
        </p>
      </div>
      <div className="border border-gray-300 shadow-sm overflow-y-scroll h-96 mx-auto static">
        <table className="w-full text-sm leading-5 z-0">
          <tbody>
            {selectedHydropower ? renderDetails() : "404 DATA NOT FOUND !! "}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HydropowerDetailsSidebar;
