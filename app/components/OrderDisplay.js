
import React from 'react'

export default function OrderCard({el}) {

        const sum =()=>{
            let ctr=0
            for(let i=0;i<el.cart.length;i++){
                ctr+=el.cart[i].price
            }
            return ctr
        }
        
       
      const numOf = (item,arr)=>{
        let ctr=0
        for(let i=0;i<arr.length;i++){
            if(arr[i].id===item.id){
                ctr++
            }
        }
        return ctr
      }

      const makeData = () =>{
        const arr=[]
        for(let i=0;i<el.cart.length;i++){
            let ctr=0
            for(let j=0;j<i&&j<arr.length;j++){
                if(arr[j].id===el.cart[i].id){
                    ctr=1
                }
            }
            if(ctr===0){
                arr.push(el.cart[i])
            }
        }
        return arr
      }
      const data = makeData()
      const content = data.map((e)=>{
        return(
            <h3 key={e}>{numOf(e,el.cart)+"x "+e.title} </h3>
        )
      })
      //.log(el.cart,data)

  return (
    <div className='w-full flex justify-center items-center py-5'>
    <div className="flex flex-col w-10/12 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800">
       <div className=' flex w-full justify-between items-center'>
       <div className="flex flex-col justify-between p-4 leading-normal">
            <span className=" inline-flex gap-2 py-1 text-2xl font-bold">{el.cart.length} items - <h5 className=''>{sum()}Rs</h5> {`(${el.customer.name})`}</span>
            <div>
                {content}
            </div>
            <p className=" font-normal text-orange-700 dark:text-orange-400">{el.customer.address}</p>
            
            <p className="font-normal text-orange-700 dark:text-orange-400">Phone: {el.customer.phone}</p>
            <p className="font-normal text-orange-700 dark:text-orange-400">Email: {el.customer.email}</p>
            <p className="font-normal text-orange-700 dark:text-orange-200">Upi: {el.customer.upi}</p>
            <p className="font-normal text-orange-700 dark:text-orange-200">{(new Date(el.date)).toLocaleString()}</p>
        </div>
        <div className=' p-10 flex flex-col justify-center gap-10'>
        <button disabled type="button" class="text-white bg-orange-700 focus:outline-none focus:ring-4 focus:ring-slate-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-orange-600 ">Accepted</button>
        <p className="text-xs text-orange-700 dark:text-orange-200">{`(Order ID : ${el._id})`}</p>
          </div>
        </div>
    </div>
    </div>
  )
}
