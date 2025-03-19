import { THEME } from '@/shared/types';

export const getUserTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return THEME.DARK;
  }

  return THEME.LIGHT;
};
