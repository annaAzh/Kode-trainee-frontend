import { FC } from 'react';
import { Skeleton } from '@/shared/ui';
import { useAppSelector } from '@/shared/lib/hooks';
import { EmployeeCard, getFilteredEmployees } from '@/entities/employee';

interface Props {
  isLoading: boolean;
}

export const EmployeesList: FC<Props> = ({ isLoading }) => {
  const employees = useAppSelector(getFilteredEmployees);

  if (isLoading)
    return (
      <>
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </>
    );

  if (!employees || employees.length === 0) return <p>No data</p>;

  return (
    <ul>
      {employees.map((employee) => (
        <EmployeeCard employee={employee} key={employee.id} />
      ))}
    </ul>
  );
};
