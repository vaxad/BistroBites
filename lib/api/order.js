const url = 'https://bistro-backend-pceo.onrender.com/api/order/'

export const getStatus=async()=>{
    try {
        const res = await fetch('https://bistro-backend-pceo.onrender.com/api/auth/status',{
            method:'GET',
            headers:{
                'Content-type':'application/json'
            }
        })
        const resp=await res.json()
        return resp.status
    } catch (error) {
        return false
    }
}

export const sendOrder = async({cart,data}) => {
    //.log(cart,data)
    try{
    const date=new Date()
    const res = await fetch(url,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            cart:cart,
            name:(data.fname+" "+data.lname),
            address:(data.flat+", "+data.land+", "+data.city+", "+data.pin),
            upi:data.upi,
            email:data.email,
            phone:data.phone,
            date:date
        })
    })
    //.log(res)
    if(res.ok){
        const result = await res.json()
        return result
    }else{
        return false
    }
}catch(e){
    //.log(e)
    return false
}
}



export const getOrder = async({id}) => {
    try{
    const res = await fetch(`https://bistro-backend-pceo.onrender.com/api/order/${id}`,{
        method:'GET',
        headers:{
            'Content-type':'application/json'
        }
    })
    //.log(res)
    if(res.ok){
        const result = await res.json()
        return result
    }else{
        return false
    }
}catch(e){
    //.log(e)
    return false
}
}