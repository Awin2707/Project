import {configureStore} from '@reduxjs/toolkit'
import userReducers from '../Reducers/UserReducers'
const Store = configureStore({
    reducer : {
        "user" : userReducers
    }
})

export default Store;