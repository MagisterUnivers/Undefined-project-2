import styled from 'styled-components';
import { ReactComponent as ArrowRightIcon } from './ArrowRightIcon.svg';
import { ReactComponent as PencilIcon } from './PencilIcon.svg';
import { ReactComponent as TrashIcon } from './TrashIcon.svg';

export const StyledList = styled.ul`
  position: relative;
  display: flex;
  /* gap: 10px; */
`;

export const StyledListItem = styled.li`
  line-height: 0;
`;

export const StyledListBtn = styled.button`
  padding: 6px;

  @media screen and (min-width: 767.98px) {
    padding: 5px;
  }
`;

export const StyledArrowRightIcon = styled(ArrowRightIcon)`
  width: 14px;
  height: 14px;
  stroke: #111;
  transition: stroke 250ms linear;

  ${StyledListBtn}:hover & {
    stroke: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const StyledPencilIcon = styled(PencilIcon)`
  width: 14px;
  height: 14px;
  stroke: #111;
  transition: stroke 250ms linear;

  ${StyledListBtn}:hover & {
    stroke: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const StyledTrashIcon = styled(TrashIcon)`
  width: 14px;
  height: 14px;
  stroke: #111;
  transition: stroke 250ms linear;

  ${StyledListBtn}:hover & {
    stroke: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const StyledSlideMenu = styled.ul`
  position: absolute;
  top: 26px;
  left: -70px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 115px;
  height: 70px;
  padding: 14px;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  z-index: 500;

  @media screen and (min-width: 768px) {
    width: 147px;
    height: 90px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 24px;
    padding-left: 24px;
  }
`;

export const StyledSlideMenuItem = styled.li``;

export const StyledMenuBtn = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  line-height: calc(14 / 12);
  color: #616161;
  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;

export const StyledMenuArrowIcon = styled(ArrowRightIcon)`
  width: 14px;
  height: 14px;
  stroke: #616161;
  transition: stroke 250ms linear;

  ${StyledMenuBtn}:hover &, ${StyledMenuBtn}:focus & {
    stroke: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
