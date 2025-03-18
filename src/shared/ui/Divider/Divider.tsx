import { FC } from 'react';
import { StyledDivider, StyledDividerWrapper, StyledTextDivider } from './Divider.styles';

interface Props {
  text: string;
}

export const Divider: FC<Props> = ({ text }) => {
  return (
    <StyledDividerWrapper>
      <StyledDivider />
      <StyledTextDivider>{text}</StyledTextDivider>
      <StyledDivider />
    </StyledDividerWrapper>
  );
};
