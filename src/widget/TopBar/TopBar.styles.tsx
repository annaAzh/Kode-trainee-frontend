import { Typography } from '@/shared/ui';
import styled from 'styled-components';

export const StyledTopBarWrapperOffline = styled.div<{ $isOffline?: boolean }>`
  background-color: ${(props) => (props.$isOffline ? props.theme.connectionFail : props.theme.accent)};
  height: 108px;
  transition: all 0.3s ease-in;
`;

export const StyledTopBarWrapper = styled.div`
  height: 108px;
`;

export const StyledTopBarText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography tag="p" color="var(--color-white)" marginBottom="12px">
      {children}
    </Typography>
  );
};

export const StyledTopBarSearch = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography tag="h2" margin="20px 0 12px" lineHeight="28px" color="var(--color-white)">
      {children}
    </Typography>
  );
};
