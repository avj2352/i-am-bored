import React, { FunctionComponent } from 'react';
import ThemeConfigProvider from "../components/theme-config/ThemeConfigProvider";
import { IAppContextState, useGlobalState } from "../common/context/AppContext";

const App: FunctionComponent = () => {
    const appContext: IAppContextState = useGlobalState();
    return (
        <ThemeConfigProvider theme={appContext.theme}>
            <h1>
                Welcome to Tailwind v{appContext.version}
            </h1>
        </ThemeConfigProvider>
    );
};

export default App;