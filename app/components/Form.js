"use client"
import { useRouter } from 'next/navigation'
import React,{ useEffect, useState } from 'react'
import useStore from '../../lib/zustand/store'
import {getStatus, sendOrder} from '../../lib/api/order'


export default function Form() {
    const [data,setData]=useState({
        fname:'',lname:'',email:'',phone:'',flat:'',land:'',city:'',pin:'',upi:''
    })
    const {cart}=useStore()
    const router = useRouter()

    const [status, setstatus] = useState('online')
  useEffect(() => {
    const interval = setInterval(() => {
      const checkStatus =async()=>{
        const res=await getStatus()
        setstatus(res)
        if(res==="offline"){
          router.back()
        }
      }
      checkStatus()
    }, 2000);
    return () => clearInterval(interval); 
  }, [])
    const handleSubmit=async(e)=>{
        e.preventDefault()
        // const order = {
        //     cart:cart,
        //     name:(data.fname+" "+data.lname),
        //     address:(data.flat+", "+data.land+", "+data.city+", "+data.pin),
        //     upi:data.upi,
        //     email:data.email,
        //     phone:data.phone
        // }
        const res = await sendOrder({cart:cart,data:data})
        //.log(res)
        if(res){
        router.push(`/confirmation/${res.order._id}`)
        }else{
            alert('some error occured')
            router.back()
        }
    }
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

  return (
    <div>
    <form onSubmit={(e)=>{handleSubmit(e)}}>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
            <input value={data.fname} onChange={(e)=>{handleChange(e)}} type="text" name="fname" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
            <label htmlFor="fname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-50 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input value={data.lname} onChange={(e)=>{handleChange(e)}} type="text" name="lname" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
            <label htmlFor="lname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-50 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
        </div>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input value={data.email} onChange={(e)=>{handleChange(e)}} type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-50 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
      </div>
        <div className="relative z-0 w-full mb-6 group">
            <input value={data.phone} onChange={(e)=>{handleChange(e)}} type="tel" name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-50 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
        
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input value={data.flat} onChange={(e)=>{handleChange(e)}} type="text" name="flat" id="floating_flat" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
          <label htmlFor="flat" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-50 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Flat no. and Apartment</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input value={data.land} onChange={(e)=>{handleChange(e)}} type="text" name="land" id="floating_land" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
          <label htmlFor="land" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-50 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nearby Landmark</label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
            <input value={data.city} onChange={(e)=>{handleChange(e)}} type="text" name="city" id="floating_city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
            <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-50 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input value={data.pin} onChange={(e)=>{handleChange(e)}} type="text" name="pin" id="floating_pin" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
            <label htmlFor="pin" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-50 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pincode</label>
        </div>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input value={data.upi} onChange={(e)=>{handleChange(e)}} type="text" name="upi" id="floating_upi" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
          <label htmlFor="upi" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-50 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UPI ID</label>
      </div>
      <button type="submit" className="text-white lg:flex block bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full justify-center items-center  px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Confirm</button>
    <button onClick={()=>{router.back()}} className="text-orange flex mt-6 bg-slate-200 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full justify-center items-center  px-5 py-2.5 text-center dark:bg-slate-100 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Cancel</button>
    </form>
    </div>
  )
}
