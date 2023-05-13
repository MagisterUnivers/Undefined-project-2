import { useSelector } from 'react-redux';
import { selectUserInfo } from 'redux/selectors';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import styled from 'styled-components';

export const TaskColumnCard = ({ title, priority }) => {
  const truncate = (input) =>
    input?.length > 38 ? `${input.substring(0, 35)}...` : input;
  const { userImgUrl, name } = useSelector(selectUserInfo);
  return (
    <Card
      variant="outlined"
      sx={{
        width: { mobile: '299px', tablet: '301px' },
        height: { mobile: '108px', tablet: '112px' },
        padding: { mobile: '14px 14px 18px 14px' },
        backgroundColor: '#F7F6F9',
        border: '1px solid rgba(220, 227, 229, 0.8)',
        borderRadius: '8px',
      }}
    >
      <StyledTypography>
        {/* {truncate(title)} */}
        {truncate('Brainstorm ideas for new content or products')}
      </StyledTypography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        {' '}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '8px',
          }}
        >
          {' '}
          <Avatar
            src={userImgUrl}
            alt={`${name} avatar`}
            sx={{
              border: '1.8px solid #3E85F3',
              width: 32,
              height: 32,
            }}
          />
          {priority === 'high' ? (
            <StyledBox $high>
              {' '}
              {/* {priority.slice(0, 1).toUpperCase() + priority.slice(1)} */}
              High
            </StyledBox>
          ) : priority === 'medium' ? (
            <StyledBox $medium>
              {' '}
              {/* {priority.slice(0, 1).toUpperCase() + priority.slice(1)} */}
              Medium
            </StyledBox>
          ) : (
            <StyledBox>
              {/* <StyledP>{priority.slice(0, 1).toUpperCase() + priority.slice(1)}</StyledP> */}
              <StyledP>Low</StyledP>
            </StyledBox>
          )}
        </Box>
        {/* <TaskToolbar /> */}
        <CardActions
          sx={{ width: '68px', height: '16px', backgroundColor: 'red' }}
        ></CardActions>
      </Box>
    </Card>
  );
};

const StyledTypography = styled.h3`
  display: block;
  height: 16px;
  overflow-y: hidden;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 14px;
  line-height: calc(18 / 14);
  margin-bottom: 28px;
  @media screen and (min-width: 767.8px) {
    margin-bottom: 31px;
  }
`;

const StyledBox = styled(Box)`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 4px;
  /* width: 20px;
  height: 20px; */
  background-color: ${(props) =>
    props.$high ? '#EA3D65' : props.$medium ? '#F3B249' : '#72C2F8'};
`;
const StyledP = styled.p`
  font-weight: 600;
  font-size: 10px;
  line-height: calc(12 / 10);

  color: #f7f6f9;
`;
