import * as moment from 'moment';

export const previousDate = (date) => {
  return moment(date).add(-1, 'day').toDate();
};

export const getStringFromDate = (date) => {
  const momentDate = moment(date ?? new Date());

  return momentDate.format('yyyy-MM-DD'); // ex: 2023-06-28
};

/**
 * Receives a dateString ex: 2023-06-28, returns a date
 */
export const getDateFromString = ({ date }) => {
  const momentDate = moment(date, 'yyyy-MM-DD');

  return momentDate.toDate();
};

/**
 * Get the days of the week starting on monday
 * {firstDay}  default 1 => Monday
 */

export const getDaysOfWeekLabels = ({ dateFormatter, firstDay = 1 }) => {
  const daysOfWeekLabels = [];

  for (let day = firstDay; day <= 7; day++) {
    const date = new Date(0, 0, day);
    const dayLabel = dateFormatter.format(date);

    daysOfWeekLabels.push(dayLabel);
  }

  return { daysOfWeekLabels };
};

export const splitArrayIntoChunks = (arr, chunkSize) => {
  const chucks = [];
  let current = [];

  arr.forEach((element) => {
    if (current.length === chunkSize) {
      chucks.push(current);
      current = [];
    }

    current.push(element);
  });

  chucks.push(current);

  return chucks;
};

export const fillFirstDays = (dates) => {
  if (!dates.length) return dates;

  const first = dates[0].toDate();
  const isMonday = first.getDay() === 1;

  if (isMonday) return dates;

  let previous = previousDate(first);

  dates.unshift({ toDate: () => previous, notIncluded: true });

  return fillFirstDays(dates);
};
