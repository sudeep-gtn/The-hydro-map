'use client';

import Image from "next/image";
import React, { useState } from 'react';

import dynamic from 'next/dynamic'
import Head from "next/head";
import Nav from '../components/Nav';
import {useHydropower, HydropowerProvider} from "@/components/HydroContext";

const {hydroData} = useHydropower(); 

// import Map2 from '../components/Map'
const Map2 = dynamic(() => import('../components/Map'), {
  ssr: false,
})
const Home: React.FC<{}> = () => {
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-4 mr-10 ">
        <div className="col-span-3 ml-0">
          <Map2 />
        </div>
        <div className="col-span-1">     
            <HydropowerProvider />
        </div>
      </div>

    </div>
  );
}

export default Home;
