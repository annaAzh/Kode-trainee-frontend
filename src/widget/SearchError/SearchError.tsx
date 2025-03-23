import { FC } from 'react';
import { StyledSearchErrorImg, StyledSearchErrorWrapper } from './SearchError.style';
import { BasicParagraph, GrayParagraph } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

export const SearchError: FC = () => {
  const { t } = useTranslation();
  return (
    <StyledSearchErrorWrapper>
      <StyledSearchErrorImg src={`${import.meta.env.BASE_URL}/images/search.png`} />
      <BasicParagraph $margin="0px 0px 12px 0px">{t('search_not_found_title')}</BasicParagraph>
      <GrayParagraph>{t('search_not_found_desc')}</GrayParagraph>
    </StyledSearchErrorWrapper>
  );
};
