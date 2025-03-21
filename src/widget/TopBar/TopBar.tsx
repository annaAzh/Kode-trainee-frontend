import { EmployeeSearch } from '@/feature';
import { useConnection } from '@/shared/lib/hooks';
import { Typography } from '@/shared/ui/Typography/Typography';
import { FC, useEffect, useState } from 'react';
import { StyledTopBarSearch, StyledTopBarText, StyledTopBarWrapper, StyledTopBarWrapperOffline } from './TopBar.styles';
import { Container, StyledWrapper } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { SwitchControls } from '../SwitchControls/SwitchControls';

interface Props {
  isFetching: boolean;
  refetch: () => void;
}

export const TopBar: FC<Props> = ({ isFetching, refetch }) => {
  const { t } = useTranslation();
  const isOnline = useConnection();
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    if (wasOffline && isOnline) {
      setWasOffline(false);
      refetch();
    }
    if (!isOnline) {
      setWasOffline(true);
    }
  }, [isOnline, wasOffline, refetch]);

  if (!isOnline) {
    return (
      <StyledTopBarWrapperOffline $isOffline>
        <Container>
          <StyledWrapper>
            <StyledTopBarSearch>{t('search')}</StyledTopBarSearch>
            <SwitchControls notOnLine />
          </StyledWrapper>
          <StyledTopBarText>{t('search_error_text')}</StyledTopBarText>
        </Container>
      </StyledTopBarWrapperOffline>
    );
  }

  if (isFetching) {
    return (
      <StyledTopBarWrapperOffline>
        <Container>
          <StyledWrapper>
            <StyledTopBarSearch>{t('search')}</StyledTopBarSearch>
            <SwitchControls />
          </StyledWrapper>
          <StyledTopBarText>{t('search_loading')}</StyledTopBarText>
        </Container>
      </StyledTopBarWrapperOffline>
    );
  }
  return (
    <StyledTopBarWrapper>
      <Container>
        <StyledWrapper>
          <Typography tag="h2" margin="20px 0 12px" lineHeight="28px">
            {t('search')}
          </Typography>
          <SwitchControls />
        </StyledWrapper>

        <EmployeeSearch />
      </Container>
    </StyledTopBarWrapper>
  );
};
