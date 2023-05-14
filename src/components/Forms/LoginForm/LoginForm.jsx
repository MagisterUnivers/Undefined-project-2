import React from 'react';
import { Formik, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import { loginThunk } from 'redux/Auth/authOperations';
import { useDispatch } from 'react-redux';
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
  StyledIcon,
  StyledLabel,
  StyledTaker,
  StyledTitle,
  StyledWrapper,
} from './LoginForm.styled';
const validationSchema = Yup.object({
  email: Yup.string()
    .email('This is an ERROR email')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'This is an ERROR email'
    )
    .required('Required field'),
  password: Yup.string()
    .min(6, 'This is an ERROR password')
    .required('Required field'),
});
export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const InputField1 = ({ name, placeholder, type }) => {
    const [field, meta] = useField(name);
    const showError = meta.touched && meta.error;
    const className = showError ? 'error' : 'success';
    return (
      <>
        <StyledLabel
          htmlFor={name}
          style={{
            color: showError ? 'red' : 'green' || 'black',
          }}
        >
          {name.slice(0, 1).toUpperCase() + name.slice(1)}
        </StyledLabel>
        <Rel>
          <StyledField
            type={type ?? 'text'}
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
    dispatch(loginThunk(values)).then(() => navigate('/main/account'));
  };
  return (
    <div>
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
                  <InputField1 name="email" placeholder="nadiia@gmail.com" />
                </StyledHolder>
                <StyledHolder>
                  <InputField1
                    name="password"
                    type="password"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                  />
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
    </div>
  );
};
