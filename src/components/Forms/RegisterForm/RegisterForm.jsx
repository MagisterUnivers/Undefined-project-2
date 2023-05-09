import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { registrationThunk } from 'redux/Auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthAccessToken } from 'redux/selectors';
import styled from 'styled-components';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
// import { useHistory } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Обов'язкове поле"),
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

export const RegisterForm = () => {
  // const history = useHistory();
  const token1 = useSelector(selectAuthAccessToken);

  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = values => {
    // e.preventDefault();
    console.log('user is Registered');
    console.log(values);
    dispatch(registrationThunk(values));
    console.log(token1);

    // validationSchema
    //   .validate(values)
    //   .then(() => {
    //     console.log('Hi');
    //   })
    //   .catch(errors => {
    //     console.error(errors);
    //   })
    //   .finally(() => {
    //     // setSubmitting(false);
    //   });
  };

  return (
    <>
      <StyledWrapper>
        <StyledTitle>Sign up</StyledTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <StyledForm>
            <StyledHolder>
              <StyledLabel htmlFor="name">Name:</StyledLabel>
              <StyledField
                type="text"
                id="name"
                name="name"
                placeholder="Name..."
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </StyledHolder>
            <StyledHolder>
              <StyledLabel htmlFor="email">Email:</StyledLabel>
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
              <StyledLabel htmlFor="password">Password:</StyledLabel>
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
            <StyledBtn type="submit">Sign up</StyledBtn>
          </StyledForm>
        </Formik>
      </StyledWrapper>
      <AuthNavigate isLoginForm={false} />
    </>
  );
};

const StyledForm = styled(Form)`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* gap: 20px; */
`;

const StyledTitle = styled.h2`
  margin-left: 40px;
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
    margin-bottom: 40px;
    line-height: calc(24 / 24);
  }
`;

const StyledLabel = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: calc(15 / 12);
`;

const StyledHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 287px;
  height: 69px;
  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 79px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 79px;
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
  transform: translate(-50%, -50%);
  width: 335px;
  height: 469px;
  border: transparent;
  background: #ffffff;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 521px;
  }
  @media screen and (min-width: 1440px) {
    width: 480px;
    height: 521px;
  }
`;

const StyledField = styled(Field)`
  display: block;
  width: auto;
  height: 54px;
  margin-top: 8px;
  padding: 14px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.6);
  border-radius: 8px;
  outline: transparent;
`;
