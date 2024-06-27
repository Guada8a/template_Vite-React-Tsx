import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#9D2449',
        },
        secondary: {
            main: '#13322B',
        },
        error: {
            main: '#FF0000',
        },
        warning: {
            main: '#FFC107',
        },
        info: {
            main: '#2196F3',
        },
        success: {
            main: '#4CAF50',
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontSize: 17,
    },
    shadows: [
        'none',
        '0px 1px 2px rgba(0,0,0,0.2)',
        '0px 2px 4px rgba(0,0,0,0.3)',
        '0px 3px 6px rgba(0,0,0,0.4)',
        '0px 4px 8px rgba(0,0,0,0.5)',
        '0px 5px 10px rgba(0,0,0,0.6)',
        '0px 6px 12px rgba(0,0,0,0.7)',
        '0px 7px 14px rgba(0,0,0,0.8)',
        '0px 8px 16px rgba(0,0,0,0.9)',
        '0px 9px 18px rgba(0,0,0,1)',
        '0px 10px 20px rgba(0,0,0,1)',
        '0px 11px 22px rgba(0,0,0,1)',
        '0px 12px 24px rgba(0,0,0,1)',
        '0px 13px 26px rgba(0,0,0,1)',
        '0px 14px 28px rgba(0,0,0,1)',
        '0px 15px 30px rgba(0,0,0,1)',
        '0px 16px 32px rgba(0,0,0,1)',
        '0px 17px 34px rgba(0,0,0,1)',
        '0px 18px 36px rgba(0,0,0,1)',
        '0px 19px 38px rgba(0,0,0,1)',
        '0px 20px 40px rgba(0,0,0,1)',
        '0px 21px 42px rgba(0,0,0,1)',
        '0px 22px 44px rgba(0,0,0,1)',
        '0px 23px 46px rgba(0,0,0,1)',
        '0px 24px 48px rgba(0,0,0,1)' // Agregando el 25to elemento
    ],
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
                    },
                    '&:focus': {
                        outline: '2px solid #0C231E',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
                    '&:hover': {
                        boxShadow: '0px 8px 40px rgba(0,0,0,0.2)',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
                },
                indicator: {
                    backgroundColor: '#0C231E',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: '#fff',
                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                    },
                    '&.Mui-selected': {
                        backgroundColor: '#0C231E',
                        color: '#fff',
                    },
                    '&:focus': {
                        outline: '2px solid #0C231E',
                    },
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: '#10312B',
                    color: '#fff',
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                head: {
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#10312B',
                        color: '#fff',
                    },
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: 15,
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        }
      `,
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h2',
                    h2: 'h2',
                    h3: 'h2',
                    h4: 'h2',
                    h5: 'h2',
                    h6: 'h2',
                    subtitle1: 'h2',
                    subtitle2: 'h2',
                    body1: 'span',
                    body2: 'span',
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    '&:focus': {
                        backgroundColor: 'transparent',
                        borderColor: '#0C231E',
                    },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: '#fff',
                    },
                    '&.Mui-selected': {
                        fontWeight: 'bold',
                    },
                },
            },
        },
    },
};

const theme = createTheme(themeOptions);

export default theme;
