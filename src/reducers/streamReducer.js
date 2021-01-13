import _ from 'lodash'

const streamReducer = (state={}, action)=>{
    if(action.type === 'GET_ALL_STREAMS'){
        return {...state, ..._.mapKeys(action.payload, 'id')}
    }
    if(action.type === 'CREATE_STREAM'){
        return {...state, [action.payload.id]: action.payload}
    }
    if(action.type === 'GET_SINGLE_STREAM'){
        return {...state, [action.payload.id]: action.payload}
    }
    if(action.type === 'UPDATE_SINGLE_STREAM'){
        return {...state, [action.payload.id]: action.payload}
    }
    if(action.type === 'DELETE_SINGLE_STREAM'){
        delete state.payload
        return state
    }
    return state
}

export default streamReducer