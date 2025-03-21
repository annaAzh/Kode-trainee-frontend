import styled from 'styled-components';

export const SwitchInput = styled.input`
  width: 0;
  height: 0;
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  visibility: hidden;
`;

export const SwitchLabel = styled.label<{ $notOnline?: boolean; $disabled?: boolean }>`
  display: flex;
  width: 46px;
  height: 22px;
  border-radius: 20px;
  border: 1px solid ${(props) => (props.$notOnline ? 'var(--color-white)' : props.theme.border)};
  background-color: transparent;
  position: relative;
  align-items: center;
  color: ${(props) => (props.$notOnline ? 'var(--color-white)' : props.theme.border)};
  padding-left: 4px;
  cursor: pointer;
  opacity: ${(props) => props.$disabled && '0.5'};
  pointer-events: ${(props) => props.$disabled && 'none'};
`;

export const SwitchText = styled.span<{ $notOnline?: boolean }>`
  padding: 0 4px;
  width: 100%;
  font-size: 10px;
  line-height: 10px;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  color: ${(props) => (props.$notOnline ? 'var(--color-white)' : props.theme.border)};

  ${SwitchInput}:not(:checked) + ${SwitchLabel} &:last-child {
    text-align: right;
  }
  ${SwitchInput}:checked + ${SwitchLabel} &:last-child {
    text-align: left;
  }
`;

export const SwitchSpan = styled.span<{ $notOnline?: boolean }>`
  content: '';
  width: 16px;
  height: 16px;
  background-color: ${(props) => (props.$notOnline ? 'var(--color-white)' : props.theme.border)};
  position: absolute;
  border-radius: 50%;
  top: 2px;
  bottom: 2px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  left: 2px;
  font-size: 10px;
  line-height: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.accent};

  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;
