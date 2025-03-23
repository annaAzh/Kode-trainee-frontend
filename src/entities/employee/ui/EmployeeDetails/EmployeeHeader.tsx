import { FC } from 'react';
import {
  StyledAvatarWrapper,
  StyledBackButton,
  StyledBackgroundWrapper,
  StyledBackIcon,
  StyledWrapperEmployee,
} from './EmployeeDetails.styles';
import { Container, StyledWrapper, Typography } from '@/shared/ui';
import { EmployeeImage } from '../components/EmployeeImage';
import { Employee } from '../../model/types';
import { useNavigate } from 'react-router-dom';
import { Paths } from '@/shared/types';
import { SwitchControls } from '@/widget/SwitchControls/SwitchControls';

interface Props {
  employee: Employee;
}

export const EmployeeHeader: FC<Props> = ({ employee }) => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(Paths.HOME);
    }
  };
  return (
    <StyledBackgroundWrapper>
      <Container>
        <StyledWrapper>
          <StyledBackButton onClick={handleBackClick}>
            <StyledBackIcon
              src={`${import.meta.env.BASE_URL}/icons/back.svg`}
              alt="back button"
              $width="6px"
              $height="10px"
            />
          </StyledBackButton>
          <SwitchControls />
        </StyledWrapper>

        <StyledWrapperEmployee>
          <StyledAvatarWrapper>
            <EmployeeImage avatarUrl={employee.avatarUrl} />
          </StyledAvatarWrapper>
          <Typography tag="h1" fontWeight="700" fontSize="24px" lineHeight="28px">
            {employee.firstName} {employee.lastName}
            <Typography
              tag="span"
              fontWeight="400"
              fontSize="17px"
              lineHeight="22px"
              color="var(--color-border)"
              marginLeft="4px"
            >
              {employee.userTag}
            </Typography>
          </Typography>
          <Typography tag="p" fontSize="13px" lineHeight="16px" color="var(--color-dark-gray)">
            {employee.position.slice(0, 1).toUpperCase().concat(employee.position.slice(1))}
          </Typography>
        </StyledWrapperEmployee>
      </Container>
    </StyledBackgroundWrapper>
  );
};
