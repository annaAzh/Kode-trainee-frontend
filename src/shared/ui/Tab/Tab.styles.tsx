import styled from 'styled-components';

export const TabContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 10px;
  overflow-x: hidden;
  border-bottom: 1px solid ${(props) => props.theme.borderTab};
`;

export const TabContent = styled.div`
  margin-top: 16px;

  text-align: left;
`;

const activeTabItem = 'var(--color-accent)';
const defaultTabItem = 'transparent';

export const StyledTabItem = styled.div<{ selected: boolean }>`
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in;
  cursor: pointer;
  color: ${(props) => props.theme.border};
  border-bottom: 2px solid ${(props) => (props.selected ? activeTabItem : defaultTabItem)};
`;
