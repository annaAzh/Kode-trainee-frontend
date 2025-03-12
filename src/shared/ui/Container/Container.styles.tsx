import styled from 'styled-components';

export const StyledContainer = styled.div<{ $fullHeight?: boolean }>`
  max-width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: ${(props) => (props.$fullHeight ? '100vh' : 'auto')};
`;
