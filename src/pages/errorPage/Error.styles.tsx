import styled from 'styled-components';

export const StyledErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100%;
`;

export const StyledErrorImg = styled.img`
  width: 56px;
  height: 56px;
  margin-bottom: 8px;
`;

export const StyledErrorButton = styled.button`
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => props.theme.accent};
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    color: ${(props) => props.theme.text};
  }
`;
