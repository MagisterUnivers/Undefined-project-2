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
import { Avatar, Badge } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useMediaQuery } from 'react-responsive';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { enUS } from 'date-fns/locale';

export const UserForm = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' });
  const user = useSelector(state => state.userInfo);
  const [formData, setFormData] = useState({
    _id: '',
    name: '',
    email: '',
    birthday: '',
    phone: '',
    skype: '',
    userImgUrl: '',
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
      formData.name !== '' ||
      formData.email !== '' ||
      formData.birthday !== '' ||
      formData.phone !== '' ||
      formData.skype !== ''
    );
  };

  // const validateForm = () => {
  //   const isNameValid =
  //     /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(
  //       formData.name
  //     );
  //   const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  //   const isDateValid = /^\d{4}-\d{2}-\d{2}$/.test(formData.birthday);
  //   const isPhoneValid = /^[0-9()+-]+$/.test(formData.phone);
  //   const isSkypeValid = /^[A-Za-z0-9.-_]+$/.test(formData.skype);

  //   return (
  //     isNameValid && isEmailValid && isDateValid && isPhoneValid && isSkypeValid
  //   );
  // };

  const handleBlur = () => {
    setIsFormValid(validateForm());
  };

  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  useEffect(() => {
    setIsFormValid(validateForm()); //eslint-disable-next-line
  }, [formData]);

  // const formatWeekDay = nameOfDay => {
  //   return nameOfDay.charAt(0);
  // };

  const customLocale = {
    ...enUS,
    localize: {
      ...enUS.localize,
      day: (dayOfWeek, width) => {
        const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
        const dayIndex = dayOfWeek % 7;
        return width > 2 ? days[dayIndex] : days[dayIndex].charAt(0);
      },
    },
  };

  return (
    <>
      <StyledWrapper>
        {formData.userImgUrl ? (
          <>
            <StyledDiv>
              <Badge
                sx={isMobile ? badgeStyleMobile : badgeStyleTablet}
                onClick={() => {
                  handleAvatarClick();
                }}
                badgeContent={
                  <AddRoundedIcon
                    sx={{
                      width: { mobile: '8px', tablet: '18px' },
                      height: { mobile: '8px', tablet: '18px' },
                    }}
                  />
                }
                overlap="circular"
                color="primary"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
              >
                <BorderedAvatar
                  onClick={() => {
                    handleAvatarClick();
                  }}
                  sx={{
                    width: { mobile: 72, tablet: 124 },
                    height: { mobile: 72, tablet: 124 },
                  }}
                  src={formData.userImgUrl}
                  alt="Serhii Parfentiev"
                />
              </Badge>
            </StyledDiv>
            <input
              type="file"
              id="avatar"
              ref={fileInputRef}
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
        <StyledUserP1>{formData.name}</StyledUserP1>
        <StyledUserP2>User</StyledUserP2>

        <StyledForm onSubmit={handleSubmit}>
          <StyledTaker>
            <StyledHolder>
              {' '}
              <StyledLabel htmlFor="name">Name:</StyledLabel>
              <br />
              <StyledField
                type="text"
                name="name"
                value={formData.name}
                onBlur={handleBlur}
                onChange={handleInputChange}
                placeholder="Enter your name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
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
                onBlur={handleBlur}
                onChange={handleInputChange}
                placeholder="Enter your email"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                title="Please enter a valid email address. Example - john@example.com"
                required
              />
            </StyledHolder>
            <StyledHolder>
              {' '}
              <StyledLabel htmlFor="birthday">Birthday:</StyledLabel>
              <br />
              <StyledDatePicker
                type="date"
                name="birthday"
                value={formData.birthday}
                onBlur={handleBlur}
                selected={formData.birthday || null}
                onSelect={date =>
                  handleInputChange({
                    target: { name: 'birthday', value: date },
                  })
                }
                placeholderText="Enter your birthday"
                dateFormat="yyyy-MM-dd"
                // dayClassName={date => 'custom-day'}
                // formatWeekDay={formatWeekDay}
                required
                locale={customLocale}
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
                onBlur={handleBlur}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                pattern="^[0-9()+-]+$"
                title="Please enter a valid phone number. Only numbers, parentheses, plus sign (+), and dashes are allowed. For example: +1 (123) 456-7890"
                required
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
                onBlur={handleBlur}
                onChange={handleInputChange}
                placeholder="Enter your Skype ID"
                pattern="^[A-Za-z0-9.-_]+$"
                title="Please enter a valid Skype ID. Only letters, numbers, dots, dashes, and underscores are allowed. For example: john.doe_123"
                required
              />
            </StyledHolder>
          </StyledTaker>

          <StyledBtn type="submit" disabled={!isFormValid}>
            Save changes
          </StyledBtn>
        </StyledForm>
      </StyledWrapper>
    </>
  );
};

const badgeStyleMobile = {
  '& .MuiBadge-badge': {
    minWidth: '14px',
    height: '14px',
    padding: 0,
    borderRadius: '50%',
  },
};
const badgeStyleTablet = {
  '& .MuiBadge-badge': {
    minWidth: '24px',
    height: '24px',
    padding: 0,
    borderRadius: '50%',
  },
};
const StyledDatePicker = styled(DatePicker)`
  margin-top: 8px;
  /* margin-bottom: 32px; */
  padding: 14px;
  box-sizing: border-box;

  width: 299px;
  height: 42px;

  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.6);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 354px;
    height: 46px;
  }
  @media screen and (min-width: 1440px) {
    width: 354px;
    height: 46px;
  }
`;
const StyledDiv = styled.div`
  @media screen and (max-width: 767.98px) {
    position: absolute;
    top: 1px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    position: static;
  }
`;
const BorderedAvatar = styled(Avatar)`
  border: 2px solid #3e85f3;
`;

const StyledForm = styled.form`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  /* margin-bottom: 40px; */
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
    margin-bottom: 0px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;

    &:last-of-type {
      margin-bottom: 0px;
    }
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;

    &:last-of-type {
      margin-bottom: 0px;
    }
  }
`;

const StyledTaker = styled.div`
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-flow: row wrap;
    place-content: center flex-start;
    gap: 24px;
    align-items: center;
    max-width: 768px;
  }
`;

const StyledUserP2 = styled.p`
  margin-bottom: 40px;
  text-align: center;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: calc(14 / 12);

  color: #616161;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;

const StyledUserP1 = styled.p`
  @media screen and (max-width: 768px) {
    margin-top: 59px;
  }
  margin-top: 14px;
  text-align: center;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: calc(18 / 14);

  color: #343434;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(18 / 18);
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: calc(18 / 18);
  }
