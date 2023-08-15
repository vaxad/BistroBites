"use client"

import useStore from '../../lib/zustand/store';
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Link from 'next/link'

export default function Home() {
    const {cart,setCart} = useStore();
    useEffect(() => {
      setCart([])
    }, [setCart])
    
    
  return (
    <div id='home' className='overlay'>
        <Navbar/>
        <section className="bg-transparent h-full ">
    <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-12">
        <Link href="/showcase" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-orange-800 dark:text-white hover:bg-gray-200 dark:hover:bg-orange-700 transition-all" role="alert">
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Explore our latest dishes!</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </Link>
        <h1 className="mb-4 text-4xl font-extrabold  leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Finest ingredients turned into edible works of art</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-300">Indulge in a culinary journey that tantalizes your taste buds and captures your senses.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link href={'/showcase'} className="inline-flex justify-center gap-2 hover:gap-5 items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-orange-700 dark:hover:bg-orange-700 dark:focus:ring-orange-800 transition-all">
                Order now
                <div><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256"
style={{fill:"#000000"}}>
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:'normal'}}><g transform="scale(5.12,5.12)"><path d="M2,2c-1.10547,0 -2,0.89453 -2,2c0,1.10547 0.89453,2 2,2c1.10547,0 2,-0.89453 2,-2h4.65625c2.08594,0 2.88672,0.66797 3.5625,2.9375l8,32.28125c0.42578,1.60938 0.90625,3.39063 2.71875,4.25c-0.57031,0.69141 -0.9375,1.56641 -0.9375,2.53125c0,2.20703 1.79297,4 4,4c2.20703,0 4,-1.79297 4,-4c0,-0.73047 -0.21875,-1.41016 -0.5625,-2h6.125c-0.34375,0.58984 -0.5625,1.26953 -0.5625,2c0,2.20703 1.79297,4 4,4c2.20703,0 4,-1.79297 4,-4c0,-1.03906 -0.41016,-1.97656 -1.0625,-2.6875c0.03516,-0.10156 0.0625,-0.19922 0.0625,-0.3125c0,-0.55078 -0.44922,-1 -1,-1h-15.28125c-2.69531,0 -2.98828,-1.07812 -3.5625,-3.25l-0.6875,-2.75h18.34375c0.41406,0 0.79297,-0.26953 0.9375,-0.65625l7.1875,-19c0.11719,-0.30469 0.05859,-0.63672 -0.125,-0.90625c-0.18359,-0.26953 -0.48828,-0.4375 -0.8125,-0.4375h-30.71875l-2.125,-8.59375c-0.67969,-2.28906 -1.83594,-4.40625 -5.5,-4.40625zM26,44c1.10156,0 2,0.89844 2,2c0,1.10156 -0.89844,2 -2,2c-1.10156,0 -2,-0.89844 -2,-2c0,-1.10156 0.89844,-2 2,-2zM39,44c1.10156,0 2,0.89844 2,2c0,1.10156 -0.89844,2 -2,2c-1.10156,0 -2,-0.89844 -2,-2c0,-1.10156 0.89844,-2 2,-2z"></path></g></g>
</svg></div> 
            </Link> 
            {/* <Link href="/showcase" className="inline-flex justify-center hover:scale-110  transition-all items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Explore dishes
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>  */}
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-slate-200 uppercase">FEATURED IN</span>
            <div className="flex flex-wrap gap-10 flex-row justify-center items-center mt-8 text-gray-500 ">
                <a target='_blank' href="https://www.zomato.com/mumbai/meal-darbar-by-bistro-bites-virar/order" className="mr-5 mb-5 lg:mb-0 text-slate-200 flex flex-row justify-center items-center gap-4 hover:text-white hover:scale-105 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256"style={{fill:"#000000"}}>
