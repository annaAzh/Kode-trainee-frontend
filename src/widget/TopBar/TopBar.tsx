import { EmployeeSearch } from '@/feature';
import { Typography } from '@/shared/ui/Typography/Typography';
import { FC } from 'react';

export const TopBar: FC = () => {
  return (
    <>
      <Typography tag="h2" margin="20px 0 12px" lineHeight="28px">
        Поиск
      </Typography>
      <EmployeeSearch />
    </>
  );
};
