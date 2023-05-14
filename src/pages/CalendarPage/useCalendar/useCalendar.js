import { useCalendarState } from 'react-stately';
import { useCalendar as useCalendarAria, useLocale } from 'react-aria';
import { createCalendar } from '@internationalized/date';
import { getDaysOfWeekLabels, getStringFromDate } from '../../../utils';
import {
  useCurrentDate,
  getMonthEvents,
  useCurrentMonth,
  selectUserLoading,
} from '../../../redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { parseDate } from '@internationalized/date';

export const useCalendar = () => {
  const { locale } = useLocale();
  const { currentDay: currentDayParam } = useParams();

  const [currentDate, setCurrentDate] = useCurrentDate();
  const [currentMonth, setCurrentMonth] = useCurrentMonth();
  const isLoading = useSelector(selectUserLoading);

  const dispatch = useDispatch();

  const { year, month } = currentMonth ?? {};

  const state = useCalendarState({
    onChange: setCurrentDate,
    value: currentDate,
    locale,
    createCalendar,
    // visibleDuration
  });

  useEffect(() => {
    if (!currentMonth) return;

    dispatch(getMonthEvents());
  }, [year, month]);

  useEffect(() => {
    if (isLoading || currentDate) return;
    const date_key = (() => {
      if (currentDayParam) return currentDayParam;

      return getStringFromDate(new Date()); // ex: 2020-02-03
    })();

    const calendarDate = parseDate(date_key);

    setCurrentDate(calendarDate);
    state.selectDate(calendarDate);

    const date = calendarDate.toDate();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    setCurrentMonth({
      year,
      month,
    });
  }, [isLoading, currentDayParam, currentDate]);

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

  // const { year, month } = selectedMonth ?? {};

  // const title = !selectedMonth
  //   ? ''
  //   : `${moment().set('month', month).format('MMM')} ${year}`;

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
