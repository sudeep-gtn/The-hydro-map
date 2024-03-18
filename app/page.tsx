'use client';

import Image from "next/image";
import React, { useState } from 'react';

import dynamic from 'next/dynamic'
import Head from "next/head";
import Nav from '../components/Nav';

import '../styles/chart.css';
import 'tailwindcss/tailwind.css';

// import {useHydropower, HydropowerProvider } from "@/components/HydroContext";// import Map2 from '../components/Map'

// let { hydropowerData } = useHydropower();


import HydropowerDetailsSidebar from "@/components/HydroContext";


import PieChart from "@/components/charts/PieChart";

const Map2 = dynamic(() => import('../components/Map'), {
  ssr: false,
})
const Home: React.FC<{}> = () => {
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-4 gap-4 z-0 ">
        <div className="col-span-3 ml-0 ">
          <Map2 />
        </div>
        <div className="col-span-1">
          <HydropowerDetailsSidebar />
          <div className="charts container border border-black-800 mt-2 rounded bg-gray-100">
            <div className="text-center font-semibold text-lg p-4 border-b border-gray-200 bg-gray-200"> Hydropower Status </div>
            <PieChart />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
