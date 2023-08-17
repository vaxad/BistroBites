"use client"
import useStore from '../../lib/zustand/store'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
  const { cart } = useStore()
  const [show, setShow] = useState(false)
  return (
    <div id='navbar' className='z-50'>

      <nav className=" bg-black sticky top-0 border-gray-200 h-full dark:bg-transparent">
        <div className="max-w-screen-xl h-full flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            {/* img */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BistroBites</span>
          </Link>
          {!show && <button onClick={() => { setShow(!show) }} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>}
          <div id="menu" className={` ${show ? ' ' : 'hidden'} flex justify-center lg:flex `}>
            <button onClick={() => setShow(!show)} className={`${!show ? 'hidden' : ''} sm:block md:hidden p-2 bg-slate-900 text-gray-100 hover:text-gray-400 rounded-lg focus:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 `}>
              <svg aria-label="close main menu" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </button>
          </div>
          <div className=' lg:flex lg:flex-row hidden justify-center items-center'>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 ">
              <li className=' flex justify-center items-center'>
                <Link href="/" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white  hover:scale-110 transition-all" aria-current="page">Home</Link>
              </li>
              <li className=' flex justify-center items-center'>
                <Link href="/showcase" className="block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:bg-transparent md:border-0  md:p-0 dark:text-white hover:scale-110 transition-all ">Order</Link>
              </li>
              <li className=' flex justify-center items-center'>
                <Link href="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:bg-transparent md:border-0  md:p-0 dark:text-white hover:scale-110 transition-all ">Contact</Link>
              </li>
            </ul>
            </div>
        </div>
      </nav>
      <div id="" className={` ${show ? ' ' : 'hidden'} w-full lg:hidden flex justify-end z-50`}>
        <div className=' justify-center items-center w-fit bg-black  rounded-b-xl bg-opacity-50 z-50'>
      <ul className="font-medium flex flex-col p-4 md:p-0 rounded-lg md:flex-row md:space-x-8 md:mt-0 ">
              <li className=' flex justify-center items-center'>
                <Link href="/" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white  hover:scale-110 transition-all" aria-current="page">Home</Link>
              </li>
              <li className=' flex justify-center items-center'>
                <Link href="/showcase" className="block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:bg-transparent md:border-0  md:p-0 dark:text-white hover:scale-110 transition-all ">Order</Link>
              </li>
              <li className=' flex justify-center items-center'>
                <Link href="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:bg-transparent md:border-0  md:p-0 dark:text-white hover:scale-110 transition-all ">Contact</Link>
              </li>
            </ul>
            </div>
            </div>
    </div>
  )
}
