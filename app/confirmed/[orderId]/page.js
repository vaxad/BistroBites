"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getOrder } from '../../../lib/api/order'
import { useRouter } from 'next/navigation'
import OrderDisplay from '../../components/OrderDisplay'

export default function ComfirmedPage({params}) {
  const router =useRouter()
  const [order, setorder] = useState(null)
  useEffect(() => {
    const getData = async()=>{
    const res=await getOrder({id:params.orderId})
    setorder(res.order)
    if(res.order.accepted!=="true"){
      router.push('/')
    }
    }
    getData()
  }, [])
  
  return (
    <div className='flex justify-center items-center flex-col p-24 gap-10 text-slate-100' id='confirmed'>
      <Link href={'/'} className='text-xl hover:text-orange-200 transition-all'>Go back to Home page</Link>
      {order&&<OrderDisplay el={order}/>}
      <h1 className=' text-lg'>Any issues? Reach out to us!</h1>
      <div className=' flex flex-row gap-10'>  
      <h1 className=' text-lg'>8898838812</h1>
      <h1 className=' text-lg'>abc@hm.com</h1>
      </div>
    </div>
  )
}
