"use client"
import useStore from '../../lib/zustand/store'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  const {cart}=useStore()
  return (
    <div id='navbar'>
        
<nav className="bg-transparent bg-black sticky top-0 border-gray-200 h-full dark:bg-transparent">
  <div className="max-w-screen-xl h-full flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="/" className="flex items-center">
        {/* img */}
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BistroBites</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 ">
        <li className=' flex justify-center items-center'>
          <Link href="/" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white  hover:scale-110 transition-all" aria-current="page">Home</Link>
        </li>
        <li className=' flex justify-center items-center'>
          <Link href="/showcase" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white hover:scale-110 transition-all ">Order</Link>
        </li>
        <li className=' flex justify-center items-center'>
          <Link href="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white hover:scale-110 transition-all ">Contact</Link>
        </li>
        {/* <li className=' flex justify-center items-center'>
        <button type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
  Cart
  {cart.length!==0&&<span class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-orange-800 bg-orange-200 rounded-full">
    {cart.length}
  </span>}
</button>
        </li> */}
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
