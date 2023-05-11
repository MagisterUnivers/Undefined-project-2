import styled from 'styled-components';

const AuthNavigate = ({ isLoginForm }) => {
  return (
    <div>
      {isLoginForm ? (
        <StyledText>Sign up</StyledText>
      ) : (
        <StyledTextAlt>Log in</StyledTextAlt>
      )}
    </div>
  );
};

export default AuthNavigate;

const StyledText = styled.p`
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
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

  @media screen and (min-width: 768px) {
    bottom: 20%;
  }
  @media screen and (min-width: 1440px) {
    bottom: 23%;
  }
`;

const StyledTextAlt = styled.p`
  position: absolute;
  bottom: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
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

  @media screen and (min-width: 768px) {
    bottom: 15%;
  }
  @media screen and (min-width: 1440px) {
    bottom: 18%;
  }
`;