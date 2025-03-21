import { useTranslation } from 'react-i18next';

export const useMonths = () => {
  const { t } = useTranslation();

  return t('months', { returnObject: true }) as unknown as string[];
};
