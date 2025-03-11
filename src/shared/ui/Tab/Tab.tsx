import { FC, useRef, useState } from 'react';
import { StyledTabItem, TabContainer } from './Tab.styles';
import { Departments } from '@/shared/types';

interface Props {
  children: React.ReactNode;
}

export const Tab: FC<Props> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <TabContainer
      ref={containerRef}
      $isDragging={isDragging}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
    >
      {children}
    </TabContainer>
  );
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
