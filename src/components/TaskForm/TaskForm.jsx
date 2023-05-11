import { FormControl } from '@mui/base';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';
import { StyledForm, StyledInput, StyledLabel } from './StyledTaskForm';
import CircleIcon from '@mui/icons-material/Circle';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';

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
                  <CircleTwoToneIcon
                    sx={{
                      width: '12px',
                      height: '12px',
                      filter:
                        'invert(78%) sepia(10%) saturate(4219%) hue-rotate(175deg) brightness(99%) contrast(96%)',
                    }}
                  />
                }
                checkedIcon={<CircleTwoToneIcon />}
              />
            }
            label="Low"
          />
          <FormControlLabel
            value="medium"
            control={<Radio icon={<CircleIcon htmlColor="#F3B249" />} />}
            label="Medium"
          />
          <FormControlLabel
            value="high"
            control={<Radio icon={<CircleIcon htmlColor="#EA3D65" />} />}
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
