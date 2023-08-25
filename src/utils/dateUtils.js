export const calculateAge = (dateString) => {

  if (dateString === null || dateString === undefined) {
    return;
  }

  const today = new Date();
  const splitDate = dateString.split('-');

  const birthdayYear = parseElement(splitDate[0]);
  const birthdayMonthIndex = parseElement(splitDate[1]) - 1;
  const birthdayDay = parseElement(splitDate[2]);

  let age = today.getFullYear() - birthdayYear;
  let monthDiff = today.getMonth() - birthdayMonthIndex;

  if (monthDiff < 0 || (monthDiff === 0 && today.getDay() > birthdayDay)) {
    age--;
  }

  return age;
}

const parseElement = (element) => {
  return parseInt(element);
}