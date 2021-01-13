import streams from '../apis/streams';

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

export const create_stream_action = form_data => async (dispatch, getState)=>{
    const response = await streams.post('/streams', form_data)

    dispatch({
        type:'CREATE_STREAM',
        payload: response.data
    })
}

export const get_all_streams = ()=>{
    return async (dispatch, getState)=>{
        const response = await streams.get('/streams')
        dispatch({
            type:'GET_ALL_STREAMS',
            payload:response.data
        })
    }
}

export const get_single_stream = (id)=>{
    return async (dispatch, getState)=>{
        const response = await streams.get(`/streams/${id}`);
        dispatch({
            type:'GET_SINGLE_STREAM',
            payload:response.data
        })
    }
}

export const update_single_stream = (id, form_data)=>{
    return async (dispatch, getState)=>{
        const response = await streams.get(`/streams/${id}`, form_data);
        dispatch({
            type:'UPDATE_SINGLE_STREAM',
            payload:response.data
        })
    }
}

export const delete_single_strema = (id)=>{
    return async (dispatch, getState)=>{
        const response = await streams.get(`/streams/${id}`);
        dispatch({
            type:'DELETE_SINGLE_STREAM',
            payload:response.data
        })
    }
}