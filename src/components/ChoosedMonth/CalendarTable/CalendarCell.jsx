import { useRef } from 'react';
import { useCalendarCell } from 'react-aria';
import { useEventTasks } from '../../../redux';
import { getCalendarKey } from '../../../utils';
import styled from 'styled-components';

const LOW = 'low';
const HIGHT = 'hight';
const MEDIUM = 'medium';

/**
 * Cell of the month calendar
 */
export const CalendarCell = ({ state, date }) => {
  // date is not a Date
  const date_key = getCalendarKey({ date: date.toDate() }); // date_key: 2023-09-21

  const monthTasks = useEventTasks({ date_key }); // task[]

  const ref = useRef(null);

  const {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref);

  //     task:
  //     _id: '64303c8582dc6fccdee4f8d2',
  //     title: 'toDo',
  //     start: '9-00',
  //     end: '14-00',
  //     priority: 'medium',
  //     category: 'to-do',
  //     owner: '64303c5f82dc6fccdee4f8dc',
  //     date: '2023-03-17T00:00:00.000Z',
  //     createdAt: '2023-04-07T15:53:41.088Z',
  //     updatedAt: '2023-04-07T15:53:41.088Z',
  //     __v: 0,[]

  return (
    <StyledTd
      {...cellProps}
      ref={ref}
      className={`w-1/7 border-r last:border-r-0  border-gray-3  dark:border-gray-4 
      ${isDisabled ? 'disabled' : ''} 
      ${isUnavailable ? 'unavailable' : ''}`}
    >
      <StyledButton
        className={`relative w-full h-full ${
          isOutsideVisibleRange ? 'text-gray-200 ' : ''
        }`}
        {...buttonProps}
      >
        <span
          className={`font-inter font-bold text-xs 
            tablet:text-16 tablet:leading-17 desktop:text-16 desktop:leading-17
          text-black-text dark:text-white absolute top-12px right-10px 
          w-5 h-6 tablet:w-7 tablet:h-7 desktop:w-7 desktop:h-7 
          rounded-md tablet:rounded-8 desktop:rounded-8 
          flex justify-center items-center
          ${isSelected ? `text-white bg-blue-1` : ''} `}
        >
          {formattedDate}
        </span>

        {/* <StyledDiv className="min-h-50px flex flex-col gap-1"> */}
        <StyledDiv>
          {monthTasks.map((tasks) => {
            const { title, priority, _id } = tasks;

            return (
              <StyledSpan
                className={` rounded-8 font-inter text-xxs font-bold tablet:text-14 desktop:text-14 
                 overflow-ellipsis whitespace-nowrap overflow-hidden  
                 ${priority === LOW ? ' bg-blue-3 text-blue-1' : ''} 
                 ${priority === MEDIUM ? ' bg-yellow-1  text-yellow-2' : ''} 
                 ${priority === HIGHT ? '  bg-red-1 text-red-2' : ''} 
                 `}
                key={_id}
              >
                {title}
              </StyledSpan>
            );
          })}
        </StyledDiv>
      </StyledButton>
    </StyledTd>
  );
};

const StyledDiv = styled.ul`
  max-height: 50px;
  overflow: hidden;
  @media screen and (min-width: 767.98px) {
    max-height: 67px;
  }
`;
const StyledSpan = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 2px;
  }
`;
const StyledTd = styled.td`
  height: 94px;
  @media screen and (min-width: 767.98px) {
    height: 144px;
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: flex-end;
  padding: 0px 3px 3px 3px;
`;
