import React from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import { registrationThunk } from 'redux/Auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthAccessToken } from 'redux/selectors';
import styled from 'styled-components';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
// import { useHistory } from 'react-router-dom';
import { ReactComponent as DoneLogo } from './Done.svg';
import { ReactComponent as ErrorLogo } from './Error.svg';
import { useNavigate } from 'react-router';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required Field'),
  email: Yup.string()
    .email('This is an ERROR password')
    .required('Required Field'),
  password: Yup.string()
    .min(6, 'This is an ERROR password')
    .required('Required Field'),
});

export const RegisterForm = () => {
  const navigate = useNavigate();
  // const history = useHistory();
  const token1 = useSelector(selectAuthAccessToken);

  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values) => {
    // e.preventDefault();
    console.log('user is Registered');
    console.log(values);
    dispatch(registrationThunk(values)).then(() => navigate('/main/account'));
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
              {/* <StyledLabel htmlFor="name">Name:</StyledLabel>
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
              /> */}
              <InputField name="name" placeholder="Name..." />
            </StyledHolder>
            <StyledHolder>
              {/* <StyledLabel htmlFor="email">Email:</StyledLabel>
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
              /> */}
              <InputField name="email" placeholder="Email..." />
            </StyledHolder>
            <StyledHolder>
              {/* <StyledLabel htmlFor="password">Password:</StyledLabel>
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
              /> */}
              <InputField name="password" placeholder="Password..." />
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

const StyledLink = styled.h2`
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

    &:last-of-type {
      margin-bottom: 48px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 79px;

    &:last-of-type {
      margin-bottom: 48px;
    }
  }
`;

const Rel = styled.div`
  position: relative;
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
  width: 287px;
  height: 45px;
  margin-top: 8px;
  padding: 14px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.6);
  border-radius: 8px;
  outline: transparent;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 54px;
  }

  &.error {
    border-color: red;
  }
  &.success {
    border-color: green;
  }
`;
