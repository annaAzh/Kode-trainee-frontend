export const formatBirthday = (birthday: string, months: string[]) => {
  const [, month, day] = birthday.split('-').map(Number);

  return `${day} ${months[month].slice(0, 3)}`;
};
