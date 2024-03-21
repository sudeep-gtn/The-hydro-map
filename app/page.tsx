'use client';

import Image from "next/image";
import React, { useState, createContext, useContext } from 'react';

import dynamic from 'next/dynamic'
import Head from "next/head";
// import Nav from '../components/Nav';
import Nav from "@/components/navb/Nav";
import 'tailwindcss/tailwind.css';

// import {useHydropower, HydropowerProvider } from "@/components/HydroContext";// import Map2 from '../components/Map'

// let { hydropowerData } = useHydropower();

import { HydropowerProvider } from "@/components/hydroDetails/HydroContext";
import HydropowerDetailsSidebar from "@/components/hydroDetails/HydroSidebarDetails";


import PieChart from "@/components/charts/PieChart";
import Example from "@/components/filterBars/FilterBar";
import FilterContainerBar from "@/components/filterBars/FilterBar";

const Map2 = dynamic(() => import('../components/maps/Map'), {
  ssr: false,
})

// import {useHydropower, HydropowerProvider } from "@/components/HydroContext";// import Map2 from '../components/Map'

// let { hydropowerData } = useHydropower();

// Context fof Search Result

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

interface SelectedProjectContextType {
  selectedProject: Project | null;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
}

const SelectedProjectContext = createContext<
  SelectedProjectContextType | undefined
>(undefined);

export const useSelectedProject = () => {
  const context = useContext(SelectedProjectContext);
  if (!context) {
    throw new Error(
      "useSelectedProject must be used within a SelectedProjectProvider"
    );
  }
  return context;
};

export const SelectedProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};

const Home: React.FC<{}> = () => {
  return (
    <SelectedProjectProvider>
      <HydropowerProvider>
        {/* header section */}
        <div className="bg-gray-200 ">
          <Nav />
          <FilterContainerBar />

          {/* Body */}
          <div className="grid grid-cols-4 gap-4 ">
            {/* map Container */}
            <div className="col-span-3">
              <Map2 />
            </div>

            {/* Side Bar Details */}
            <div className="col-span-1 mr-5">
              <div>
                <HydropowerDetailsSidebar />
              </div>
              <div className="">
                <div className="text-center rounded font-semibold text-lg p-4 border-b border-gray-400 mt-4 bg-blue-200">
                  {" "}
                  Hydropower Distribution{" "}
                </div>
                <PieChart />
              </div>
            </div>
          </div>
        </div>
      </HydropowerProvider>
    </SelectedProjectProvider>
  );
};

export default Home;
