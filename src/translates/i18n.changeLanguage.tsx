import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedLanguage = event.target.value;
    if (i18n.changeLanguage) {
      i18n.changeLanguage(selectedLanguage).then(() => {
        // Optionally, you can perform additional tasks after changing the language
        console.log(`Language changed to ${selectedLanguage}`);
      });
    } else {
      console.error('changeLanguage function is not available on i18n object');
    }
  };

  return (
    <Select onChange={handleChange} value={i18n.language || 'es'}>
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="es">Español</MenuItem>
    </Select>
  );
}

export default LanguageSelector;
