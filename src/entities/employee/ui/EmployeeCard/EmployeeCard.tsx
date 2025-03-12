import { FC } from 'react';

import { Employee } from '../../model/types';
import {
  StyledAvatarWrapper,
  StyledEmployeeCardWrapper,
  StyledJob,
  StyledMeta,
  StyledText,
  StyledTextGroup,
} from './EmployeeCard.styles';
import { EmployeeImage } from './components/EmployeeImage';

interface Props {
  employee: Employee;
}

export const EmployeeCard: FC<Props> = ({ employee }) => {
  return (
    <StyledEmployeeCardWrapper to={`employee/${employee.id}`}>
      <StyledAvatarWrapper>
        <EmployeeImage avatarUrl={employee.avatarUrl} />
      </StyledAvatarWrapper>
      <StyledTextGroup $direction="column" $gap="6px">
        <StyledTextGroup $direction="row" $gap="4px">
          <StyledText>
            {employee.firstName} {employee.lastName}
          </StyledText>
          <StyledMeta>{employee.userTag}</StyledMeta>
        </StyledTextGroup>
        <StyledJob>
          {employee.department} {employee.position}
        </StyledJob>
      </StyledTextGroup>
    </StyledEmployeeCardWrapper>
  );
};
