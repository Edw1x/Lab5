import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

ReactDOM.render((
        <App />
), document.getElementById('root'));
registerServiceWorker();