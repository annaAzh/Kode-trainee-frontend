import { initTheme } from '@/entities/theme/model/slice';
import { useAppDispatch } from '@/shared/lib/hooks';
import { FC, useEffect } from 'react';

export const InitTheme: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initTheme());
  }, [dispatch]);

  return null;
};
