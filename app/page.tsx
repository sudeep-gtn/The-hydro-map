'use client';
import React, { useState, useEffect } from 'react';
import { redirect } from "next/navigation";

import dynamic from 'next/dynamic'
import Nav from "@/components/navb/Nav";
import 'tailwindcss/tailwind.css';


import { HydropowerProvider } from "@/components/hydroDetails/HydroContext"; // Context for Marker click sidebar details
import { ProvinceProvider } from '@/components/filterBars/CheckBox';

import HydropowerDetailsSidebar from "@/components/hydroDetails/HydroSidebarDetails";


import PieChart from "@/components/charts/PieChart";
import Example from "@/components/filterBars/FilterBar";
import FilterContainerBar from "@/components/filterBars/FilterBar";

const Map2 = dynamic(() => import('../components/maps/Map'), {
  ssr: false,
})


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

  useEffect(() => {
    const storedData = localStorage.getItem("userData");

    if (!storedData) {
      redirect('/register');
    }
  }, []);

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
