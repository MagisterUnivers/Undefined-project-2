
import styled from 'styled-components';
import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { useParams } from 'react-router-dom';
import { useCalendar } from 'components/ChoosedMonth/useCalendar/useCalendar';
import moment from 'moment';
import {useCurrentDate} from '../../redux'
import { useMediaQuery } from 'react-responsive';
import {getStringFromDate} from '../../utils/calendars'
import {useDateTasks} from '../../redux/CalendarEvents/calendarEventsSlice'
import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';

const ChoosedDayPage = () => {
  const { currentDay: currentDayParam } = useParams();
  const [currentDate] = useCurrentDate();
  
const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const currentDateKey = getStringFromDate(currentDate.toDate()); 
  
  const dateTasks = useDateTasks( {date_key:currentDateKey}); // task[]
  console.log(dateTasks);


  let { title, prevButtonProps, nextButtonProps, daysOfWeekLabels } =
    useCalendar(currentDayParam);
    
  let startDate = moment(new Date(currentDayParam)).startOf('week')
  let days = Array.from({ length: 7 }, (_, i) => moment(startDate).add(i, 'day').toDate());
 
  let dayNumbers = days.map((day) => day.getDate());
   
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
        <span>Is Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <CalendarToolbar {...{ title, prevButtonProps, nextButtonProps }} />
      <ListDay>
        {days.map((date, index) => {
          const dateKey = getStringFromDate(date);
          const isSelected = currentDateKey === dateKey;

          return (
          <ItemMonthDay key={index}  >
            <MonthDay>{abbreviatedDaysOfWeekLabels[index]}</MonthDay>

            <TextDay
            className={`${isSelected ? `text-white bg-blue-1 rounded-8` : ''}`}
            >{dayNumbers[index]}</TextDay>
          </ItemMonthDay>
        );
        })}
      </ListDay>
      <ListTask>
        This day has {dateTasks.length} task!

        <TasksColumnsList />
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
  @media screen and (min-width: 768px) {
    gap: 69px;
    padding: 10px 32px;
  }
  @media screen and (min-width: 1440px) {
    gap: 122px;
    padding: 14px 46px;
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
const TextDay = styled.strong`
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
