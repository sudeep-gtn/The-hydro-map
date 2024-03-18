'use client'; XMarkIcon

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';

import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// export default function Example() {
//   return (
//     <div className="flex h-screen z-0">
//       <div className="hidden md:flex flex-col w-64 bg-gray-800">
//         <div className="flex items-center justify-center h-16 bg-gray-900">
//           <span className="text-white font-bold uppercase">Hydro Map</span>
//         </div>
//         <div className="flex flex-col flex-1 overflow-y-auto">
//           <nav className="flex-1 px-2 py-4 bg-gray-800">
//             <a href="/" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
//                 stroke="currentColor">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                   d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//               Dashboard
//             </a>
//             <a href="/" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
//                 stroke="currentColor">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                   d="M6 18L18 6M6 6l12 12" />
//               </svg>
//               Datasets
//             </a>
//             <a href="/" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
//                 stroke="currentColor">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                   d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               Documents
//             </a>
//           </nav>
//         </div>
//       </div>

//       <div className="flex flex-col flex-1 overflow-y-auto">
//         <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
//           <div className="flex items-center px-4">
//             <button className="text-gray-500 hover:outline-none hover:text-gray-700">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
//                 stroke="currentColor">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                   d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//             <input className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search" />
//           </div>

//           {/* -------------------- */}
//           <div className="flex items-center pr-4">
//             <span className="ml-3 hidden sm:block">
//               <Link href='/about'>
//                 <button
//                   type="button"
//                   className={`inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
//                 >
//                   About
//                 </button>
//               </Link>
//             </span>
//             <span className="sm:ml-3">
//               <Link href='/hydropowers'>
//                 <button
//                   type="button"
//                   className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   Map
//                 </button>
//               </Link>
//             </span>
//           </div>
//           {/* -------------------- */}

//         </div>
//       </div>
//     </div>
//   )
// }
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// function classNames(...classes: any) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Demo() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between m-3 w-full p-4 shadow-xl z-50">
      <Link href='/'>
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            HydroMap
          </h2>
        </div>
      </Link>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="hidden sm:block">
          <Link href='/about'>
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-blue-100 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
            >
              About
            </button>
          </Link>
        </span>

        <span className="ml-3 hidden sm:block">
          <Link href='/data'>
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-blue-100 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              Data
            </button>
          </Link>
        </span>
        <span className="sm:ml-3">
          <Link href='/hydropowers'>
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-blue-100 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              Map
            </button>
          </Link>
        </span>
      </div>
    </div>
  )
}

