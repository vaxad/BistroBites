import React from 'react'
import Form from '../components/Form'

export default function Gateway() {
  return (
    <div id='gateway'>
        <div className='p-24 flex justify-center items-center'>
            <div className=' bg-black block w-10/12 p-8 rounded-xl bg-opacity-80'>
            <Form/>
            </div>
        </div>
    </div>
  )
}
