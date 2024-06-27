import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import LanguageSelector from '../../translates/i18n.changeLanguage';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function HeaderApp() {
    const { t } = useTranslation();
    const location = useLocation();
    const isRoot = location.pathname === "/";

    const getBackButton = () => {
        if (isRoot) {
            return null;
        } else {
            return (
                <button className='btn btn-danger' onClick={() => window.history.back()}>
                    {t('back')}
                </button>
            );
        }
    }

    return (
        <header>
            <Container maxWidth="xl">
                <Box display="flex" justifyContent="space-between">
                    {getBackButton()}
                    <LanguageSelector />
                </Box>
            </Container>
        </header>
    );
}

export default HeaderApp;
