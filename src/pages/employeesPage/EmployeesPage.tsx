import { getSelectedDepartment, setEmployees } from '@/entities/employee';
import { EmployeesTab } from '@/feature';
import { useGetUsersQuery } from '@/shared/api';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { Container } from '@/shared/ui';
import { EmployeesList, TopBar } from '@/widget';
import { FC, useEffect } from 'react';

export const EmployeesPage: FC = () => {
  const dispatch = useAppDispatch();

  const selectedDepartment = useAppSelector(getSelectedDepartment);
  const { data, isFetching } = useGetUsersQuery(selectedDepartment);

  useEffect(() => {
    if (data?.items) {
      dispatch(setEmployees(data?.items));
    }
  }, [data, dispatch]);

  return (
    <Container fullHeight>
      <TopBar />
      <EmployeesTab />
      <EmployeesList isLoading={isFetching} />
    </Container>
  );
};
