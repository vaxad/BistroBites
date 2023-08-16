"use client"
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import ShowcaseCard from './ShowcaseCard'
import OrderBottom from './OrderBottom'
import {getItems} from '../../lib/api/item'
import useStore from '../../lib/zustand/store'

export default function Showcase() {
  const [data, setdata] = useState([])
  const {setItems} =useStore()

  useEffect(() => {
    const getData =async()=>{
      const res=await getItems()
      setdata(res.items)
      setItems(res.items)
    }
    getData()
  }, [setdata,getItems,setItems])
  

  const content = data.map((el)=>{
    return(
      <ShowcaseCard key={el._id} el={el}/>
    )
  })
  return (
    <div id='showcase'>
      <div className=' sticky top-0 z-50'>
      <Navbar/>
      </div>
      <div className=' grid grid-cols-3'>
        {content}
        </div>
        <footer class=" flex sticky bottom-0">
          <OrderBottom pay={false}/>
        </footer>
        </div>
  )
}
