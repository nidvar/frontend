import {combineReducers} from 'redux';
import {reducer as reducer_from_form_package} from 'redux-form'
import authReducer from './authReducer'

const reducers = combineReducers({
    authReducer: authReducer,
    form: reducer_from_form_package
})

export default reducers