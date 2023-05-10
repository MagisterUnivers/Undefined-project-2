import { Container, Typography } from '@mui/material';
import { StyledIcon, StyledIconWrapper } from './StyledRegisterPage';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundPage = () => {
  const wrapper = document.querySelector('body');
  wrapper.style.backgroundColor = '#DCEBF7';

  return (
    <>
      <Container sx={{ textAlign: 'right' }}>
        {' '}
        <Typography
          variant="h1"
          style={{
            color: '#3E85F3',
            fontFamily: 'Inter',
            fontWeight: '900',
            textShadow:
              '0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035)',
          }}
        >
          404
        </Typography>
        <Typography variant="h2">Whoops! Page not found</Typography>
        <Typography variant="h5" component="p">
          Try our <StyledLink to={'/about'}>homepage</StyledLink> instead
        </Typography>
      </Container>

      <StyledIconWrapper>
        <StyledIcon />
      </StyledIconWrapper>
    </>
  );
};

export default NotFoundPage;

const StyledLink = styled(Link)`
  color: #3e85f3;
  &:hover {
    text-decoration: underline;
  }
`;
