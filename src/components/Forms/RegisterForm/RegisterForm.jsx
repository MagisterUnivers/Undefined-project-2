import React from 'react';
import { Formik, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import { registrationThunk } from 'redux/Auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthAccessToken } from 'redux/selectors';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
import { useNavigate } from 'react-router';
import {
  Rel,
  StyledBtn,
  StyledDoneLogo,
  StyledErrorLogo,
  StyledField,
  StyledForm,
  StyledHolder,
  StyledLabel,
  StyledLink,
  StyledWrapper,
} from './RegisterForm.styled';
import { StyledIcon } from '../LoginForm/LoginForm.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required Field')
    .min(2, 'Name should be at least 2 characters')
    .max(50, 'Name should not exceed 50 characters')
    .matches(
      /^[a-zA-Z0-9\s]+$/,
      'Name should only contain letters, numbers, and spaces'
    ),
  email: Yup.string()
    .email('This is an ERROR email')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'example@example.com')
    .required('Required Field'),
  password: Yup.string()
    .min(6, 'This is an ERROR password')
    .required('Required Field'),
});

export const RegisterForm = () => {
  const navigate = useNavigate();
  const token1 = useSelector(selectAuthAccessToken);

  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values) => {
    console.log('user is Registered');
    console.log(values);
    dispatch(registrationThunk(values)).then(() => navigate('/main/account'));
    console.log(token1);
  };

  const InputField = ({ name, placeholder }) => {
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
          {name.slice(0, 1).toUpperCase() + name.slice(1)}
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

  return (
    <>
      <StyledWrapper>
        <StyledLink>Sign up</StyledLink>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <StyledForm>
            <StyledHolder>
              <InputField name="name" placeholder="Enter your name" />
            </StyledHolder>
            <StyledHolder>
              <InputField name="email" placeholder="Enter email" />
            </StyledHolder>
            <StyledHolder>
              <InputField name="password" placeholder="Enter password" />
            </StyledHolder>
            <StyledBtn type="submit">
              Sign up
              <StyledIcon />
            </StyledBtn>
          </StyledForm>
        </Formik>
      </StyledWrapper>
      <AuthNavigate isLoginForm={false} />
    </>
  );
};
