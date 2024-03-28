'use client';
XMarkIcon
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Link from 'next/link';

const storedDataString = localStorage.getItem("userData");
const storedData = storedDataString ? JSON.parse(storedDataString) : null;

export default function Nav() {

  const logOut = () => {
    localStorage.removeItem("userData");
    window.location.reload();
  };

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };


  const [open, setOpen] = React.useState(false);
  return (
    <header className="flex flex-row text-xl border-b border-gray-500 bg-gray-00 p-1 mb-3  justify-between">
      <nav className="flex font-bold justify-center items-center">
        Hydropowers of Nepal
      </nav>
      <div className="text-lg font-medium flex justify-center items-center gap-6 p-3">
        <Link href='/' passHref ><span className="border-b-2 border-transparent hover:border-blue-400 transition duration-300 ease-in-out">Map</span></Link>
        <Link href='/data'><span className="border-b-2 border-transparent hover:border-blue-400 transition duration-300 ease-in-out">Data</span></Link>
        <Link href='/about'><span className="border-b-2 border-transparent hover:border-blue-400 transition duration-300 ease-in-out mr-4">About</span></Link>
        <span
          className="w-14 relative h-14 cursor-pointer rounded-full flex items-center justify-center "
          // onClick={() => setOpen(!open)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}

        >
          <div className="w-12 h-12 rounded-full overflow-hidden border-1 border-green-500 ">
            <img className="w-full h-full object-cover" src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?w=826&t=st=1711619321~exp=1711619921~hmac=541f5344a0f62548ccbc34d4a0cdaa6d66dc3d7103a70a908213fa1fac3602c0" alt="" />
          </div>
        </span>
        <div
          className={`z-10 ${open ? 'hover:block' : 'hidden'} top-16 transition-all ease-in duration-300 right-2 absolute bg-white divide-y divide-gray-300 rounded-lg shadow w-48`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <div className="px-4 py-3 text-gray-900">
            <div className="text-medium truncate">Hi, {storedData ? storedData.firstName : ''}</div>
            <div className="text-sm truncate">{storedData ? storedData.email : ''}</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition-all duration-300 ease-in-out hover:text-lg">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition-all duration-300 ease-in-out hover:text-lg">Settings</a>
            </li>
          </ul>
          <div
            className="py-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <button onClick={logOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500 hover:text-lg transition-all duration-300 ease-in-out w-full">Sign out</button>
          </div>
        </div>
      </div>
    </header>

  )
}

