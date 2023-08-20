import {configureStore,getDefaultMiddleware,combineReducers} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import UserSlice from './UserSlice';
import ProductSlice from './ProductSlice'


const middleware = [...getDefaultMiddleware(),logger];

const reducer = combineReducers({
    Products:ProductSlice,
    Users:UserSlice
})



const store = configureStore({
    reducer:reducer,
    middleware
})

export default store;