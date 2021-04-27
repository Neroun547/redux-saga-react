import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import rootReducer from './redux/reducer';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './redux/saga'

const saga = createSagaMiddleware();

const combine = combineReducers({
  root:rootReducer
});

export type RootState = ReturnType<typeof combine>

const store = createStore(combine, compose(applyMiddleware(saga)));

saga.run(sagaWatcher);

const AppStyle = createGlobalStyle
  `*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:sans-serif;
  }`;

ReactDOM.render(
  <>
  <AppStyle/>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
