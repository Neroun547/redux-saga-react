import styled from 'styled-components';

export const Container = styled.div`
    max-width:500px;
    width:100%;
    margin:0 auto;
    display:flex;
    flex-direction:column;
`;

export const Button = styled.button`
    background:#0048ff;
    border:none;
    border-radius:5px;
    font-size:22px;
    width:300px;
    height:30px;
    color:#fff;
    margin:10px auto;
    cursor:pointer;
`;

export const Error = styled.div`
    color:red;
    font-size:20px;
    text-align:center;
    border:2px solid red;
    padding:5px;
`;