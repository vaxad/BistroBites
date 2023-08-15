"use client"
import useStore from '../../lib/zustand/store';
import React, { useState } from 'react'

export default function ShowcaseCard({el}) {
    const {cart,addToCart,removeFromCart} = useStore();
  return (
    <div className='block w-1/4 h-1/2'>
    <div className={`block flex-col w-full transition-all min-h-full rounded-lg shadow ${cart.find(item=>item['id']===el.id)?'dark:bg-slate-100 text-orange-600 scale-110' :' dark:bg-orange-800 '}`}>
        <div className='w-full h-60'>
        <a href="#">
            <img className="rounded-t-lg h-full w-full" src={el.img} alt={el.title} />
        </a>
        </div>
        <div className="p-5 h-2/3">
            <a href="#">
                <h5 className={`mb-2 text-2xl font-bold ${cart.find(item=>item['id']===el.id)?'dark:text-orange-900':'dark:text-white'}`}>{el.title}</h5>
            </a>
            <p className="mb-3 font-normal text-sm text-orange-700 dark:text-orange-400">{el.description.length>240?el.description.slice(0,240)+"...":el.description}</p>
           {!cart.find(item=>item['id']===el.id)?(<div onClick={()=>{addToCart(el)}} className="block hover:cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-orange-700 transition-all hover:text-slate-100 bg-slate-100 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-100 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                Add to cart for {el.price}
                 {/* <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg> */}
            </div>):(
                <div className="flex flex-row justify-between items-center px-3 py-2 text-sm font-medium text-center text-slate-700 transition-all hover:text-orange-100 bg-orange-100 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-orange-200 dark:bg-orange-300 dark:hover:bg-slate-400 dark:focus:ring-slate-600">
                    <h1 onClick={()=>{removeFromCart(el)}} className=' hover:cursor-pointer'>-</h1>
                {cart.filter((item)=>{return item['id']===el.id}).length}
                <h1 onClick={()=>{addToCart(el)}} className=' hover:cursor-pointer'>+</h1>
                 {/* <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg> */}
            </div>
            )}
        </div>
    </div> 
    </div>
  )
}
