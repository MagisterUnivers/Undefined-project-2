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
import {
  createUserTaskThunk,
  updateUserTaskThunk,
} from '../../../redux/CalendarEvents/calendarEventsOperations';
import { useLocation } from 'react-router-dom';
import Notiflix from 'notiflix';

const TaskForm = ({ isEdit, id, categoryId, handleModalClose }) => {
  const [priority, setPriority] = useState('');
  const location = useLocation();

  const dispatch = useDispatch();
  const actualDay = location.pathname.slice(-10);

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    const newTitle = ev.currentTarget.title.value;
    let newStart = ev.currentTarget.start.value || '9:00';
    let newEnd = ev.currentTarget.end.value || '14:00';

    newStart = formatTime(newStart);
    newEnd = formatTime(newEnd);

    const credentials = {
      title: newTitle,
      start: newStart,
      end: newEnd,
      priority: priority,
      category: categoryId,
      date: actualDay,
    };

    const data = {
      credentials,
      id,
    };

    if (isEdit) {
      dispatch(updateUserTaskThunk(data))
        .then(() => {
          Notiflix.Notify.success('Task were updated!')
          handleModalClose()
        })
        .catch((error) => {
          Notiflix.Notify.failure(error.message);
        });
    } else {
      dispatch(createUserTaskThunk(credentials))
        .then(() => {
          Notiflix.Notify.success('Task were created!')
          handleModalClose()
        })
        .catch((error) => {
          Notiflix.Notify.failure(error.message);
        });
    }
  };

  const formatTime = (time) => {
    let formattedTime = time.replace(/\D/g, ''); // Видаляємо всі нецифрові символи

    if (formattedTime.length === 1 || formattedTime.length === 2) {
      // Якщо введено одну або дві цифри, форматуємо як "години:00"
      formattedTime = `${formattedTime.padStart(2, '0')}:00`;
    } else if (formattedTime.length === 3) {
      // Якщо введено три цифри, форматуємо як "години:хвилини"
      formattedTime = `${formattedTime.slice(0, 1)}:${formattedTime.slice(
        1,
        3
      )}`;
    } else if (formattedTime.length >= 4) {
      // Якщо введено чотири або більше цифр, форматуємо як "години:хвилини"
      formattedTime = `${formattedTime.slice(0, 2)}:${formattedTime.slice(
        2,
        4
      )}`;
    }

    return formattedTime;
  };

  const handleRadioChange = (ev) => {
    setPriority(ev.target.value);
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <StyledLabel className="dark:text-white">
        Title
        <StyledInput
          className="dark:bg-darktheme dark:border-bdark dark:border dark:text-white"
          type="text"
          placeholder="Enter text"
          maxLength="250"
          name="title"
          required
        />
      </StyledLabel>
      <StyledInputWrapper>
        <StyledLabel className="dark:text-white">
          Start
          <StyledInput
            className="dark:bg-darktheme dark:border-bdark dark:border dark:text-white"
            type="text"
            placeholder="9:00"
            name="start"
          />
        </StyledLabel>
        <StyledLabel className="dark:text-white">
          End
          <StyledInput
            className="dark:bg-darktheme dark:border-bdark dark:border dark:text-white"
            type="text"
            placeholder="14:00"
            name="end"
          />
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
            className="dark:text-white"
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
            className="dark:text-white"
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
            className="dark:text-white"
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
      {isEdit ? (
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
          <StyledCancelBtn type="button" onClick={handleModalClose}>
            Cancel
          </StyledCancelBtn>
        </StyledButtonsWrapper>
      )}
    </StyledForm>
  );
};

export default TaskForm;
