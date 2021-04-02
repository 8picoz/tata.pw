import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { App } from "./components/App";

const GlobalStyle = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
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