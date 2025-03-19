import { RootState } from '@/app/store/store';
import { THEME } from '@/shared/types';

export const getTheme = (state: RootState): THEME => {
  return state.theme.theme;
};
