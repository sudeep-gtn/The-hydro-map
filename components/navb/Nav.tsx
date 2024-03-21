'use client'; XMarkIcon

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Nav() {
  return (
    <header className="flex flex-row text-xl border-b border-gray-500 bg-gray-00 p-1 mb-3  justify-between">
      <nav className="flex font-bold justify-center items-center">
        Hydropowers of Nepal
      </nav>
      <div className="text-lg font-medium flex justify-center items-center gap-6 p-3">
        <Link href='/' passHref ><span className="border-b-2 border-transparent hover:border-blue-400 transition duration-300 ease-in-out">Map</span></Link>
        <Link href='/data'><span className="border-b-2 border-transparent hover:border-blue-400 transition duration-300 ease-in-out">Data</span></Link>
        <Link href='/about'><span className="border-b-2 border-transparent hover:border-blue-400 transition duration-300 ease-in-out mr-4">About</span></Link>
      </div>
    </header>

  )
}

