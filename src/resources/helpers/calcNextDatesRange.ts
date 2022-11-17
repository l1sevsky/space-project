type TParams = {
  prevDate: string | null,
  amountDays: number,
}

type TReturn = {
  startDate: string,
  endDate: string,
}

export const calcNextDatesRange = ({ prevDate, amountDays }: TParams): TReturn => {
  const oneDayLength = 24 * 60 * 60 * 1000;

  const endDate = prevDate ? Date.parse(prevDate) - oneDayLength : Date.now();
  const startDate = endDate - (amountDays - 1) * oneDayLength;

  return {
    startDate: (new Date(startDate)).toISOString().slice(0, 10), 
    endDate: (new Date(endDate)).toISOString().slice(0, 10),
  };
}