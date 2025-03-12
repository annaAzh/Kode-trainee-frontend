import { Container, Typography } from '@/shared/ui';
import { FC } from 'react';
import { StyledBackIcon, StyledEmployeePhone, StyledWrapper, StyledWrapperRow } from './EmployeeDetails.styles';
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
            <StyledBackIcon src="/icons/favorite.svg" alt="back button" $width="24px" $height="24px" />
            {normalizedBirthday}
          </Typography>
          <StyledEmployeePhone href={`tel:${employee.phone}`}>
            <StyledBackIcon src="/icons/phone.svg" alt="back button" $width="24px" $height="24px" />
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
