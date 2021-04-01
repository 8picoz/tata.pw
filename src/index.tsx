import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { App } from "./components/App";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #EEEEEE;
        font-family: sans-serif;
        margin: 0;
        padding: 0;
    }
`;

ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>, document.getElementById("app"));