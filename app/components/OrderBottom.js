"use client"
import useStore from '../../lib/zustand/store'
import Link from 'next/link'
import React from 'react'

export default function OrderBottom({pay}) {
    const {cart}=useStore()
    //.log(cart.length)
    const sum = (arr) =>{
        let sum=0
        for(let i=0;i<arr.length;i++){
            sum+=arr[i].price
        }
        return sum
    }
    return cart.length!==0?(
    <div className=' flex justify-between items-center h-full w-full px-12 py-6 text-slate-200 bg-orange-700 shadow-lg shadow-black rounded-t-2xl transition-all'>
        <h1 className='text-2xl'>{cart.length} items of {sum(cart)}₹ </h1>
        {pay?<Link href={'gateway'} className="inline-flex justify-center gap-2 items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border  focus:ring-4 focus:ring-gray-100 dark:text-white hover:text-orange-700 dark:border-slate-50 dark:hover:bg-slate-50 dark:focus:ring-orange-800 transition-all hover:fill-orange-700 fill-white">
        Pay Now<div><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
<g className=' fill-inherit'fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:'normal'}}><g transform="scale(5.12,5.12)"><path d="M2,2c-1.10547,0 -2,0.89453 -2,2c0,1.10547 0.89453,2 2,2c1.10547,0 2,-0.89453 2,-2h4.65625c2.08594,0 2.88672,0.66797 3.5625,2.9375l8,32.28125c0.42578,1.60938 0.90625,3.39063 2.71875,4.25c-0.57031,0.69141 -0.9375,1.56641 -0.9375,2.53125c0,2.20703 1.79297,4 4,4c2.20703,0 4,-1.79297 4,-4c0,-0.73047 -0.21875,-1.41016 -0.5625,-2h6.125c-0.34375,0.58984 -0.5625,1.26953 -0.5625,2c0,2.20703 1.79297,4 4,4c2.20703,0 4,-1.79297 4,-4c0,-1.03906 -0.41016,-1.97656 -1.0625,-2.6875c0.03516,-0.10156 0.0625,-0.19922 0.0625,-0.3125c0,-0.55078 -0.44922,-1 -1,-1h-15.28125c-2.69531,0 -2.98828,-1.07812 -3.5625,-3.25l-0.6875,-2.75h18.34375c0.41406,0 0.79297,-0.26953 0.9375,-0.65625l7.1875,-19c0.11719,-0.30469 0.05859,-0.63672 -0.125,-0.90625c-0.18359,-0.26953 -0.48828,-0.4375 -0.8125,-0.4375h-30.71875l-2.125,-8.59375c-0.67969,-2.28906 -1.83594,-4.40625 -5.5,-4.40625zM26,44c1.10156,0 2,0.89844 2,2c0,1.10156 -0.89844,2 -2,2c-1.10156,0 -2,-0.89844 -2,-2c0,-1.10156 0.89844,-2 2,-2zM39,44c1.10156,0 2,0.89844 2,2c0,1.10156 -0.89844,2 -2,2c-1.10156,0 -2,-0.89844 -2,-2c0,-1.10156 0.89844,-2 2,-2z"></path></g></g>
</svg></div> 
            </Link>:
             <Link href={'viewCart'} className="inline-flex justify-center gap-2 items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border  focus:ring-4 focus:ring-gray-100 dark:text-white hover:text-orange-700 dark:border-slate-50 dark:hover:bg-slate-50 dark:focus:ring-orange-800 transition-all hover:fill-orange-700 fill-white">
        View Cart<div><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
<g className=' fill-inherit'fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:'normal'}}><g transform="scale(5.12,5.12)"><path d="M2,2c-1.10547,0 -2,0.89453 -2,2c0,1.10547 0.89453,2 2,2c1.10547,0 2,-0.89453 2,-2h4.65625c2.08594,0 2.88672,0.66797 3.5625,2.9375l8,32.28125c0.42578,1.60938 0.90625,3.39063 2.71875,4.25c-0.57031,0.69141 -0.9375,1.56641 -0.9375,2.53125c0,2.20703 1.79297,4 4,4c2.20703,0 4,-1.79297 4,-4c0,-0.73047 -0.21875,-1.41016 -0.5625,-2h6.125c-0.34375,0.58984 -0.5625,1.26953 -0.5625,2c0,2.20703 1.79297,4 4,4c2.20703,0 4,-1.79297 4,-4c0,-1.03906 -0.41016,-1.97656 -1.0625,-2.6875c0.03516,-0.10156 0.0625,-0.19922 0.0625,-0.3125c0,-0.55078 -0.44922,-1 -1,-1h-15.28125c-2.69531,0 -2.98828,-1.07812 -3.5625,-3.25l-0.6875,-2.75h18.34375c0.41406,0 0.79297,-0.26953 0.9375,-0.65625l7.1875,-19c0.11719,-0.30469 0.05859,-0.63672 -0.125,-0.90625c-0.18359,-0.26953 -0.48828,-0.4375 -0.8125,-0.4375h-30.71875l-2.125,-8.59375c-0.67969,-2.28906 -1.83594,-4.40625 -5.5,-4.40625zM26,44c1.10156,0 2,0.89844 2,2c0,1.10156 -0.89844,2 -2,2c-1.10156,0 -2,-0.89844 -2,-2c0,-1.10156 0.89844,-2 2,-2zM39,44c1.10156,0 2,0.89844 2,2c0,1.10156 -0.89844,2 -2,2c-1.10156,0 -2,-0.89844 -2,-2c0,-1.10156 0.89844,-2 2,-2z"></path></g></g>
</svg></div> 
            </Link> }
        </div>
  ):(
    <div className=' transition-all'></div>
  )
}
