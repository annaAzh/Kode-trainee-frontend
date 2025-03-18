export const getNextBirthday = (birthday: string) => {
  const today = new Date(Date.now());
  const currentYear = new Date(Date.now()).getFullYear();
  const month = new Date(birthday).getMonth();
  const day = new Date(birthday).getDate();

  let nextBirthday = new Date(currentYear, month, day);

  if (nextBirthday < today) {
    nextBirthday = new Date(currentYear + 1, month, day);
  }

  return nextBirthday;
};
