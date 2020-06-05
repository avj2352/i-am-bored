import React, { FunctionComponent } from 'react';
import ThemeConfigProvider from "../components/theme-config/ThemeConfigProvider";
import { IAppContextState, useGlobalState } from "../common/context/AppContext";
import RouterApp from "../router/RouterApp";

const App: FunctionComponent = () => {
    const appContext: IAppContextState = useGlobalState();
    return (
        <ThemeConfigProvider theme={appContext.theme}>
            <RouterApp/>
        </ThemeConfigProvider>
    );
};

export default App;