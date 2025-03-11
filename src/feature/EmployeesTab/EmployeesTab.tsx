import { getSelectedDepartment, setSelectedDepartment } from '@/entities/employee';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { Departments } from '@/shared/types';
import { Tab, TabItem } from '@/shared/ui';
import { FC } from 'react';

export const EmployeesTab: FC = () => {
  const selectedDepartment = useAppSelector(getSelectedDepartment);
  const dispatch = useAppDispatch();

  const handleTabClick = (value: Departments) => {
    dispatch(setSelectedDepartment(value));
  };

  return (
    <Tab>
      {Object.values(Departments).map((value, i) => (
        <TabItem key={i} tab={value} selected={value === selectedDepartment} onClick={handleTabClick} />
      ))}
    </Tab>
  );
};
