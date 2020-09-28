import {createMuiTheme, ThemeOptions} from '@material-ui/core/styles';

export const getThemeOptions = () : ThemeOptions => {

    // default material theme configuration

    let theme = createMuiTheme({
        palette: {
            "common": {
                "black": "#000",
                "white": "#fff"
            },
            "background": {
                "paper": "#fff",
                "default": "rgba(244, 244, 244, 1)"
            },
            "primary": {
                "light": "rgba(76, 224, 179, 1)",
                "main": "rgba(34, 191, 144, 1)",
                "dark": "rgba(21, 121, 91, 1)",
                "contrastText": "#fff"
            },
            "secondary": {
                "light": "rgba(237, 106, 94, 1)",
                "main": "rgba(237, 102, 89, 1)",
                "dark": "rgba(212, 77, 64, 1)",
                "contrastText": "#fff"
            },
            "error": {
                "light": "rgba(240, 52, 122, 1)",
                "main": "rgba(184, 15, 79, 1)",
                "dark": "rgba(133, 11, 57, 1)",
                "contrastText": "#fff"
            },
            "text": {
                "primary": "rgba(0, 0, 0, 0.87)",
                "secondary": "rgba(0, 0, 0, 0.54)",
                "disabled": "rgba(0, 0, 0, 0.38)",
                "hint": "rgba(0, 0, 0, 0.38)"
            }
        },
        typography: {
            fontFamily: ['"Montserrat"' , 'sans-serif'].join(','),
            fontSize: 16,
            h5: {
                fontWeight: 500,
                fontSize: 26,
                letterSpacing: 0.5,
            },
        },
        shape: {
            borderRadius: 8,
        },
        props: {
            MuiTab: {
                disableRipple: true,
            },
        },
        mixins: {
            toolbar: {
                minHeight: 48,
            },
        }
    });

    // Overrides, specific to application - Paperbase

    theme = {
        ...theme,
        overrides: {
            MuiDrawer: {
                paper: {
                    backgroundColor: '#18202c'
                }
            },
            MuiButton: {
                label: {
                    textTransform: 'none'
                },
                contained: {
                    boxShadow: 'none',
                    '&:active': {
                        boxShadow: 'none'
                    }
                }
            },
            MuiTabs: {
                root: {
                    marginLeft: theme.spacing(1)
                },
                indicator: {
                    height: 3,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    backgroundColor: theme.palette.common.white
                }
            },
            MuiTab: {
                root: {
                    textTransform: 'none',
                    margin: '0 16px',
                    minWidth: 0,
                    padding: 0,
                    [
                        theme
                            .breakpoints
                            .up('md')
                        ]: {
                        padding: 0,
                        minWidth: 0
                    }
                }
            },
            MuiIconButton: {
                root: {
                    padding: theme.spacing(1)
                }
            },
            MuiTooltip: {
                tooltip: {
                    borderRadius: 4
                }
            },
            MuiDivider: {
                root: {
                    backgroundColor: '#404854'
                }
            },
            MuiListItemText: {
                primary: {
                    fontWeight: theme.typography.fontWeightMedium
                }
            },
            MuiListItemIcon: {
                root: {
                    color: 'inherit',
                    marginRight: 0,
                    '& svg': {
                        fontSize: 20
                    }
                }
            },
            MuiAvatar: {
                root: {
                    width: 32,
                    height: 32
                }
            },
            MuiInputBase: {
                input: {
                    height: 20,
                }
            }
        }
    };
    return theme;
};