import { FC } from 'react';
import { StyledErrorButton, StyledErrorImg, StyledErrorWrapper } from './Error.styles';
import { BasicParagraph, Container, GrayParagraph } from '@/shared/ui';
import { TopBar } from '@/widget';
import { EmployeesTab } from '@/feature';
import { useGetUsersQuery } from '@/shared/api';
import { useAppSelector } from '@/shared/lib/hooks';
import { getSelectedDepartment } from '@/entities/employee';

interface Props {
  text?: string;
}

export const ErrorPage: FC<Props> = ({ text = 'Какой-то сверхразум все сломал' }) => {
  const selectedDepartment = useAppSelector(getSelectedDepartment);
  const { refetch } = useGetUsersQuery(selectedDepartment);
  const handleReloadClick = () => {
    refetch();
  };

  return (
    <Container fullHeight>
      <TopBar />
      <EmployeesTab />
      <StyledErrorWrapper>
        <StyledErrorImg src="/images/flying-saucer.png" />
        <BasicParagraph $margin="0px 0px 12px 0px">{text}</BasicParagraph>
        <GrayParagraph $margin="0px 0px 12px 0px">Постараемся быстро починить</GrayParagraph>
        <StyledErrorButton onClick={handleReloadClick}>Попробовать снова</StyledErrorButton>
      </StyledErrorWrapper>
    </Container>
  );
};
