export const getDateParts = (date: string) => {
  const datePartsArray = (new Date(date)).toDateString().split(' ');

  return {
    day: datePartsArray[2],
    month: datePartsArray[1],
    year: datePartsArray[3],
  }
}