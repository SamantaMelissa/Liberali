import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cadastro from './pages/cadastro';
import Vendas from './pages/vendas';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/cadastro" exact={true} component={Cadastro} />
            <Route path="/vendas" component={Vendas} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
