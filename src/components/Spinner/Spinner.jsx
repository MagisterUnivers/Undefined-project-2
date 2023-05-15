import React from 'react';
import { StyledSpinner, StyledSpinnerWrapper } from './StyledSpinner';

const Spinner = () => {
  return (
    <StyledSpinnerWrapper>
      <StyledSpinner size={200} thickness={5} value={25} />
    </StyledSpinnerWrapper>
  );
};

export default Spinner;
