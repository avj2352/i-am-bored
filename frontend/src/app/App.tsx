import React, { FunctionComponent } from 'react';
// material
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import { SnackbarProvider } from 'notistack';
import { useThemeOptions } from './../common/theme/ThemeConfigProvider';

import RouterApp from '../router/RouterApp';

const App: FunctionComponent = () => {
    return (
        <MuiThemeProvider
            theme = {useThemeOptions()} >
            <SnackbarProvider maxSnack={3} anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}>
                <div className="App">
                    <RouterApp />
                </div>
            </SnackbarProvider>
        </MuiThemeProvider>
    );
};

export default App;