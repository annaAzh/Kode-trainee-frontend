import styled from 'styled-components';

export const SwitchInput = styled.input`
  width: 0;
  height: 0;
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  visibility: hidden;
`;

export const SwitchLabel = styled.label`
  display: flex;
  width: 46px;
  height: 22px;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.border};
  background-color: transparent;
  position: relative;
`;

export const SwitchSpan = styled.span`
  content: '';
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.theme.border};
  position: absolute;
  border-radius: 50%;
  top: 2px;
  bottom: 2px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  left: 2px;

  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;
