import styled, { keyframes } from 'styled-components';

const skeletonGradient = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
`;

export const StyledSkeletonWrapper = styled.div`
  display: flex;
  padding: 6px 0;
  gap: 16px;
  align-items: center;
  animation: ${skeletonGradient} 2s linear infinite;
`;

const SkeletonBase = styled.div`
  background: linear-gradient(90deg, var(--color-gray) 0%, var(--color-light-gray) 50%, var(--color-gray) 100%);
  background-size: 200% 100%;
  animation: ${skeletonGradient} 1.5s infinite linear;
`;

export const StyledSkeletonAvatar = styled(SkeletonBase)`
  width: 72px;
  height: 72px;
  border-radius: 50%;
`;

export const StyledSkeletonTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StyledSkeletonWText = styled(SkeletonBase)<{ $width: string; $height: string }>`
  width: ${(props) => props.$width || '144px'};
  height: ${(props) => props.$height || '16px'};
  border-radius: 50px;
`;
