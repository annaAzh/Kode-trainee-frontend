import { FC } from 'react';
import { StyledSearchErrorImg, StyledSearchErrorWrapper } from './SearchError.style';
import { BasicParagraph, GrayParagraph } from '@/shared/ui';

export const SearchError: FC = () => {
  return (
    <StyledSearchErrorWrapper>
      <StyledSearchErrorImg src="/images/search.png" />
      <BasicParagraph $margin="0px 0px 12px 0px">Мы никого не нашли</BasicParagraph>
      <GrayParagraph>Попробуй скорректировать запрос</GrayParagraph>
    </StyledSearchErrorWrapper>
  );
};
