import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// custom
import { AppContextProvider } from "./common/context/AppContext";
import App from './app/App';
// service-worker
import * as serviceWorker from './serviceWorker';

ReactDOM.render (
                <AppContextProvider>
                    <App/>
                </AppContextProvider>,
                document.getElementById('root')
);
// axios.defaults.baseURL = 'https://timely-travel.herokuapp.com'; // Comment for production deployment
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
