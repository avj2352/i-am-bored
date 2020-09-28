import React, { FunctionComponent } from 'react';
// material
import { ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import { getThemeOptions } from './../common/theme/ThemeConfigProvider';

import RouterApp from '../router/RouterApp';

const App: FunctionComponent = () => {
    return (
        <ThemeProvider theme={getThemeOptions()}>
            <SnackbarProvider
                maxSnack={3} anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}>
                <RouterApp/>
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default App;