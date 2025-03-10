import { FC } from 'react';
import { StyledTabItem, TabContainer } from './Tab.styles';
import { Departments } from '@/shared/types';

interface Props {
  children: React.ReactNode;
}

export const Tab: FC<Props> = ({ children }) => {
  return <TabContainer>{children}</TabContainer>;
};

interface TabItemProps {
  tab: Departments;
  selected?: boolean;
  onClick: (value: Departments) => void;
}

export const TabItem: FC<TabItemProps> = ({ tab, selected = false, onClick }) => {
  return (
    <StyledTabItem selected={selected} onClick={() => onClick(tab)}>
      {tab}
    </StyledTabItem>
  );
};
