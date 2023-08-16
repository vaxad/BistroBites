import Link from 'next/link'
import React from 'react'

export default function DeclinedPage() {
  return (
    <div className='flex justify-center items-center p-24 gap-12 flex-col'>
        <h1 className='text-2xl '>Oops! Order could not be completed!</h1>
        
        <Link href={'/'} className='text-lg underline hover:text-orange-400 transition-all'>Click here to go back to home page</Link>
    </div>
  )
}
