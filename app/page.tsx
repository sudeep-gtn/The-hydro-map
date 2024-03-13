import Image from "next/image";
import React from "react";
import dynamic from 'next/dynamic'
import Head from "next/head";
import Nav from '../components/Nav'
// import Map2 from '../components/Map'
const Map2 = dynamic(() => import('../components/Map'), {
  ssr: false,
})
export default function Home() {
  return (
    <div>
      <Nav />
      <Map2 />
    </div>
  );
}
