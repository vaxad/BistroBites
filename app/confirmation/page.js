import React from 'react'
import Spinner from '../components/Spinner'
import Link from 'next/link'

export default function Confirmation() {
  return (
    <div id='confirmation'>
        <div className=' p-24 justify-center flex items-center flex-col gap-5'>
            <h1>Youll receive a request on the provided UPI ID</h1>
            <h1>pay to complete the order</h1>
            <Spinner/>
            <Link href={'/'}>Cancel</Link>
        </div>
    </div>
  )
}
