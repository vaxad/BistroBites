"use client"
import React, { useState } from 'react'
import Navbar from './Navbar'
import {sendFeedback} from '../../lib/api/feedback'
import { useRouter } from 'next/navigation'

export default function Contact() {
  const [data,setData]=useState({email:'',subject:'',message:''})

  const handlChange = (e) => {
    setData({...data,[e.target.id]:e.target.value})
  }

  const router =useRouter()

  const handleSubmit = async(e) => {
    e.preventDefault()
    const res = await sendFeedback({email:data.email,message:data.message,subject:data.subject})
    if (res){
      router.back()
    }else{
      alert('something went wrong')
      router.back()
    }
    //.log(data)
  }
  return (
    <div id='contact'>
      <Navbar/>
      <div>
      <section className="">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 lg:text-4xl text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 lg:text-xl text-sm">Got a technical issue? Want to send feedback about a dish? Need details about our recipes? Let us know.</p>
      <form action="#" className="space-y-8" onSubmit={(e)=>{handleSubmit(e)}}>
          <div>
              <label for="email" className="block mb-2 lg:text-sm text-xs font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input value={data.email} onChange={(e)=>{handlChange(e)}} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 lg:text-sm text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label for="subject" className="block mb-2 lg:text-sm text-xs font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input value={data.subject} onChange={(e)=>{handlChange(e)}} type="text" id="subject" className="block p-3 w-full lg:text-sm text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 lg:text-sm text-xs font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea value={data.message} onChange={(e)=>{handlChange(e)}} id="message" rows="6" className="block p-2.5 w-full lg:text-sm text-xs text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-700 w-full hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Send message</button>
      </form>
  </div>
</section>
        </div></div>
  )
}
