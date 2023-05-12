import { FormControl } from '@mui/base';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';
import { StyledForm, StyledInput, StyledLabel } from './StyledTaskForm';
import CircleIcon from '@mui/icons-material/Circle';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import { pink } from '@mui/material/colors';

const TaskForm = () => {
  const [isTaskCreated, setIsTaskCreated] = useState(false);
  return (
    <StyledForm>
      <StyledLabel>
        Title
        <StyledInput type="text" placeholder="Enter text" />
      </StyledLabel>
      <div>
        <StyledLabel>
          start
          <StyledInput type="text" />
        </StyledLabel>
        <StyledLabel>
          end
          <StyledInput type="text" />
        </StyledLabel>
      </div>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
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
          <FormControlLabel
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
          <FormControlLabel
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
        </RadioGroup>
      </FormControl>
      {isTaskCreated ? (
        <button type="submit">Edit</button>
      ) : (
        <div>
          <button type="submit">Add</button>
          <button type="button">Cancel</button>
        </div>
      )}
    </StyledForm>
  );
};

export default TaskForm;
