import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.inputBackGround};
  padding: 8px 36px 8px 44px;
  border-radius: 8px;
  border: none;
  outline: none;
  flex: 1;
  height: 40px;
  font-size: 15px;

  &::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    color: ${(props) => props.theme.searchPlaceholder};
  }
`;

export const IconWrapper = styled.div<{ $left?: boolean; $right?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $left }) => $left && 'left: 12px'}
  ${({ $right }) => $right && 'right: 12px'}
`;

export const SearchIcon = styled.div<{ $isActive?: boolean }>`
  width: 24px;
  height: 24px;
  transition: color 0.3s ease-in;
  background-color: ${(props) => (props.$isActive ? props.theme.searchPlaceholder : props.theme.inputPlaceholder)};
  mask-image: url('/icons/search.svg');
  mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-image: url('/icons/search.svg');
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
`;

export const ListIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.theme.inputPlaceholder};
  mask-image: url('/icons/list-ui-alt.svg');
  mask-repeat: no-repeat;
  mask-size: contain;
  cursor: pointer;
  transition: all 0.3s ease-in;
  -webkit-mask-image: url('/icons/list-ui-alt.svg');
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;

  &:hover {
    background-color: ${(props) => props.theme.searchPlaceholder};
  }
`;
