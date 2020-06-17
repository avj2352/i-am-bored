import React, { FunctionComponent } from 'react';
import ThemeConfigProvider from "../components/theme-config/ThemeConfigProvider";
import { IAppContextState, useGlobalState } from "../common/context/AppContext";
import RouterApp from "../router/RouterApp";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App: FunctionComponent = () => {
    const appContext: IAppContextState = useGlobalState();
    return (
        <ThemeConfigProvider theme={appContext.theme}>
            <RouterApp/>
            <div className="absolute right-0 px-16 py-4 z-50">
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnHover
                />
            </div>
        </ThemeConfigProvider>
    );
};

export default App;