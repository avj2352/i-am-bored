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
axios.defaults.baseURL = 'https://justbored.herokuapp.com/'; // Comment for production deployment
serviceWorker.unregister();
