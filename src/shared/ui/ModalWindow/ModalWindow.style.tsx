import styled from 'styled-components';

export const StyledOverflow = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(5, 5, 16, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModalWindow = styled.div`
  padding: 24px 16px;
  background: ${(props) => props.theme.popupBackground};
  border-radius: 20px;
  position: relative;
  width: 373px;
  height: 192px;
  display: flex;
  flex-direction: column;
  z-index: 30;
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  right: 30px;
  top: 24px;
  background: ${(props) => props.theme.popupClose};
  width: 24px;
  height: 24px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    & > img {
      transform: scale(1.2);
      transform: rotate(90deg);
    }
  }
`;

export const CrossIcon = styled.img`
  width: 10px;
  height: 10px;
  transition: all 0.3s ease-in;
`;

export const StyledModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
`;

export const StyledModalTitle = styled.h4`
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => props.theme.textPopup};
  margin-bottom: 16px;
`;

export const StyledModalRadioLabel = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => props.theme.textPopup};
  display: block;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
`;

export const StyledModalRadioInput = styled.input`
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);

  &:checked + span:before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 6px solid ${(props) => props.theme.accent};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const StyledModalRadioSpan = styled.span`
  display: inline-block;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.accent};
  margin-right: 20px;
  position: relative;
  letter-spacing: normal;
  margin-right: 12px;
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: transparent;
  }
`;
