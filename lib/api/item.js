export const getItems=async()=>{
    try {
        const res = await fetch(`https://bistro-backend-pceo.onrender.com/api/item/`,{
            method:'GET',
            headers:{
                'Content-type':'application/json'
            }
        })
        const resp=await res.json()
        return resp
    } catch (error) {
        return false
    }
}