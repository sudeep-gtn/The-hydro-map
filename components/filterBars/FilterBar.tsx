"use client";

import { useContext, useState, createContext } from "react";

import hydroData from "../../data/hydro/hydropwers.json";

import { DropDown } from "./DropDownOptions";
import { ProvinceCheckBox, DistrictCheckBox, LicenseTypeCheckBox, CapacityFilter } from './CheckBox';
import { useFilterContext } from "./CheckBox";

interface Project {
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

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  // Function to filter projects based on search query
  const filteredProjects = hydroData.filter((project) =>
    project.Project.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const fakeData = {
    Project: "string",
    Province: "string",
    District: "string",
    Municipality: " string",
    Capacity: 12,
    River: "string",
    LicenseNo: 555,
    IssueDate: "string",
    Validity: "string",
    Promoter: "string",
  };
  // setSelectedProject(fakeData);

  return (
    <div className="relative bg-gray-200 rounded-lg pb-2">
      <div className="relative bg-inherit px-4 ">
        <input
          type="text"
          id="search"
          name="search"
          className="peer bg-transparent bg-gray-100 h-10 text-base w-72 rounded-lg text-gray-800 placeholder-transparent ring-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowResults(true)}
          autoComplete="off"
          onBlur={() => setShowResults(false)}
          style={{
            fontSize: "14px",
            paddingLeft: "10px",
          }}
        />
        <label
          htmlFor="search"
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-6 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
        >
          Search
        </label>
      </div>

      {/* Display filtered projects only when showResults is true */}
      {showResults && (
        <ul
          style={{ zIndex: 10000 }}
          className="absolute mt-4 w-96 max-h-72 overflow-y-hidden text-base bg-gray-200 shadow-lg shadow-black-700/50 rounded-lg shadow-md border border-gray-300"
        >
          {filteredProjects.map((project, index) => (
            <li
              onClick={() => console.log('Clicked Finally !!')}
              key={index}
              className="text-gray-800 px-4 py-2 border-b border-gray-300 hover:bg-gray-100"
            >
              {" "}
              <button >{project.Project}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// -----------------Clear all searches--------------------

export function ClearFilters() {
  const { setCheckedFilters } = useFilterContext();
  const clearAllFilters = () => {
    // Reset all filters to initial values
    setCheckedFilters([]);
  };
  return (
    <div className="relative">
      <button
        onClick={clearAllFilters}
        className=" py-2 px-2 items-center border border-gray-400 text-sm font-medium text-center text-gray-900 bg-blue-100 rounded-lg hover:bg-blue-200 "
        type="button"
      >
        Clear Filters
      </button>
    </div>
  )
}

export default function FilterContainerBar() {
  return (
    <header
      className="flex flex-row text-xl z-10000 shadow-lg shadow-black-200/40 gap-10 align-center p-1 h-14 mb-3 justify-left ">
      {/* <FilterContents /> */}
      <SearchBar />
      {/* <DropDown /> */}
      <ProvinceCheckBox />
      <DistrictCheckBox />
      <LicenseTypeCheckBox />
      <CapacityFilter />
      <ClearFilters />
    </header >
  );
}


