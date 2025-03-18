import { FC } from 'react';
import { Skeleton } from '@/shared/ui';
import { useAppSelector } from '@/shared/lib/hooks';
import { EmployeeCard, getCurrentFilter, getFilteredEmployees } from '@/entities/employee';
import { SearchError } from '../SearchError/SearchError';
import { Divider } from '@/shared/ui/Divider/Divider';
import { groupByYear } from '@/shared/lib/helpers';
import React from 'react';

interface Props {
  isLoading: boolean;
}

export const EmployeesList: FC<Props> = ({ isLoading }) => {
  const employees = useAppSelector(getFilteredEmployees);
  const filter = useAppSelector(getCurrentFilter);

  if (isLoading) {
    return (
      <>
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </>
    );
  }

  if (!employees || employees.length === 0) return <SearchError />;

  return (
    <ul>
      {filter !== 'birthday' && employees.map((employee) => <EmployeeCard employee={employee} key={employee.id} />)}
      {filter === 'birthday' &&
        Object.entries(groupByYear(employees)).map(([year, employeeList]) => {
          return (
            <React.Fragment key={year}>
              {Number(year) !== new Date().getFullYear() && <Divider text={year} />}
              {employeeList.map((employee) => (
                <EmployeeCard employee={employee} key={employee.id} />
              ))}
            </React.Fragment>
          );
        })}
    </ul>
  );
};
