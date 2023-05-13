import { ReactComponent as DoneLogo } from './Done.svg';
import { ReactComponent as ErrorLogo } from './Error.svg';
import styled from 'styled-components';
const { Field, Form } = require('formik');

export const StyledForm = styled(Form)`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const StyledErrorLogo = styled(ErrorLogo)`
  display: ${(props) => (props.show ? 'block' : 'none')};
  width: 24px;
  height: 24px;
  position: absolute;
  right: 20px;
  top: 39%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;
export const StyledDoneLogo = styled(DoneLogo)`
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

export const StyledLink = styled.h2`
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
    line-height: 1;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    margin-bottom: 40px;
    line-height: 1;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: calc(15 / 12);
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(17 / 14);
  }
`;

export const StyledHolder = styled.div`
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
    margin-bottom: 18px;
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

export const Rel = styled.div`
  position: relative;
`;

export const StyledBtn = styled.button`
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
    font-size: 18px;
    line-height: calc(24 / 18);
    width: 400px;
    height: 56px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 56px;
  }
`;

export const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 24px;
  border: transparent;
  background: #ffffff;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
  @media screen and (min-width: 1440px) {
    width: 480px;
  }
`;

export const StyledField = styled(Field)`
  display: block;
  width: 287px;
  height: 46px;
  margin-top: 8px;
  padding: 14px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.6);
  border-radius: 8px;
  outline: transparent;
  font-size: 14px;
  line-height: calc(18/14)

  color: #dce3e5;
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
