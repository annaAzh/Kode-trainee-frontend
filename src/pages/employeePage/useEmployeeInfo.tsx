import { getEmployees, getSelectedDepartment, setEmployees } from '@/entities/employee';
import { useGetUsersQuery } from '@/shared/api';
import { getAgeFromBirthday, getNormalizedBirthday } from '@/shared/lib/helpers';
import { useMonths } from '@/shared/lib/helpers/useMonths';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { Departments, Paths } from '@/shared/types';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const useEmployeeInfo = (id: string) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const selectedDepartment = useAppSelector(getSelectedDepartment);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const employeeFromState = useAppSelector(getEmployees).filter((el) => el.id === id)[0];
  const [employee, setEmployee] = useState(employeeFromState);
  const { data } = useGetUsersQuery(selectedDepartment || Departments.all);
  const months = useMonths();

  useEffect(() => {
    if (employee || !id) return;

    if (data?.items) {
      dispatch(setEmployees(data.items));
      const foundedEmployee = data.items.find((employee) => employee.id === id);

      if (foundedEmployee) {
        setEmployee(foundedEmployee);
      } else {
        navigate(Paths.NOT_FOUND, { replace: true });
      }
    }
  }, [id, employee, data, dispatch, navigate]);

  const employeeAge = employee && getAgeFromBirthday(employee.birthday, currentLanguage);
  const normalizedBirthday = employee && getNormalizedBirthday(employee.birthday, months, currentLanguage);

  return { employee, employeeAge, normalizedBirthday };
};
