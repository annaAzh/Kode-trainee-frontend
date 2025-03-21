export const getNormalizedBirthday = (birthday: string, months: string[], currentLanguage: string) => {
  const year = new Date(birthday).getFullYear();
  const month = new Date(birthday).getMonth();
  const day = new Date(birthday).getDate();
  const monthName = months[month];

  if (currentLanguage === 'ru') {
    const lastCharFoRussian = month === 2 || month === 7 ? 'а' : 'я';
    return `${day} ${monthName}${lastCharFoRussian} ${year}`;
  }

  return `${day} ${monthName} ${year}`;
};
