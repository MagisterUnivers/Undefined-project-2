import { FormControl } from '@mui/base';
import { Radio } from '@mui/material';
import { useState } from 'react';
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
import CircleIcon from '@mui/icons-material/Circle';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';

const TaskForm = () => {
  const [isTaskCreated] = useState(false);
  return (  
    <StyledForm>
      <StyledLabel>
        Title
        <StyledInput type="text" placeholder="Enter text" />
      </StyledLabel>
      <StyledInputWrapper>
        <StyledLabel>
          Start
          <StyledInput type="text" placeholder="9:00" />
        </StyledLabel>
        <StyledLabel>
          End
          <StyledInput type="text" placeholder="14:00" />
        </StyledLabel>
      </StyledInputWrapper>
      <FormControl>
        <StyledRadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
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
