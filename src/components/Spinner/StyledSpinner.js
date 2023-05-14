import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

export const StyledSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledSpinner = styled(CircularProgress)`
  @keyframes changeColor {
    12.5% {
      color: #ff0000;
    }
    25% {
      color: #ffa500;
    }
    37.5% {
      color: #ffff00;
    }
    50% {
      color: #7fff00;
    }
    62.5% {
      color: #00ffff;
    }
    75% {
      color: #0000ff;
    }
    87.5% {
      color: #9932cc;
    }
    100% {
      color: #ff1493;
    }
  }
  animation: MuiCircularProgress-keyframes-circular-rotate 1.4s linear infinite,
    changeColor 3s linear infinite;
`;
