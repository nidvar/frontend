export const signInAction = (the_id)=>{
    return {
        type:'SIGN_IN',
        payload:the_id
    }
}

export const signOutAction = ()=>{
    return {
        type:'SIGN_OUT',
    }
}