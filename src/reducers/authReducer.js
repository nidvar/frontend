const SIGNED_STATUS = {
    signed_in: null,
    user_id:null
}

const authReducer = (state=SIGNED_STATUS, action)=>{
    if(action.type==='SIGN_IN'){
        return {...state, signed_in: true, user_id: action.payload}
    }
    if(action.type==='SIGN_OUT'){
        return {...state, signed_in: false, user_id:null}
    }
    return state
}

export default authReducer