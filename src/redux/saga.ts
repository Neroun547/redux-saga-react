import { takeEvery, put } from 'redux-saga/effects';
import { API_TODO_1, API_TODO_2, API_TODO_3 } from './types';
import { errorAction, getDataAction, loading } from './actions';
interface IApi {
    userId?:number,
    id?:number,
    title?:string,
    completed?:boolean
}

export function* sagaWatcher(): Generator {
    yield takeEvery(API_TODO_1, () => workerApi('https://jsonplaceholder.typicode.com/todos/1'));
    yield takeEvery(API_TODO_2, () => workerApi('https://jsonplaceholder.typicode.com/todos/2'));
    yield takeEvery(API_TODO_3, () => workerApi('https://jsonplaceholder.typicode.com/todos/3'));
}

function * workerApi(url:string){
    yield put(errorAction('')); 
    yield put(loading(true));
    const api:IApi  = yield fetchData(url);
    if(!api){
        yield put(errorAction('Error fetch data')); 
        yield put(loading(false));
    } else {
        yield put(getDataAction(api));
        yield put(loading(false));
    }
}

async function fetchData(url:string): Promise<object | boolean>{
    try{
        const data = await fetch(url);
        const api = await data.json();
        return api;
    } catch(e){
        return false;
    }
}