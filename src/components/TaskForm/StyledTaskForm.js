import styled from 'styled-components';
import { ReactComponent as PencilIcon } from './PencilIcon.svg';
import { ReactComponent as PlusIcon } from './PlusIcon.svg';
import { FormControlLabel, RadioGroup } from '@mui/material';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  display: flex;
  gap: 8px;
  height: 64px;
  flex-direction: column;
  font-weight: 500;
  font-size: 12px;
  line-height: calc(14 / 12);
  margin-bottom: 16px;
  color: rgba(52, 52, 52, 0.8);

  @media screen and (min-width: 768px) {
    height: 68px;
    margin-bottom: 18px;
  }
`;

export const StyledInput = styled.input`
  display: block;
  font-weight: 600;
  width: 100%;
  height: 42px;
  padding-left: 14px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: #616161;
  background-color: #f7f7f7;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding-left: 18px;
    padding-top: 14px;
    padding-bottom: 14px;
  }
`;

export const StyledEditBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 267px;
  height: 42px;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);
  text-align: center;
  color: #ffffff;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 32px;
  background-color: #3e85f3;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 340px;
    height: 48px;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  width: 100%;
  height: 42px;
  margin-top: 32px;

  @media screen and (min-width: 768px) {
    height: 48px;
  }
`;

export const StyledAddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);
  width: 135px;
  height: 100%;
  color: #fff;
  background-color: #3e85f3;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 182px;
  }
`;
export const StyledCancelBtn = styled(StyledAddBtn)`
  width: 118px;
  color: #111;
  background-color: #efefef;

  @media screen and (min-width: 768px){
    width: 144px;
  }
`;

export const StyledPencilIcon = styled(PencilIcon)`
  width: 16px;
  height: 16px;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const StyledPlusIcon = styled(PlusIcon)`
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  gap: 15px;
  height: 64px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    height: 68px;
    margin-bottom: 28px;
  }
`;

export const StyledRadioGroup = styled(RadioGroup)`
  height: 14px;

  @media screen and (min-width: 768px) {
    height: 18px;
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  font-weight: 600;
  font-size: 12px;
  line-height: calc(14 / 12);
  color: #616161;
`;
