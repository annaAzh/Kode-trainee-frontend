import { setTheme } from '@/entities/theme/model/slice';
import { THEME } from '@/shared/types';
import { useCallback, useEffect } from 'react';
import { useAppSelector } from '../useAppSelector/useAppSelector';
import { useAppDispatch } from '../useAppDispatch/useAppDispatch';
import { getTheme } from '@/entities/theme';
import { getUserTheme } from './getUserTheme';

export const useTheme = () => {
  const theme = useAppSelector(getTheme);
  const dispatch = useAppDispatch();

  const setNewTheme = useCallback(
    (newTheme: THEME) => {
      dispatch(setTheme(newTheme));
    },
    [dispatch],
  );

  useEffect(() => {
    const userTheme = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChangeTheme = () => {
      const newTheme = getUserTheme();

      setNewTheme(newTheme);
    };

    userTheme.addEventListener('change', handleChangeTheme);
    return () => userTheme.removeEventListener('change', handleChangeTheme);
  }, [setNewTheme]);

  return { theme, setNewTheme };
};
