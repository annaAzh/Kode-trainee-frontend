import { useLanguage } from '@/shared/lib/hooks';
import { Switch } from '@/shared/ui';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  notOnLine?: boolean;
}

export const LocaleSwitcher: FC<Props> = ({ notOnLine }) => {
  const { i18n } = useTranslation();
  useLanguage();

  return (
    <Switch
      notOnLine={notOnLine}
      mode="language"
      onChange={() => {
        const newLang = i18n.language === 'ru' ? 'en' : 'ru';
        i18n.changeLanguage(newLang);
      }}
      toggled={i18n.language === 'ru' ? false : true}
      id="language_switch"
    />
  );
};
