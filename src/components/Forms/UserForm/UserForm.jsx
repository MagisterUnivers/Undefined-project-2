// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { loginThunk } from 'redux/Auth/authOperations';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectAuthAccessToken } from 'redux/selectors';
// import styled from 'styled-components';
// import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
// // import { useHistory } from 'react-router-dom';

// const validationSchema = Yup.object().shape({
//   email: Yup.string()
//     .email(
//       'enter valid email: min 6, max 63 characters, except .ru, .su, .рус, .рф,.москва etc'
//     )
//     .required("Обов'язкове поле"),
//   password: Yup.string()
//     .min(
//       6,
//       'the password must contain Latin letters: at least 1 lowercase, 1 uppercase, 1 number and be at least 6 and no more than 12 characters'
//     )
//     .required("Обов'язкове поле"),
// });

// export const UserForm = () => {
//   // const history = useHistory();
//   const token1 = useSelector(selectAuthAccessToken);

//   const dispatch = useDispatch();

//   const initialValues = {
//     email: '',
//     password: '',
//   };

//   const handleSubmit = values => {
//     // e.preventDefault();
//     console.log('user is Logged In');
//     console.log(values);
//     dispatch(loginThunk(values));
//     console.log(token1);
//   };

//   return (
//     <>
//       {' '}
//       <StyledWrapper>
//         <StyledTitle>Log In</StyledTitle>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           <StyledForm
//           // onSubmit={handleSubmit}
//           >
//             {/* <div>
//         <label htmlFor="name">Name:</label>
//         <Field type="text" id="name" name="name" />
//         <ErrorMessage name="name" component="div" className="error-message" />
//       </div> */}
//             <StyledHolder>
//               <StyledLabel htmlFor="email">Email</StyledLabel>
//               <br />
//               <StyledField
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Email..."
//               />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className="error-message"
//               />
//             </StyledHolder>
//             <StyledHolder>
//               <StyledLabel htmlFor="password">Password</StyledLabel>
//               <br />
//               <StyledField
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="Password..."
//               />
//               <ErrorMessage
//                 name="password"
//                 component="div"
//                 className="error-message"
//               />
//             </StyledHolder>
//             <StyledBtn type="submit">Log in</StyledBtn>
//           </StyledForm>
//         </Formik>
//       </StyledWrapper>
//       <AuthNavigate isLoginForm={true} />
//     </>
//   );
// };

import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateUserDataThunk } from 'redux/UserInfo/userInfoOperations';

export const UserForm = () => {
  const user = useSelector(state => state.userInfo);
  const [formData, setFormData] = useState({
    _id: '',
    name: '',
    email: '',
    birthday: '',
    phone: '',
    skype: '',
    userImgUrl:
      'https://lh3.googleusercontent.com/a/AGNmyxajlg1m9Ch9H6GVi0od7Qpi51V85SXWY1KkOIse0w=s360',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleImageUpload = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData(prevFormData => ({
        ...prevFormData,
        userImgUrl: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isFormValid) {
      // send
      dispatch(updateUserDataThunk(formData));
      setIsFormValid(false);
    }
  };

  const validateForm = () => {
    // validation
    // just a thing
    return (
      formData.name !== '' &&
      formData.email !== '' &&
      formData.birthday !== '' &&
      formData.phone !== '' &&
      formData.skype !== ''
    );
  };

  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  useEffect(() => {
    setIsFormValid(validateForm()); //eslint-disable-next-line
  }, [formData]);

  return (
    <StyledWrapper>
      {formData.userImgUrl ? (
        <>
          <StyledLabel htmlFor="avatar" onClick={handleAvatarClick}>
            <StyledImg
              src={formData.userImgUrl}
              alt="Avatar"
              width="72px"
              height="72px"
            />
          </StyledLabel>
          <input
            type="file"
            id="avatar"
            // ref={fileInputRef}
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleImageUpload}
          />
        </>
      ) : (
        <>
          {' '}
          <div>No image selected</div>
          <StyledField
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </>
      )}
      <StyledUser>User</StyledUser>

      <StyledForm onSubmit={handleSubmit}>
        <StyledHolder>
          {' '}
          <StyledLabel htmlFor="name">Name:</StyledLabel>
          <br />
          <StyledField
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </StyledHolder>
        <StyledHolder>
          {' '}
          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <br />
          <StyledField
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </StyledHolder>
        <StyledHolder>
          {' '}
          <StyledLabel htmlFor="birthday">Birthday:</StyledLabel>
          <br />
          <StyledField
            type="date"
            name="birthday"
            value={formData.birthday || ''}
            onChange={handleInputChange}
            placeholder="Enter your birthday"
          />
        </StyledHolder>
        <StyledHolder>
          {' '}
          <StyledLabel htmlFor="phone">Phone:</StyledLabel>
          <br />
          <StyledField
            type="tel"
            name="phone"
            value={formData.phone || ''}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
        </StyledHolder>
        <StyledHolder>
          {' '}
          <StyledLabel htmlFor="skype">Skype:</StyledLabel>
          <br />
          <StyledField
            type="text"
            name="skype"
            value={formData.skype}
            onChange={handleInputChange}
            placeholder="Enter your Skype ID"
          />
        </StyledHolder>

        <StyledBtn type="submit" disabled={!isFormValid}>
          Save changes
        </StyledBtn>
      </StyledForm>
    </StyledWrapper>
  );
};

const StyledForm = styled.form`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  /* gap: 20px; */
`;

// const StyledTitle = styled.h2`
//   text-align: center;
//   margin-top: 40px;
//   margin-bottom: 32px;

//   font-family: 'Inter';
//   font-style: normal;
//   font-weight: 600;
//   font-size: 18px;
//   line-height: calc(24 / 18);

//   color: #3e85f3;

//   text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
//     0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
// `;

const StyledLabel = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: calc(15 / 12);
`;

const StyledHolder = styled.div`
  /* width: 299px;
  height: 392px; */
  margin-bottom: 18px;

  &:last-of-type {
    /* margin-bottom: 40px; */
  }
`;

const StyledUser = styled.h3`
  margin-top: 14px;
  margin-bottom: 40px;
  text-align: center;
`;

const StyledImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: -10%;
  border-radius: 50%;
`;

const StyledBtn = styled.button`
  width: 195px;
  height: 46px;
  /* margin-top: 40px; */

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
`;

const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 335px;
  height: 653px;
  transform: translate(-50%, -50%);
  /* margin-top: 15%;
  margin-bottom: auto; */
  /* margin-left: auto;
  margin-right: auto; */

  border: transparent;
  background: #ffffff;
  border: 1px solid black;
  border-radius: 8px;
`;

const StyledField = styled.input`
  margin-top: 8px;
  /* margin-bottom: 32px; */
  padding: 14px;
  box-sizing: border-box;

  width: 287px;
  height: 46px;

  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.6);
  border-radius: 8px;
`;