<g fill="#ff5050" fill-rule="nonzero" stroke="none" stroke-width={1} stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:'normal'}}><g transform="scale(5.12,5.12)"><path d="M9,4.5c-2.481,0 -4.5,2.019 -4.5,4.5v32c0,2.481 2.019,4.5 4.5,4.5h32c2.481,0 4.5,-2.019 4.5,-4.5v-32c0,-2.481 -2.019,-4.5 -4.5,-4.5zM36.22852,20.75781l-0.23242,1.72656h1.26367c-0.04,0.176 -0.19242,1.16084 -0.23242,1.46484h-1.23047l-0.28125,2.03906c-0.072,0.528 -0.03187,0.71289 0.32813,0.71289c0.272,0 0.6643,-0.1593 0.9043,-0.2793l-0.2168,1.31836c-0.328,0.176 -0.9423,0.43359 -1.6543,0.43359c-1.208,0 -1.45763,-0.64958 -1.26562,-2.01758l0.3125,-2.20703h-0.59961l0.16797,-1.43164l0.64844,-0.0332l0.24805,-1.03906zM30.69922,22.21484c1.18024,-0.01827 1.98566,0.46044 2.09766,1.39844c0.031,0.287 0.03805,0.59128 -0.00195,0.86328c-0.192,1.328 -0.31137,2.327 -0.35937,3c-0.008,0.104 -0.008,0.28111 0,0.53711h-1.81641c0.04,-0.104 0.07152,-0.24783 0.10352,-0.42383c0.024,-0.12 0.03283,-0.26522 0.04883,-0.44922c-0.376,0.528 -0.90436,0.84773 -1.56836,0.92773c-0.944,0.12 -1.56795,-0.25533 -1.75195,-1.11133c-0.12,-0.536 0.04812,-1.14372 0.32813,-1.51172c0.384,-0.48 0.99977,-0.78486 1.75977,-0.88086c0.608,-0.072 1.11961,-0.03936 1.59961,0.05664l0.02344,-0.08008c0.016,-0.128 0.02577,-0.26383 0.00977,-0.42383c-0.048,-0.4 -0.36834,-0.64873 -1.15234,-0.55273c-0.528,0.064 -1.03964,0.25666 -1.43164,0.47266l-0.38477,-1.15234c0.528,-0.304 1.20075,-0.53486 1.96875,-0.63086c0.183,-0.023 0.35874,-0.03645 0.52734,-0.03906zM40.26172,22.31445c1.592,0 2.37695,1.07184 2.37695,2.46484c-0.001,1.873 -1.33003,3.43359 -3.08203,3.43359c-1.576,0 -2.375,-1.07166 -2.375,-2.47266c0,-1.864 1.33508,-3.42578 3.08008,-3.42578zM23.04297,22.37109c1.048,0 1.11823,0.83252 0.99023,1.72852c0.584,-1.08 1.40973,-1.72852 2.17773,-1.72852c1.056,0 1.12623,0.85659 0.99023,1.80859l-0.6543,3.78516h-1.82422l0.47852,-3.3457c0.04,-0.328 0.04916,-0.57422 -0.21484,-0.57422c-0.456,0 -1.05541,0.88686 -1.19141,1.63086l-0.16797,1.15234c-0.056,0.408 -0.12091,0.86434 -0.12891,1.15234h-2c0.112,-0.48 0.2165,-1.24048 0.3125,-1.89648l0.19141,-1.29687c0.072,-0.48 0.08041,-0.73437 -0.18359,-0.73437c-0.456,0 -1.05541,0.88686 -1.19141,1.63086l-0.16992,1.15234c-0.048,0.408 -0.12676,0.86434 -0.13477,1.15234h-1.97656c0.112,-0.48 0.2165,-1.24048 0.3125,-1.89648l0.24805,-1.67187c0.096,-0.632 0.12752,-1.30441 0.10352,-1.81641c0.744,-0.016 1.27286,-0.07178 1.88086,-0.17578c0.048,0.176 0.07973,1.01595 -0.07227,1.75195c0.584,-1.128 1.44061,-1.80859 2.22461,-1.80859zM15.91211,22.38867c1.576,0 2.35352,1.05583 2.35352,2.42383c-0.001,1.849 -1.30502,3.39258 -3.04102,3.39258c-1.552,0 -2.35351,-1.05545 -2.35351,-2.43945c0,-1.84 1.32002,-3.37695 3.04102,-3.37695zM12.90234,22.51563l-0.0332,1.01563l-2.64844,2.88086c1.104,0 1.80898,-0.00725 2.20899,-0.03125c-0.118,0.544 -0.21455,0.99206 -0.31055,1.66406c-0.528,-0.048 -1.35941,-0.05664 -2.19141,-0.05664c-0.928,0 -1.73577,0.00864 -2.38477,0.05664l0.02344,-1.02344l2.64844,-2.86523c-1.16,0 -1.58445,0.00744 -2.06445,0.02344c0.104,-0.512 0.18386,-1.08044 0.25586,-1.64844c0.848,0.016 1.18348,0.0332 2.27148,0.0332c1.016,0 1.58461,-0.01683 2.22461,-0.04883zM15.71289,23.86719c-0.512,0 -0.92969,0.81603 -0.92969,1.83203c0,0.68 0.22537,1.02539 0.60938,1.02539c0.512,0 0.91211,-0.82403 0.91211,-1.83203c0,-0.688 -0.2238,-1.02539 -0.5918,-1.02539zM40.02148,23.86719c-0.512,0 -0.92773,0.81603 -0.92773,1.83203c0,0.68 0.22342,1.02539 0.60742,1.02539c0.512,0 0.91211,-0.82403 0.91211,-1.83203c0,-0.688 -0.2238,-1.02539 -0.5918,-1.02539zM30.52539,25.42773c-0.19,-0.014 -0.39375,-0.01423 -0.59375,0.00977c-0.384,0.048 -0.70505,0.20745 -0.87305,0.43945c-0.128,0.168 -0.19197,0.36761 -0.16797,0.59961c0.04,0.352 0.43267,0.62436 0.88867,0.56836c0.672,-0.08 1.12823,-0.72719 1.24023,-1.36719l0.01563,-0.17578c-0.144,-0.032 -0.31977,-0.06022 -0.50977,-0.07422z"></path></g></g>
</svg>         Zomato              
                </a>
                <a target='_blank' href="https://www.swiggy.com/restaurants/the-big-fat-sandwich-by-bistro-bites-chintamani-vihar-virar-mumbai-668376" className="mr-5 mb-5 lg:mb-0 text-slate-200  flex flex-row justify-center items-center gap-4 hover:text-white hover:scale-105 transition-all">
                <svg height="50" viewBox="-7.3 3.6 2520.1 3702.8" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m1255.2 3706.3c-2.4-1.7-5-4-7.8-6.3-44.6-55.3-320.5-400.9-601.6-844.2-84.4-141.2-139.1-251.4-128.5-279.9 27.5-74.1 517.6-114.7 668.5-47.5 45.9 20.4 44.7 47.3 44.7 63.1 0 67.8-3.3 249.8-3.3 249.8 0 37.6 30.5 68.1 68.2 68 37.7 0 68.1-30.7 68-68.4l-.7-453.3h-.1c0-39.4-43-49.2-51-50.8-78.8-.5-238.7-.9-410.5-.9-379 0-463.8 15.6-528-26.6-139.5-91.2-367.6-706-372.9-1052-7.5-488 281.5-910.5 688.7-1119.8 170-85.6 362-133.9 565-133.9 644.4 0 1175.2 486.4 1245.8 1112.3 0 .5 0 1.2.1 1.7 13 151.3-820.9 183.4-985.8 139.4-25.3-6.7-31.7-32.7-31.7-43.8-.1-115-.9-438.8-.9-438.8-.1-37.7-30.7-68.1-68.4-68.1-37.6 0-68.1 30.7-68.1 68.4l1.5 596.4c1.2 37.6 32.7 47.7 41.4 49.5 93.8 0 313.1-.1 517.4-.1 276.1 0 392.1 32 469.3 90.7 51.3 39.1 71.1 114 53.8 211.4-154.9 866-1135.9 1939.1-1172.8 1983.8z" fill="#fc8019"/></svg>                       
                Swiggy</a>     
            </div>
        </div> 
    </div>
</section>
    </div>
  )
}
