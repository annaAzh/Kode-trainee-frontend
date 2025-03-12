import styled from 'styled-components';

export const StyledBackButton = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;

export const StyledBackIcon = styled.img<{ $width: string; $height: string }>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;

export const StyledAvatarWrapper = styled.div`
  width: 104px;
  height: 104px;
  border-radius: 50%;
  overflow: hidden;
`;

export const StyledWrapper = styled.div<{ $alignItems?: string }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: ${(props) => (props.$alignItems ? props.$alignItems : 'center')};
  gap: 12px;
`;

export const StyledWrapperRow = styled.div`
  padding: 19px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
`;

export const StyledBackgroundWrapper = styled.div`
  background-color: ${(props) => props.theme.inputBackGround};
  padding: 12px 0 32px;
`;

export const StyledEmployeePhone = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 18px;
  transition: all 0.3s ease-in;
  cursor: pointer;
  color: inherit;

  &:hover {
    opacity: 0.6;

    & > img {
      transition: all 0.3s ease-in;
      opacity: 0.7;
    }
  }
`;
