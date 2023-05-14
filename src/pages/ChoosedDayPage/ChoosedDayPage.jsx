import styled from 'styled-components';

import { useParams,useOutletContext } from 'react-router-dom';
import moment from 'moment';
import {useCurrentDate} from '../../redux'
import { useMediaQuery } from 'react-responsive';
import {getStringFromDate} from '../../utils/calendars'
import {useDateTasks} from '../../redux/CalendarEvents/calendarEventsSlice'
import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';

const ChoosedDayPage = () => {

   const {
    state,
    headerClassName,
    dateFormatter,
    daysOfWeekLabels,
    calendarProps,
  } = useOutletContext();

  const [currentCalendarDate] = useCurrentDate();
  const currentDate = currentCalendarDate?.toDate();
  
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const currentDateKey = getStringFromDate(currentDate); 
  const dateTasks = useDateTasks(currentDateKey); // task[]

  console.log(dateTasks);
    
  const startDate = moment(currentDate).startOf('week')
  const days = Array.from({ length: 7 }, (_, i) => moment(startDate).add(i, 'day').toDate());
 
  const dayNumbers = days.map((day) => day.getDate());
 
  let abbreviatedDaysOfWeekLabels = daysOfWeekLabels.map((day) =>
    day.slice(0, 3)
  );

  if (isMobile) {
    abbreviatedDaysOfWeekLabels = daysOfWeekLabels.map((day) =>
      day.slice(0, 1)
    );
  }

  if(!currentDateKey) {
   return (
      <div className="w-full h-full flex justify-center items-center">
        <span>Loading...</span>
      </div>
    );
  }
 
  return (
    <div>
      <ListDay className=" dark:bg-gray-bg  dark:border-gray-4">
        {days.map((date, index) => {
          const dateKey = getStringFromDate(date);
          const isSelected = currentDateKey === dateKey;

          return (
          <ItemMonthDay key={index}  >
            <MonthDay >{abbreviatedDaysOfWeekLabels[index]}</MonthDay>

            <TextDay
            className={`dark:text-white ${isSelected ? `text-white bg-blue-1 rounded-8` : ''}`} >{dayNumbers[index]}</TextDay>
          </ItemMonthDay>
        );
        })}
      </ListDay>
      <ListTask>
        {/* This day has {dateTasks.length} task! */}

        <TasksColumnsList tasks={dateTasks} />
      </ListTask>
    </div>
  );
};

export default ChoosedDayPage;

const ListDay = styled.ul` 
  display: flex; 
  flex-direction: row; 
  gap: 19px; 
  height: 68px; 
  border-radius: 8px; 
  padding: 14px 0px; 
  border: 1px solid rgba(220, 227, 229, 0.8); 
  background: white; 
  align-items: center; 
  justify-content: center; 
  margin-right: auto; 
  margin-left: auto; 
  @media screen and (max-width: 767px) { 
    width: 335px;

  } 
  @media screen and (min-width: 768px) { 
    gap: 69px; 
    padding: 10px 32px; 
    width: 704px;

  } 
  @media screen and (min-width: 1440px) { 
    gap: 122px; 
    padding: 14px 46px; 
    width: 1087px;
  } 
`; 
const ItemMonthDay = styled.li` 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  gap: 4px; 
`; 
const MonthDay = styled.p` 
  font-style: normal; 
  font-weight: 600; 
  font-size: 16px; 
  line-height: 18/16; 
  text-transform: uppercase; 
  color: #616161; 
`; 
const TextDay = styled.button` 
width: 20px; 
height: 22px; 
display: flex; 
justify-content: center; 
align-items: center; 
  font-family: 'Inter'; 
  font-style: normal; 
  font-weight: 700; 
width: 20px; 
height: 22px; 
font-size: 12px; 
line-height: 14px; 
   @media screen and (min-width: 768px) { 
     width: 27px; 
height: 26px; 
  font-size: 16px; 
  line-height: 18px; 
  } 
 
`; 
 
const ListTask = styled.ul` 
  display: flex; 
  gap: 27px; 
  margin-top: 16px; 
`;