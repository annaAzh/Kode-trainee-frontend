import { useEffect, useState } from 'react';
import { getUserLanguage } from './getUserLanguage';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const currentLanguage = getUserLanguage();
  const { i18n } = useTranslation();

  const [lang, setLang] = useState(currentLanguage);

  useEffect(() => {
    const changeLanguage = () => {
      const currentLanguage = getUserLanguage();
      setLang(currentLanguage);
      i18n.changeLanguage(currentLanguage);
    };

    window.addEventListener('languagechange', changeLanguage);

    return () => window.removeEventListener('languagechange', changeLanguage);
  }, [i18n]);

  return lang;
};
