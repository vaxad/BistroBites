const url = 'https://bistro-backend-pceo.onrender.com/api/order/'

export const sendOrder = async({cart,data}) => {
    //.log(cart,data)
    try{
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
            phone:data.phone
        })
    })
    //.log(res)
    if(res.ok){
        const result = await res.json()
        return true
    }else{
        return false
    }
}catch(e){
    //.log(e)
    return false
}
}