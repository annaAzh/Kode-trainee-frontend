import { FC, useEffect } from 'react';
import { StyledErrorButton, StyledErrorImg, StyledErrorWrapper } from './Error.styles';
import { BasicParagraph, Container, GrayParagraph } from '@/shared/ui';
import { TopBar } from '@/widget';
import { EmployeesTab } from '@/feature';
import { useGetUsersQuery } from '@/shared/api';
import { useAppSelector, useConnection } from '@/shared/lib/hooks';
import { getSelectedDepartment } from '@/entities/employee';
import { useNavigate } from 'react-router-dom';
import { Paths } from '@/shared/types';
import ImageFlyingSaucer from '/images/flying-saucer.png';
import { useTranslation } from 'react-i18next';

interface Props {
  text?: string;
}

export const ErrorPage: FC<Props> = ({ text }) => {
  const { t } = useTranslation();
  const selectedDepartment = useAppSelector(getSelectedDepartment);
  const { refetch, isFetching } = useGetUsersQuery(selectedDepartment);
  const isOnline = useConnection();
  const navigate = useNavigate();
  const handleReloadClick = () => {
    refetch();
  };

  useEffect(() => {
    if (isOnline) {
      navigate(Paths.HOME);
    }
  }, [isOnline, navigate]);

  return (
    <>
      <TopBar isFetching={isFetching} refetch={refetch} />
      <Container fullHeight>
        <EmployeesTab />
        <StyledErrorWrapper>
          <StyledErrorImg src={`${import.meta.env.BASE_URL}/${ImageFlyingSaucer}`} />
          <BasicParagraph $margin="0px 0px 12px 0px">{text || t('error_title')}</BasicParagraph>
          <GrayParagraph $margin="0px 0px 12px 0px">{t('error_desc')}</GrayParagraph>
          <StyledErrorButton onClick={handleReloadClick}>{t('error_retry')}</StyledErrorButton>
        </StyledErrorWrapper>
      </Container>
    </>
  );
};
