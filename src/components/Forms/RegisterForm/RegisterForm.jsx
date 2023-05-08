import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { registrationThunk } from 'redux/Auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthAccessToken } from 'redux/selectors';
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
      'the passport must contain Latin letters: at least 1 lowercase, 1 uppercase, 1 number and be at least 6 and no more than 12 characters'
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
    console.log('Hi');
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form
        style={{
          display: 'flex',
          alignContent: 'center',
          flexWrap: 'wrap',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
        // onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="error-message" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />
        </div>
        <button type="submit">Sign up</button>
      </Form>
    </Formik>
  );
};
