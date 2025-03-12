import { FC } from 'react';
import { StyledContainer } from './Container.styles';

interface Props {
  children: React.ReactNode;
  fullHeight?: boolean;
}

export const Container: FC<Props> = ({ children, fullHeight = false }) => {
  return <StyledContainer $fullHeight={fullHeight}>{children}</StyledContainer>;
};
