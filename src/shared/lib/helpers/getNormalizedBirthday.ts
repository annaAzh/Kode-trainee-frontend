import { MONTHS } from '@/shared/constants';

export const getNormalizedBirthday = (birthday: string) => {
  const year = new Date(birthday).getFullYear();
  const month = new Date(birthday).getMonth();
  const day = new Date(birthday).getDate();
  const monthName = MONTHS[month];

  const lastChar = month === 2 || month === 7 ? 'а' : 'я';

  return `${day} ${monthName.slice(0, -1)}${lastChar} ${year}`;
};
