// import React from 'react';
// import { useCalendarCell } from 'react-aria';

// import { useCalendar, useLocale } from 'react-aria';
// import { useCalendarState } from 'react-stately';
// import { createCalendar } from '@internationalized/date';
// import { getWeeksInMonth } from '@internationalized/date';

// function CalendarCell({ state, date }) {
//   let ref = React.useRef(null);
//   let {
//     cellProps,
//     buttonProps,
//     isSelected,
//     isOutsideVisibleRange,
//     isDisabled,
//     isUnavailable,
//     formattedDate,
//   } = useCalendarCell({ date }, state, ref);

//   return (
//     <div
//       {...cellProps}
//       ref={ref}
//       className={`
//         h-20 border-l border-b border-gray-1
//         cell ${isSelected ? ' bg-blue-300' : ''} ${
//         isDisabled ? 'disabled' : ''
//       } ${isUnavailable ? 'unavailable' : ''}`}
//     >
//       <button
//         className={`relative w-full h-full ${
//           isOutsideVisibleRange ? 'text-gray-200' : ''
//         }`}
//         {...buttonProps}
//       >
//         <span className="absolute top-2 right-2">{formattedDate}</span>
//       </button>
//     </div>
//   );
// }

// const CalendarHeader = ({ className, daysOfWeekLabels }) => {
//   return (
//     <div
//       className={`grid grid-cols-7  border-r border-t border-gray-1
//       ${className}`}
//     >
//       {daysOfWeekLabels.map((dayLabel) => {
//         const shortLabel = dayLabel.substring(0, 3).toUpperCase();

//         return (
//           <span
//             className={`h-10 text-center border-l border-b border-gray-1`}
//             key={dayLabel}
//           >
//             {shortLabel}
//           </span>
//         );
//       })}
//     </div>
//   );
// };

// const getDaysOfWeekLabels = (locale = 'en-US') => {
//   const daysOfWeekLabels = [];
//   const dateFormatter = new Intl.DateTimeFormat(locale, { weekday: 'long' });

//   const monday = 1;

//   for (let day = monday; day <= 7; day++) {
//     const date = new Date(0, 0, day);
//     const dayLabel = dateFormatter.format(date);

//     daysOfWeekLabels.push(dayLabel);
//   }

//   return { daysOfWeekLabels, dateFormatter };
// };

// const splitArrayIntoChunks = (arr, chunkSize) =>
//   arr.reduce((chunks, _, index) => {
//     if (index % chunkSize === 0) {
//       chunks.push(arr.slice(index, index + chunkSize));
//     }
//     return chunks;
//   }, []);

// const CalendarGrid = ({ state, ...props }) => {
//   const { locale } = useLocale();
//   const { daysOfWeekLabels, dateFormatter } = getDaysOfWeekLabels(locale);

//   //   let { gridProps, headerProps, weekDays } = useCalendarGrid(
//   //     {
//   //       ...props,
//   //       weekStart,
//   //       dayFormatter,
//   //     },
//   //     state
//   //   );

//   // Get the number of weeks in the month so we can render the proper number of rows.
//   let weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

//   const { start, end } = state.visibleRange;

//   const isBetweenVisibleRange = (date) => {
//     return date >= start && date <= end;
//   };

//   const allDays = [...new Array(weeksInMonth).keys()]
//     .reduce((days, weekIndex) => {
//       const visibleDays = state
//         .getDatesInWeek(weekIndex)
//         .filter(isBetweenVisibleRange);

//       return [...days, ...visibleDays];
//     }, [])
//     .sort((a, b) => a - b);

//   const weeks = splitArrayIntoChunks(allDays, 7);

//   return (
//     <>
//       <CalendarHeader daysOfWeekLabels={daysOfWeekLabels} className={'mb-3'} />

//       <div className="grid grid-cols-7  border-r border-t border-gray-1">
//         {weeks.map((daysInWeek) => {
//           const datesOfWeekByDayLabel = daysInWeek.reduce((map, item) => {
//             const date = item.toDate();
//             const dayLabel = dateFormatter.format(date);

//             map.set(dayLabel, item);

//             return map;
//           }, new Map());

//           return daysOfWeekLabels.map((label, index) => {
//             const date = datesOfWeekByDayLabel.get(label);

//             if (!date) {
//               return <span className="border-l border-b border-gray-1 "></span>;
//             }

//             return <CalendarCell key={index} state={state} date={date} />;
//           });
//         })}
//       </div>
//     </>
//   );
// };

// export function Calendar(props) {
//   let { locale } = useLocale();
//   let state = useCalendarState({
//     ...props,
//     locale,
//     createCalendar,
//   });

//   let {
//     calendarProps: { title, ...calendarProps },
//     prevButtonProps: {
//       isDisabled: isDisabled1,
//       onPress: prevOnClick,
//       ...prevButtonProps
//     },
//     nextButtonProps: {
//       isDisabled: isDisabled2,
//       onPress: nextOnClick,
//       ...nextButtonProps
//     },
//   } = useCalendar(props, state);

//   return (
//     <div {...calendarProps} className=" w-3/4 m-auto mt-52">
//       <CalendarGrid state={state} />

//       <div className="header">
//         <h2>{title}</h2>

//         <button type="button" {...prevButtonProps} onClick={prevOnClick}>
//           &lt;
//         </button>

//         <button type="button" {...nextButtonProps} onClick={nextOnClick}>
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// }
