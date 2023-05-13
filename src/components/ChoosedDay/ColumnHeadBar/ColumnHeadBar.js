import styled from 'styled-components';
import { Add, ControlPoint } from '@mui/icons-material';

const ColumnHeadBar = () => {
  const category = ['To do', 'In progress', 'Done'];

  return (
    <>
      {category.map((status, index) => (
        <ItemTask key={index}>
          <Title>
            {status}
            <ControlPoint />
          </Title>
          <ButtonTask>
            <Add />
            Add task
          </ButtonTask>
        </ItemTask>
      ))}
    </>
  );
};

export default ColumnHeadBar;

const ItemTask = styled.li`
  display: flex;
  flex-direction: column;
  gap: 42px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
`;

const Title = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #111111;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonTask = styled.button`
  width: 304px;
  height: 52px;
  border: 1px dashed #3e85f3;
  background: #e3f3ff;
  border-radius: 8px;
  padding: 16px 104px;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 18/14;
  text-align: center;
  color: #111111;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

/* <ItemTask>
<Title>To do <ControlPoint/></Title>
<ButtonTask><Add/>Add task</ButtonTask>
</ItemTask>
<ItemTask> 
<Title>In progress <ControlPoint/></Title> 
<ButtonTask><Add/> Add task</ButtonTask> 
</ItemTask> 
<ItemTask> 
<Title>Done <ControlPoint/></Title> 
<ButtonTask><Add/> Add task</ButtonTask> 
</ItemTask> */
