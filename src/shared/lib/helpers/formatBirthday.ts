import { MONTHS } from '@/shared/constants';

export const formatBirthday = (birthday: string) => {
  const [, month, day] = birthday.split('-').map(Number);

  return `${day} ${MONTHS[month].slice(0, 3)}`;
};
