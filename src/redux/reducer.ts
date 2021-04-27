import { createReducer } from '@reduxjs/toolkit';
import { PUT_DATA, ERROR_API, LOADING } from './types';

interface IObjApi {
    userId:number,
    id:number,
    title:string,
    completed:boolean
}

interface IState {
    items:Array<IObjApi>,
    error:string,
    loading:boolean
}

export const initialState:IState = {
    items:[],
    error:'',
    loading:false
}

export default createReducer(initialState, {
    [PUT_DATA]: function(state, action){
        state.items = [...state.items, action.payload]
    },
    [ERROR_API]: function(state, action){
        state.error = action.payload;
    },
    [LOADING]: function(state, action){
        state.loading = action.payload;
    }
})



