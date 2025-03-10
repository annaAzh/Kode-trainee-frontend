import { FC } from 'react';
import { StyledContainer } from './Container.styles';

interface Props {
  children: React.ReactNode;
}

export const Container: FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
