const url = 'https://bistro-backend-pceo.onrender.com/api/feedback/'

export const sendFeedback = async({email,subject,message}) => {
    try{
    const res = await fetch(url,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            subject:subject,
            email:email,
            message:message
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