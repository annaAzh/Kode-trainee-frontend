export const getAgeFromBirthday = (birthday: string) => {
  const str = [' года', ' год', ' лет'];
  const milliseconds = 1000;
  const seconds = 60;
  const minutes = 60;
  const hours = 24;
  const days = 365.25;
  const dif = new Date().getTime() - new Date(birthday).getTime();
  const millisecondsInYear = milliseconds * seconds * minutes * hours * days;
  const employeeAge = Math.floor(dif / millisecondsInYear);

  const lastNum = employeeAge.toString().slice(-1);
  if (lastNum === '1') {
    return employeeAge + str[1];
  } else if (
    lastNum === '5' ||
    lastNum === '6' ||
    lastNum === '7' ||
    lastNum === '8' ||
    lastNum === '9' ||
    lastNum === '0'
  ) {
    return employeeAge + str[2];
  } else {
    return employeeAge + str[0];
  }
};