`;

// const StyledImg = styled.img`
//   display: block;
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: -10%;
//   border-radius: 50%;

//   @media screen and (min-width: 768px) {
//     width: 124px;
//     height: 130px;
//     margin-top: 3%;
//   }
//   @media screen and (min-width: 1440px) {
//     width: 124px;
//     height: 130px;
//     margin-top: 5%;
//   }
// `;

const StyledBtn = styled.button`
  width: 195px;
  height: 46px;
  /* margin-top: 40px; */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);

  cursor: pointer;
  color: #ffffff;
  letter-spacing: -0.02em;
  border: transparent;

  background: #3e85f3;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;

  &:disabled {
    background: #ccc;
    box-shadow: none;
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
  }
  @media screen and (min-width: 1440px) {
    width: 262px;
    height: 48px;
  }
`;

const StyledWrapper = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  width: 335px;
  height: 653px;
  transform: translate(-50%, -50%); */
  /* margin-top: 15%;
  margin-bottom: auto; */
  /* margin-left: auto;
  margin-right: auto; */

  border: transparent;
  background: #a96c6c;
  border: 1px solid black;
  border-radius: 8px;
  padding-bottom: 40px;
  @media screen and (max-width: 767.98px) {
    position: relative;
  }

  @media screen and (min-width: 768px) {
    padding-top: 40px;

    width: 704px;
    height: 854px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 60px;
    padding-top: 60px;
    width: 1087px;
    height: 752px;
  }
`;

const StyledField = styled.input`
  margin-top: 8px;
  /* margin-bottom: 32px; */
  padding: 14px;
  box-sizing: border-box;

  width: 299px;
  height: 42px;

  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.6);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 354px;
    height: 46px;
  }
  @media screen and (min-width: 1440px) {
    width: 354px;
    height: 46px;
  }
`;
