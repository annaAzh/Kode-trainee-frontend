import { FC } from 'react';

import { Employee } from '../../model/types';
import {
  StyledAvatar,
  StyledAvatarWrapper,
  StyledEmployeeCardWrapper,
  StyledJob,
  StyledMeta,
  StyledText,
  StyledTextGroup,
} from './EmployeeCard.styles';

const AVATAR_PLACEHOLDER = '/images/img_placeholder.png';

interface Props {
  employee: Employee;
}

export const EmployeeCard: FC<Props> = ({ employee }) => {
  return (
    <StyledEmployeeCardWrapper>
      <StyledAvatarWrapper>
        <StyledAvatar
          onError={(e) => (e.currentTarget.src = AVATAR_PLACEHOLDER)}
          src={employee.avatarUrl || AVATAR_PLACEHOLDER}
          alt={employee.firstName + employee.lastName}
        />
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
