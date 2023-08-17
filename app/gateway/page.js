import React from 'react'
import Form from '../components/Form'

export default function Gateway() {
  return (
    <div id='gateway'>
        <div className='lg:p-24 p-6 flex justify-center items-center'>
            <div className=' bg-black block lg:w-10/12 p-4 lg:p-8 rounded-xl bg-opacity-80'>
            <Form/>
            </div>
        </div>
    </div>
  )
}
