import { setSearchQuery } from '@/entities/employee';
import { useAppDispatch, useDebounce } from '@/shared/lib/hooks';
import { Input } from '@/shared/ui';
import { FC, useEffect, useState } from 'react';

export const EmployeeSearch: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);

  const dispatch = useAppDispatch();

  const onChangeSearch = (value: string) => {
    setSearchValue(value);
  };

  const onFocus = (value: boolean) => {
    setIsFocused(value);
  };

  const debouncedQuery = useDebounce(searchValue, 250);

  useEffect(() => {
    dispatch(setSearchQuery(debouncedQuery));
  }, [debouncedQuery, dispatch]);

  return <Input value={searchValue} onChangeValue={onChangeSearch} isFocused={isFocused} onChangeFocus={onFocus} />;
};
