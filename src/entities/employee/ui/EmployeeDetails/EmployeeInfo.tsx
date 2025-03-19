import { Container, Typography } from '@/shared/ui';
import { FC } from 'react';
import { StyledEmployeePhone, StyledIcon, StyledWrapper, StyledWrapperRow } from './EmployeeDetails.styles';
import { Employee } from '../../model/types';

interface Props {
  normalizedBirthday: string;
  employee: Employee;
  employeeAge: string;
}

export const EmployeeInfo: FC<Props> = ({ normalizedBirthday, employee, employeeAge }) => {
  return (
    <Container>
      <StyledWrapperRow>
        <StyledWrapper $alignItems="left">
          <Typography
            tag="p"
            display="flex"
            alignItems="center"
            gap="18px"
            fontWeight="500"
            fontSize="16px"
            lineHeight="20px"
          >
            <StyledIcon $imagePath="/icons/favorite.svg" />
            {normalizedBirthday}
          </Typography>
          <StyledEmployeePhone href={`tel:${employee.phone}`}>
            <StyledIcon $imagePath="/icons/phone.svg" />
            {employee.phone}
          </StyledEmployeePhone>
        </StyledWrapper>

        <Typography
          tag="p"
          fontWeight="500"
          fontSize="16px"
          lineHeight="20px"
          color="var(--color-border)"
          marginLeft="4px"
        >
          {employeeAge}
        </Typography>
      </StyledWrapperRow>
    </Container>
  );
};
