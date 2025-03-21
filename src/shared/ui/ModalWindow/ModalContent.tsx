import { FC } from 'react';
import {
  StyledModalRadioInput,
  StyledModalRadioLabel,
  StyledModalRadioSpan,
  StyledModalTitle,
} from './ModalWindow.style';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { getCurrentFilter, setFilter } from '@/entities/employee';
import { Filters } from '@/shared/types';
import { useTranslation } from 'react-i18next';

interface Props {
  onChangeFilter: () => void;
}

export const ModalContent: FC<Props> = ({ onChangeFilter }) => {
  const { t } = useTranslation();

  const filter = useAppSelector(getCurrentFilter);
  const dispatch = useAppDispatch();

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value as Filters));
    onChangeFilter();
  };

  return (
    <>
      <StyledModalTitle>{t('sorting')}</StyledModalTitle>

      <StyledModalRadioLabel>
        <StyledModalRadioInput
          type="radio"
          name="filter"
          value={Filters.alphabet}
          id={Filters.alphabet}
          checked={filter === Filters.alphabet}
          onChange={(e) => handleChangeFilter(e)}
        />
        <StyledModalRadioSpan />
        {t('sort_by_alphabet')}
      </StyledModalRadioLabel>

      <StyledModalRadioLabel>
        <StyledModalRadioInput
          type="radio"
          name="filter"
          value={Filters.birthday}
          id={Filters.birthday}
          checked={filter === Filters.birthday}
          onChange={(e) => handleChangeFilter(e)}
        />
        <StyledModalRadioSpan />
        {t('sort_by_birthday')}
      </StyledModalRadioLabel>
    </>
  );
};
