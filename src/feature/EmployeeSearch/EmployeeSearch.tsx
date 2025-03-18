import { getSearchQuery, setSearchQuery } from '@/entities/employee';
import { useAppDispatch, useAppSelector, useDebounce } from '@/shared/lib/hooks';
import { Input } from '@/shared/ui';
import { FC, useEffect, useState } from 'react';

export const EmployeeSearch: FC = () => {
  const searchQuery = useAppSelector(getSearchQuery);
  const [searchValue, setSearchValue] = useState<string>(searchQuery);
  const [isFocused, setIsFocused] = useState(false);

  const dispatch = useAppDispatch();

  const onChangeSearch = (value: string) => {
    setSearchValue(value);
  };

  const onFocus = (value: boolean) => {
    setIsFocused(value);
  };

  const debouncedQuery = useDebounce(searchValue, 400);

  useEffect(() => {
    if (searchQuery !== searchValue) {
      dispatch(setSearchQuery(debouncedQuery));
    }
  }, [debouncedQuery, dispatch, searchQuery, searchValue]);

  return <Input value={searchValue} onChangeValue={onChangeSearch} isFocused={isFocused} onChangeFocus={onFocus} />;
};
