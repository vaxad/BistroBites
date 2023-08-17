"use client"
import useStore from '../../lib/zustand/store';
import React, { useState } from 'react'
import Image from 'next/image';

export default function ShowcaseCard({el,online}) {
    const {cart,addToCart,removeFromCart} = useStore();
  return (
    <div className='flex w-full h-full lg:p-14 p-8'>
    <div className={`flex flex-col w-full transition-all min-h-full rounded-lg shadow ${online?cart.find(item=>item._id===el._id)?'dark:bg-slate-100 text-orange-600 scale-110' :' dark:bg-orange-800':' bg-slate-600'}`}>
        {el.img!=="none"&&<div className='w-full h-60'>
            <Image className="rounded-t-lg h-full w-full" src={el.img} width={100} height={60} alt={el.title} />
        </div>}
        <div className="p-5 h-full flex flex-col justify-between ">
                <h5 className={`mb-2 lg:text-2xl md:text-xl text-lg font-bold ${cart.find(item=>item._id===el._id)?'dark:text-orange-900':'dark:text-white'}`}>{el.title}</h5>
            <p className="mb-3 font-normal lg:text-sm text-xs text-orange-700 dark:text-orange-400">{el.description.length>240?el.description.slice(0,240)+"...":el.description}</p>
           {online?!cart.find(item=>item._id===el._id)?
           (<div onClick={()=>{addToCart(el)}} className="block hover:cursor-pointer items-center px-3 py-2  lg:text-sm text-xs font-medium text-center text-orange-700 transition-all hover:text-slate-100 bg-slate-100 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-100 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                Add to cart for {el.price}
            </div>):(
                <div className="flex flex-row justify-between items-center px-3 py-2 text-sm font-medium text-center text-slate-700 transition-all hover:text-orange-100 bg-orange-100 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-orange-200 dark:bg-orange-300 dark:hover:bg-slate-400 dark:focus:ring-slate-600">
                    <h1 onClick={()=>{removeFromCart(el)}} className=' hover:cursor-pointer'>-</h1>
                {cart.filter((item)=>{return item._id===el._id}).length}
                <h1 onClick={()=>{addToCart(el)}} className=' hover:cursor-pointer'>+</h1>
            </div>
            ):(<div className="block  items-center px-3 py-2  text-sm font-medium text-center text-orange-700 transition-all  bg-slate-100 rounded-lg  focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-100  dark:focus:ring-orange-800">
             @{el.price}
        </div>)}
        </div>
    </div> 
    </div>
  )
}
