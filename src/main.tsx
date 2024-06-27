import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './shared/assets/js/theme';

import './index.css'
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './translates/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </I18nextProvider>
    </React.StrictMode>,
)
