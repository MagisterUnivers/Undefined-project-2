import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { loginThunk } from 'redux/Auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthAccessToken } from 'redux/selectors';
import styled from 'styled-components';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
import LogOut from 'components/Btn/LogoutBtn/LogOut';
// import { UserForm } from '../UserForm/UserForm';
// import { useHistory } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(
      'enter valid email: min 6, max 63 characters, except .ru, .su, .рус, .рф,.москва etc'
    )
    .required("Обов'язкове поле"),
  password: Yup.string()
    .min(
      6,
      'the password must contain Latin letters: at least 1 lowercase, 1 uppercase, 1 number and be at least 6 and no more than 12 characters'
    )
    .required("Обов'язкове поле"),
});

export const LoginForm = () => {
  // const history = useHistory();
  const token1 = useSelector(selectAuthAccessToken);

  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = values => {
    // e.preventDefault();
    console.log('user is Logged In');
    console.log(values);
    dispatch(loginThunk(values));
    console.log(token1);
  };

  return (
    <>
      {' '}
      <LogOut />
      <StyledWrapper>
        <StyledTitle>Log In</StyledTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <StyledForm
          // onSubmit={handleSubmit}
          >
            {/* <div>
        <label htmlFor="name">Name:</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" component="div" className="error-message" />
      </div> */}
            <StyledTaker>
              <StyledHolder>
                <StyledLabel htmlFor="email">Email</StyledLabel>
                <br />
                <StyledField
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email..."
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </StyledHolder>
              <StyledHolder>
                <StyledLabel htmlFor="password">Password</StyledLabel>
                <br />
                <StyledField
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password..."
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </StyledHolder>
            </StyledTaker>

            <StyledBtn type="submit">Log in</StyledBtn>
          </StyledForm>
        </Formik>
      </StyledWrapper>
      <AuthNavigate isLoginForm={true} />
      {/* <UserForm /> */}
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
  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 768px) {
    /* width: 0px;
    height: 0px; */
    /* max-width: 400px; */
    width: 400px;
    height: auto;

    &:last-of-type {
      margin-bottom: 48px;
    }
  }
  @media screen and (min-width: 1440px) {
    /* width: 0px;
    height: 0px; */
    /* max-width: 400px; */
    width: 400px;
    height: auto;

    &:last-of-type {
      margin-bottom: 48px;
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

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 54px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 54px;
  }
`;
