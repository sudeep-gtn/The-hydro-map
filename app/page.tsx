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

import { HydropowerProvider } from "@/components/hydroDetails/HydroContext"; // Context for Marker click sidebar details
import { ProvinceProvider } from '@/components/filterBars/CheckBox';

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


const Home: React.FC<{}> = () => {
  return (
    <HydropowerProvider>
      <ProvinceProvider>
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
            <div className="col-span-1 ">
              <HydropowerDetailsSidebar />
              <div>
                <PieChart />
              </div>
            </div>
          </div>
        </div>
      </ProvinceProvider>
    </HydropowerProvider>
  );
};

export default Home;
