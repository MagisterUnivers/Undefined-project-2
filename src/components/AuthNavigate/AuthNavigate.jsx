import styled from 'styled-components';

const AuthNavigate = ({ isLoginForm }) => {
  return (
    <div>
      {isLoginForm ? (
        <StyledText>Sign up</StyledText>
      ) : (
        <StyledText>Log in</StyledText>
      )}
    </div>
  );
};

export default AuthNavigate;

const StyledText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: calc(14 / 12);

  text-align: center;
  text-decoration-line: underline;

  color: #3e85f3;

  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;
