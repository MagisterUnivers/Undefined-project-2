import React from 'react';
import { StyledSpinner, StyledSpinnerWrapper } from './StyledSpinner';

const Spinner = () => {
  return (
    <StyledSpinnerWrapper>
      <StyledSpinner size={200} thickness={5} variant="plain" value={25} disableShrink />
    </StyledSpinnerWrapper>
  );
};

export default Spinner;
