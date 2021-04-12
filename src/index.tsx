import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { App } from "./components/App";

const GlobalStyle = createGlobalStyle`
    body {
        color: #DDDDDD;
        background-color: #131313;
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
    }
`;

ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>, document.getElementById("app"));