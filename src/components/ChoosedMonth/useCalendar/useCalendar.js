import { useCalendarState } from 'react-stately';
import { useCalendar as useCalendarAria, useLocale } from 'react-aria';
import { createCalendar } from '@internationalized/date';
import { getDaysOfWeekLabels } from '../../../utils';
import { getCurrentDate, setCurrentDate } from '../../../redux';

export const useCalendar = () => {
  let { locale } = useLocale();

  const state = useCalendarState({
    onChange: setCurrentDate,
    defaultValue: getCurrentDate(),
    locale,
    createCalendar,
  });

  const dateFormatter = new Intl.DateTimeFormat(locale, { weekday: 'long' });
  const { daysOfWeekLabels } = getDaysOfWeekLabels({ dateFormatter });

  const {
    calendarProps,
    prevButtonProps: {
      isDisabled: isDisabled1,
      onPress: prevOnClick,
      ...prevButtonProps
    },
    nextButtonProps: {
      isDisabled: isDisabled2,
      onPress: nextOnClick,
      ...nextButtonProps
    },
  } = useCalendarAria({}, state);

  Object.assign(prevButtonProps, {
    onClick: prevOnClick,
    disabled: isDisabled1 === 'true',
  });

  Object.assign(nextButtonProps, {
    onClick: nextOnClick,
    disabled: isDisabled2 === 'true',
  });

  console.log(calendarProps);
  const title = calendarProps['aria-label'];

  return {
    title,
    calendarProps,
    prevButtonProps,
    nextButtonProps,
    state,
    daysOfWeekLabels,
    dateFormatter,
  };
};
