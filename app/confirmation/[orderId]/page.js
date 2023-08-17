"use client"
import React, { useEffect } from 'react'
import Spinner from '../../components/Spinner'
import Link from 'next/link'
import { getOrder } from '../../../lib/api/order'
import { useRouter } from 'next/navigation'

export default function Confirmation({params}) {
    const router = useRouter()
    useEffect(() => {
      const interval = setInterval(() => {
        const check =async()=>{
          const res=await getOrder({id:params.orderId})
          const order=res.order
          if(order===null){
            router.push('/declined')
          }else if(order.accepted==="true"){
            router.push(`/confirmed/${params.orderId}`)
          }
        }
        check()
      }, 2000);
    
      return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [])
  
  return (
    <div id='confirmation'>
        <div className=' lg:py-24 lg:px-24 px-12 py-24 h-full align-middle  justify-center flex items-center text-center flex-col gap-5 text-slate-100'>
            <h1>Youll receive a request on the provided UPI ID</h1>
            <h1>pay to complete the order with ID:{params.orderId}</h1>
            <Spinner/>
            <Link href={'/'}>Cancel</Link>
        </div>
    </div>
  )
}
