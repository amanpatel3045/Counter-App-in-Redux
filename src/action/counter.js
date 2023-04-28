export const increment = (payLoadValue)=>{
    return {
        type:'INCREMENT',
        payload:payLoadValue
    }
}

export const decrement = ()=>{
    return {
        type:'DECREMENT'
    }
}