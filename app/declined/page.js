import Link from 'next/link'
import React from 'react'

export default function DeclinedPage() {
  return (
    <div className='flex justify-center items-center lg:p-24 p-10 gap-12 flex-col'>
        <h1 className='lg:text-2xl text-base text-center '>Oops! Order could not be completed!</h1>
        
        <Link href={'/'} className='lg:text-lg text-sm text-center underline hover:text-orange-400 transition-all'>Click here to go back to home page</Link>
    </div>
  )
}
