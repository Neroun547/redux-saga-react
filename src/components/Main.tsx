import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_TODO_1, API_TODO_2, API_TODO_3 } from '../redux/types';
import { RootState } from '../index';
import { Button, Container, Error } from './style/main';

export const Main:React.FC = () => {
    const dispatch = useDispatch();
    const selectorItems = useSelector((state:RootState) => state.root.items);
    const selectorLoading = useSelector((state:RootState) => state.root.loading);
    const selectorError = useSelector((state:RootState) => state.root.error);

    const getData = (type:string):void => {
        dispatch({ type: type});
    }

    if(!selectorLoading && ! selectorError){
        return (
            <Container>
                <Button onClick={() => getData(API_TODO_1)}>Get data api 1</Button>
                <Button onClick={() => getData(API_TODO_2)}>Get data api 2</Button>
                <Button onClick={() => getData(API_TODO_3)}>Get data api 3</Button>
                {selectorItems.map((el, i) => {
                    return <li key={i}>{el.title}</li>
                })}
            </Container>
        )
    }
    if(selectorLoading){
        return <Container>Loading....</Container>
    }
    if(selectorError){
        return <Container>
            <Button onClick={() => getData(API_TODO_1)}>Get data api 1</Button>
                <Button onClick={() => getData(API_TODO_2)}>Get data api 2</Button>
                <Button onClick={() => getData(API_TODO_3)}>Get data api 3</Button>
                {selectorItems.map((el, i) => {
                    return <li key={i}>{el.title}</li>
                })}
                <Error>{selectorError}</Error>
        </Container>
    } else {
        return <Container>Loading....</Container>
    }
}
