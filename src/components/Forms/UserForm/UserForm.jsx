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

  const user = useSelector((state) => state.userInfo);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        userImgUrl: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      dispatch(updateUserDataThunk(formData));
      setIsFormValid(false);
    }
  };

  const validateForm = () => {
    return (
      formData.name !== '' ||
      formData.email !== '' ||
      formData.birthday !== '' ||
      formData.phone !== '' ||
      formData.skype !== ''
    );
  };

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
      <StyledWrapper className=" bg-white dark:bg-gray-bg">
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
            {formData.userImgUrl ? (
              <Avatar
                src={formData.userImgUrl}
                alt={`${formData.name} avatar`}
                sx={{
                  width: { mobile: 72, tablet: 124 },
                  height: { mobile: 72, tablet: 124 },
                  border: '2px solid #3e85f3',
                }}
              />
            ) : (
              <Avatar
                alt={`${formData.name} avatar`}
                sx={{
                  fontSize: '50px',
                  width: { mobile: 72, tablet: 124 },
                  height: { mobile: 72, tablet: 124 },
                  border: '2px solid #3e85f3',
                }}
              >
                {formData.name[0]}
              </Avatar>
            )}
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
        <StyledUserP1 className=" text-gray-2 dark:text-gray-2-dark">
          {formData.name}
        </StyledUserP1>
        <StyledUserP2 className=" text-black-text  dark:text-white">
          User
        </StyledUserP2>

        <StyledForm onSubmit={handleSubmit}>
          <StyledTaker>
            <StyledHolder>
              {' '}
              <StyledLabel
                className=" text-black  dark:text-gray-2-dark"
                htmlFor="name"
              >
                User Name
              </StyledLabel>
              <StyledField
                className=" text-black dark:text-white"
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
              <StyledLabel
                className=" text-black  dark:text-gray-2-dark"
                htmlFor="birthday"
              >
                Birthday
              </StyledLabel>
              <StyledDatePicker
                className="dark:text-white"
                type="date"
                name="birthday"
                value={formData.birthday}
                onBlur={handleBlur}
                selected={formData.birthday || null}
                onSelect={(date) =>
                  handleInputChange({
                    target: {
                      name: 'birthday',
                      value: date,
                    },
                  })
                }
                placeholderText="Enter your birthday"
                dateFormat="yyyy-MM-dd"
                required
                locale={customLocale}
              />
            </StyledHolder>{' '}
            <StyledHolder>
              <StyledLabel
                className=" text-black  dark:text-gray-2-dark"
                htmlFor="email"
              >
                Email
              </StyledLabel>
              <StyledField
                className=" text-black dark:text-white"
                type="email"
                name="email"
                value={formData.email}
                onBlur={handleBlur}
                onChange={handleInputChange}
                placeholder="Enter your email"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                title="Please enter a valid email address. Example - john@example.com"
              />
            </StyledHolder>
            <StyledHolder>
              {' '}
              <StyledLabel
                className=" text-black  dark:text-gray-2-dark"
                htmlFor="phone"
              >
                Phone
              </StyledLabel>
              <StyledField
                className=" text-black dark:text-white"
                type="tel"
                name="phone"
                value={formData.phone || ''}
                onBlur={handleBlur}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                pattern="^[0-9()+-]+$"
                title="Please enter a valid phone number. Only numbers, parentheses, plus sign (+), and dashes are allowed. For example: +1 (123) 456-7890"
              />
            </StyledHolder>
            <StyledHolder>
              {' '}
              <StyledLabel
                className=" text-black  dark:text-gray-2-dark"
                htmlFor="skype"
              >
                Skype
              </StyledLabel>
              <StyledField
                className=" text-black dark:text-white"
                type="text"
                name="skype"
                value={formData.skype}
                onBlur={handleBlur}
                onChange={handleInputChange}
                placeholder="Add a skype number"
                pattern="^[A-Za-z0-9.-_]+$"
                title="Please enter a valid Skype ID. Only letters, numbers, dots, dashes, and underscores are allowed. For example: john.doe_123"
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
  display: block;
  font-weight: 600;
  font-size: 16px;
  line-height: calc(18 / 16);
  margin-top: 8px;
  padding: 14px;
  box-sizing: border-box;

  width: 299px;
  height: 42px;

  background: transparent;
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

const StyledForm = styled.form`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const StyledLabel = styled.label`
  display: block;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: calc(14 / 12);
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;

const StyledHolder = styled.div`
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
    margin-bottom: 0px;

    &:last-of-type {
      margin-bottom: 0px;
    }
  }
`;

const StyledTaker = styled.div`
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-flow: row wrap;
    place-content: center flex-start;
    gap: 24px;
    align-items: center;
    max-width: 768px;
    margin-bottom: 88px;
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

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 44px;
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;

const StyledUserP1 = styled.p`
  @media screen and (max-width: 767.8px) {
    margin-top: 59px;
    margin-bottom: 4px;
  }
  margin-bottom: 8px;
  margin-top: 18px;
  text-align: center;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(18 / 18);
  }
  @media screen and (min-width: 1440px) {
    margin-top: 20px;
    font-size: 18px;
    line-height: calc(18 / 18);
  }
`;

const StyledBtn = styled.button`
  width: 195px;
  height: 46px;

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
  background: #ffffff;
  border: 1px solid transparent;
  border-radius: 8px;
  padding-bottom: 40px;
  min-width: 335px;
  margin: 0 auto;
  @media screen and (max-width: 767.98px) {
    position: relative;
  }

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;

    min-width: 704px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 60px;
    padding-top: 60px;
    min-width: 1087px;
  }
`;

const StyledField = styled.input`
  margin-top: 8px;
  padding: 14px;
  box-sizing: border-box;
  background: transparent;

  width: 299px;
  height: 42px;

  border: 1px solid rgba(220, 227, 229, 0.6);
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);
  @media screen and (min-width: 768px) {
    width: 354px;
    height: 46px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
  @media screen and (min-width: 1440px) {
    width: 354px;
    height: 46px;
  }
`;
