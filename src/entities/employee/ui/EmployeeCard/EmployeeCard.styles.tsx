import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledEmployeeCardWrapper = styled(Link)`
  display: flex;
  padding: 6px 0;
  gap: 16px;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

export const StyledAvatarWrapper = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  overflow: hidden;
`;

export const StyledAvatar = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const StyledTextGroup = styled.div<{ $gap?: string; $direction?: string }>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  gap: ${(props) => props.$gap};
  align-items: ${(props) => (props.$direction === 'row' ? 'center' : 'start')};
`;

export const StyledText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => props.theme.text};
`;

export const StyledMeta = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.theme.border};
`;

export const StyledJob = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: ${(props) => props.theme.jobText};
`;
