import React from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import { loginThunk } from 'redux/Auth/authOperations';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
import LogOut from 'components/Btn/LogoutBtn/LogOut';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { ReactComponent as DoneLogo } from './Done.svg';
import { ReactComponent as ErrorLogo } from './Error.svg';
import { useNavigate } from 'react-router';
const validationSchema = Yup.object({
  email: Yup.string()
    .email('This is an ERROR email')
    .required('Required field'),
  password: Yup.string()
    .min(6, 'This is an ERROR password')
    .required('Required field'),
});
export const LoginForm = () => {
  const navigate = useNavigate();
  // const history = useHistory();
  // const token1 = useSelector(selectAuthAccessToken);
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const InputField1 = ({ name, placeholder }) => {
    const [field, meta] = useField(name);
    const showError = meta.touched && meta.error;
    const className = showError ? 'error' : 'success';
    return (
      <>
        <StyledLabel
          htmlFor={name}
          style={{
            color: showError ? 'red' : 'green',
          }}
        >
          {name}
        </StyledLabel>
        <Rel>
          <StyledField
            type="text"
            id={name}
            name={name}
            placeholder={placeholder}
            className={className}
            {...field}
          />
          {showError && meta.touched && <StyledErrorLogo show={'true'} />}
          {!showError && meta.touched && <StyledDoneLogo showerror={''} />}
          {showError && meta.touched && (
            <ErrorMessage name={name} component="p" className="error-message" />
          )}
          {!showError && meta.touched && (
            <p
              style={{
                fontSize: '12px',
                lineHeight: 'calc(14/12)',
                marginTop: '8px',
                color: 'green',
              }}
            >
              This is a CORRECT {name}
            </p>
          )}
        </Rel>
      </>
    );
  };
  const handleSubmit = (values) => {
    // e.preventDefault();
    dispatch(loginThunk(values)).then(() => navigate('/main/account'));
  };
  return (
    <>
      {' '}
      {/* <LogOut /> */}
      <StyledWrapper>
        <StyledTitle>Log In</StyledTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <StyledForm>
              <StyledTaker>
                <StyledHolder>
                  <InputField1 name="email" placeholder="Email..." />
                </StyledHolder>
                <StyledHolder>
                  <InputField1 name="password" placeholder="Password..." />
                </StyledHolder>
              </StyledTaker>
              <StyledBtn type="submit">
                Log in <StyledIcon />
              </StyledBtn>
            </StyledForm>
          )}
        </Formik>
      </StyledWrapper>
      <AuthNavigate isLoginForm={true} />
    </>
  );
};
const StyledForm = styled(Form)`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 20px; */
`;
// const StyledErrorLogo = styled(ErrorLogo)`
//   display: ${props => (props.show ? 'block' : 'none')};
//   width: 20px;
//   height: 20px;
//   position: relative;
//   margin-left: 5px;
// `;
// const StyledDoneLogo = styled(DoneLogo)`
//   display: ${props => (props.showError ? 'none' : 'block')};
//   width: 20px;
//   height: 20px;
//   position: relative;
//   margin-left: 5px;
// `;
const StyledErrorLogo = styled(ErrorLogo)`
  display: ${(props) => (props.show ? 'block' : 'none')};
  width: 24px;
  height: 24px;
  position: absolute;
  right: 50px;
  top: 39%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;
const StyledDoneLogo = styled(DoneLogo)`
  display: ${(props) => (props.showerror ? 'none' : 'block')};
  width: 24px;
  height: 24px;
  position: absolute;
  right: 50px;
  top: 39%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;
const StyledIcon = styled(LoginRoundedIcon)`
  && {
    width: 18px;
    height: 18px;
    margin-left: 11px;
  }
  @media screen and (min-width: 768px) {
    && {
      width: 20px;
      height: 20px;
      margin-left: 11px;
    }
  }
  @media screen and (min-width: 1440px) {
    && {
      width: 20px;
      height: 20px;
      margin-left: 11px;
    }
  }
`;
const StyledTitle = styled.h2`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 32px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(24 / 18);
  color: #3e85f3;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(24 / 24);
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: calc(24 / 24);
    margin-bottom: 40px;
  }
`;
const StyledLabel = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: calc(15 / 12);
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(17 / 14);
  }
  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: calc(17 / 14);
  }
`;
const StyledHolder = styled.div`
  width: 287px;
  height: 69px;
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 42px;
  }
  @media screen and (min-width: 768px) {
    /* width: 0px;
    height: 0px; */
    /* max-width: 400px; */
    width: 400px;
    /* height: auto; */
    margin-bottom: 50px;
    &:last-of-type {
      margin-bottom: 48px;
    }
  }
  @media screen and (min-width: 1440px) {
    /* width: 0px;
    height: 0px; */
    /* max-width: 400px; */
    width: 400px;
    /* height: auto; */
    &:last-of-type {
      margin-bottom: 55px;
    }
  }
`;
const StyledTaker = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 400px;
  }
`;
const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 287px;
  height: 46px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: #ffffff;
  letter-spacing: -0.02em;
  border: transparent;
  background: #3e85f3;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 56px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 56px;
  }
`;
const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 335px;
  height: 376px;
  transform: translate(-50%, -50%);
  border: transparent;
  background: #ffffff;
  border: 1px solid black;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 480px;
    height: 424px;
  }
  @media screen and (min-width: 1440px) {
    width: 480px;
    height: 424px;
  }
`;
const Rel = styled.div`
  position: relative;
`;
const StyledField = styled(Field)`
  margin-top: 8px;
  /* margin-bottom: 32px; */
  padding: 14px;
  box-sizing: border-box;
  width: 287px;
  height: 46px;
  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.6);
  border-radius: 8px;

  &.error {
    border-color: red;
  }
  &.success {
    border-color: green;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 54px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 54px;
  }
`;
