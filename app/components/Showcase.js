"use client"
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import ShowcaseCard from './ShowcaseCard'
import OrderBottom from './OrderBottom'
import {getItems} from '../../lib/api/item'
import useStore from '../../lib/zustand/store'
import { getStatus } from '../../lib/api/order'

export default function Showcase() {
  const [data, setdata] = useState([])
  const [status, setstatus] = useState('online')
  const {setItems,setCart} =useStore()

  useEffect(() => {
    const getData =async()=>{
      const res=await getItems()
      setdata(res.items)
      setItems(res.items)
    }
    getData()
  }, [setdata,getItems,setItems])
  
  useEffect(() => {
    const interval = setInterval(() => {
      const checkStatus =async()=>{
        const res=await getStatus()
        setstatus(res)
        if(res==="offline"){
          setCart([])
        }
      }
      checkStatus()
    }, 2000);
    return () => clearInterval(interval); 
  }, [])

  const content = data.map((el)=>{
    return(
      <ShowcaseCard key={el._id} el={el} online={status==="online"}/>
    )
  })
  return (
    <div id='showcase'>
      <div className=' sticky top-0 z-50'>
      <Navbar/>
      </div>
      <div className=' flex justify-center items-center pt-10'>
        <h1 className=' text-slate-100 text-xl'>Outlet {status==='online'?'Open':'Closed'}!</h1>
      </div>
      <div className=' lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 flex flex-wrap'>
        {content}
        </div>
        <footer class=" flex sticky bottom-0">
          <OrderBottom pay={false}/>
        </footer>
        </div>
  )
}
