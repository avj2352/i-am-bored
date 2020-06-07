import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// custom
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import {AppContextProvider} from "./common/context/AppContext";

ReactDOM.render (
  <React.StrictMode>
      <AppContextProvider>
            <App />
      </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// axios.defaults.baseURL = 'http://localhost:5000'; // Comment for production deployment
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
