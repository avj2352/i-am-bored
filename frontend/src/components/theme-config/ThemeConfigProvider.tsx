import React, { FunctionComponent } from 'react';
import clsx from 'clsx';

interface IThemeConfigProps {
    theme: 'theme-light' | 'theme-dark'
}

const ThemeConfigProvider: FunctionComponent<IThemeConfigProps> = (props): JSX.Element => {
    const { theme, children } = props;
    const basicCss = `content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen`;
    const basicStyle = clsx({ [basicCss]:true, 'theme-light': theme==='theme-light', 'theme-dark':theme === 'theme-dark'});
    return (
        <React.Fragment>
            <div className={basicStyle}>
                {children}
            </div>
        </React.Fragment>
    );
};

export default ThemeConfigProvider;

