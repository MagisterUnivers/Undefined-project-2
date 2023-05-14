import React, { useState } from 'react';
import { FormControl } from '@mui/base';
import { Radio } from '@mui/material';
import { useDispatch } from 'react-redux';
import CircleIcon from '@mui/icons-material/Circle';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import {
  StyledAddBtn,
  StyledButtonsWrapper,
  StyledCancelBtn,
  StyledEditBtn,
  StyledForm,
  StyledFormControlLabel,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledPencilIcon,
  StyledPlusIcon,
  StyledRadioGroup,
} from './StyledTaskForm';
import { createUserTaskThunk } from '../../../redux/CalendarEvents/calendarEventsOperations';
import { updateUserDataThunk } from 'redux/UserInfo/userInfoOperations';

const TaskForm = ({ columnCategory, currentDay, isEdit, id }) => {
  const [isTaskCreated] = useState(false);
  const [priority, setPriority] = useState('');

  const dispatch = useDispatch();

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    const newTitle = ev.currentTarget.title.value;
    const newStart = ev.currentTarget.start.value;
    const newEnd = ev.currentTarget.end.value;

    let newCategory = '';
    switch (columnCategory.toLowerCase()) {
      case 'In progress':
        newCategory = 'in-progress';
        break;
      case 'To do':
        newCategory = 'to-do';
        break;
      case 'Done':
        newCategory = 'done';
        break;
      default:
        break;
    }

    const credentials = {
      title: newTitle,
      start: newStart,
      end: newEnd,
      priority,
      category: newCategory,
      date: currentDay,
    };

    if (isEdit) return dispatch(updateUserDataThunk(id, credentials));

    dispatch(createUserTaskThunk(credentials));
  };

  const handleRadioChange = (ev) => {
    setPriority(ev.target.value);
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <StyledLabel>
        Title
        <StyledInput
          type="text"
          placeholder="Enter text"
          maxLength="250"
          name="title"
          required
        />
      </StyledLabel>
      <StyledInputWrapper>
        <StyledLabel>
          Start
          <StyledInput type="text" placeholder="9:00" name="start" required />
        </StyledLabel>
        <StyledLabel>
          End
          <StyledInput type="text" placeholder="14:00" name="end" required />
        </StyledLabel>
      </StyledInputWrapper>
      <FormControl>
        <StyledRadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleRadioChange}
        >
          <StyledFormControlLabel
            value="low"
            control={
              <Radio
                icon={
                  <CircleIcon
                    htmlColor="#72C2F8"
                    sx={{ width: '12px', height: '12px', padding: '2px' }}
                  />
                }
                checkedIcon={
                  <CircleTwoToneIcon
                    htmlColor="#72C2F8"
                    sx={{ width: '12px', height: '12px' }}
                  />
                }
              />
            }
            label="Low"
          />
          <StyledFormControlLabel
            value="medium"
            control={
              <Radio
                icon={
                  <CircleIcon
                    htmlColor="#F3B249"
                    sx={{ width: '12px', height: '12px', padding: '2px' }}
                  />
                }
                checkedIcon={
                  <CircleTwoToneIcon
                    htmlColor="#F3B249"
                    sx={{ width: '12px', height: '12px' }}
                  />
                }
              />
            }
            label="Medium"
          />
          <StyledFormControlLabel
            value="high"
            control={
              <Radio
                icon={
                  <CircleIcon
                    htmlColor="#EA3D65"
                    sx={{ width: '12px', height: '12px', padding: '2px' }}
                  />
                }
                checkedIcon={
                  <CircleTwoToneIcon
                    htmlColor="#EA3D65"
                    sx={{ width: '12px', height: '12px' }}
                  />
                }
              />
            }
            label="High"
          />
        </StyledRadioGroup>
      </FormControl>
      {isTaskCreated ? (
        <StyledEditBtn type="submit">
          <StyledPencilIcon />
          Edit
        </StyledEditBtn>
      ) : (
        <StyledButtonsWrapper>
          <StyledAddBtn type="submit">
            <StyledPlusIcon />
            Add
          </StyledAddBtn>
          <StyledCancelBtn type="button">Cancel</StyledCancelBtn>
        </StyledButtonsWrapper>
      )}
    </StyledForm>
  );
};

export default TaskForm;
