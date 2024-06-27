import React from 'react';
import { useTranslation } from 'react-i18next';


const Tablero: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className='panel-group mt-5'>
            {t('welcome')}
        </div>
    );
}

export default Tablero;
