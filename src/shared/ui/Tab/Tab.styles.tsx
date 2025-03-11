import styled from 'styled-components';

export const TabContainer = styled.nav<{ $isDragging: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid ${(props) => props.theme.borderTab};
  cursor: grab;
  overflow-x: hidden;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  cursor: ${(props) => (props.$isDragging ? 'grabbing' : 'grab')};
  user-select: ${(props) => props.$isDragging && 'none'};

  &::-webkit-scrollbar {
    display: none;
  }

  & div {
    scroll-snap-align: start;
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
  }
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
  text-decoration: none;
`;
