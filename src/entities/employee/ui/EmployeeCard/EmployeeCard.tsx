import { FC } from 'react';

import { Employee } from '../../model/types';
import {
  StyledAvatarWrapper,
  StyledBirthday,
  StyledEmployeeCardWrapper,
  StyledJob,
  StyledMeta,
  StyledText,
  StyledTextGroup,
} from './EmployeeCard.styles';
import { EmployeeImage } from '../components/EmployeeImage';
import { formatBirthday } from '@/shared/lib/helpers';
import { useAppSelector } from '@/shared/lib/hooks';
import { getCurrentFilter } from '../../model/selectors';

interface Props {
  employee: Employee;
}

export const EmployeeCard: FC<Props> = ({ employee }) => {
  const filter = useAppSelector(getCurrentFilter);
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
      {filter === 'birthday' && <StyledBirthday>{formatBirthday(employee.birthday)}</StyledBirthday>}
    </StyledEmployeeCardWrapper>
  );
};
