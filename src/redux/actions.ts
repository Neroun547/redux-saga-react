import { createAction } from '@reduxjs/toolkit';
import { PUT_DATA, ERROR_API, LOADING } from './types'; 

export const getDataAction = createAction<Object>(PUT_DATA);
export const errorAction = createAction<string>(ERROR_API);
export const loading = createAction<boolean>(LOADING);


