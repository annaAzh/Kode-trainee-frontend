import { getSelectedDepartment, setEmployees } from '@/entities/employee';
import { EmployeesTab } from '@/feature';
import { useGetUsersQuery } from '@/shared/api';
import { useAppDispatch, useAppSelector, useConnection } from '@/shared/lib/hooks';
import { Paths } from '@/shared/types';
import { Container } from '@/shared/ui';
import { EmployeesList, TopBar } from '@/widget';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorPage } from '../errorPage/ErrorPage';

export const EmployeesPage: FC = () => {
  const dispatch = useAppDispatch();

  const selectedDepartment = useAppSelector(getSelectedDepartment);
  const { data, isFetching, error, refetch } = useGetUsersQuery(selectedDepartment);
  const isOnline = useConnection();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOnline) {
      navigate(Paths.HOME);
      refetch();
    }
  }, [isOnline, refetch, navigate]);

  useEffect(() => {
    if (data?.items) {
      dispatch(setEmployees(data?.items));
    }
  }, [data, dispatch]);

  if (error && !data) {
    return <ErrorPage />;
  }

  return (
    <>
      <TopBar isFetching={isFetching} refetch={refetch} />
      <Container fullHeight>
        <EmployeesTab />
        <EmployeesList isLoading={isFetching} />
      </Container>
    </>
  );
};
