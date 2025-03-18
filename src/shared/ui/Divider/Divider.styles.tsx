import styled from 'styled-components';

export const StyledDividerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const StyledDivider = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.borderTab};
  width: 100%;
`;
export const StyledTextDivider = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  max-width: 160px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.borderTab};
`;
