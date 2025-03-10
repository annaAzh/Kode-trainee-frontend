import { FC } from 'react';
import {
  StyledSkeletonAvatar,
  StyledSkeletonTextGroup,
  StyledSkeletonWrapper,
  StyledSkeletonWText,
} from './Skeleton.styles';

export const Skeleton: FC = () => {
  return (
    <StyledSkeletonWrapper>
      <StyledSkeletonAvatar />
      <StyledSkeletonTextGroup>
        <StyledSkeletonWText $width="144px" $height="16px" />
        <StyledSkeletonWText $width="80px" $height="12px" />
      </StyledSkeletonTextGroup>
    </StyledSkeletonWrapper>
  );
};
