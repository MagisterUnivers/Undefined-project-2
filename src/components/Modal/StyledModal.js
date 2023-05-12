import styled from 'styled-components';
import { ReactComponent as IconClose } from './x-close.svg';

export const StyledBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 303px;
  height: 336px;
  padding-top: 48px;
  padding-right: 18px;
  padding-left: 18px;
  padding-bottom: 40px;
  background-color: #fff;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    width: 396px;
    height: 360px;
    padding-top: 40px;
    padding-right: 28px;
    padding-left: 28px;
  }
`;

export const StyledBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 20px;
  height: 20px;
`;

export const StyledBtnIcon = styled(IconClose)`
  width: 20px;
  height: 20px;
  stroke: #111111;
`;
