import styled from 'styled-components';
import { ReactComponent as SignUpIcon } from './elements.svg';

export const StyledIconWrapper = styled.div`
  display: block;

  @media screen and (min-width: 1440px) {
    /* position: relative; */
    display: block;
  }
`;

export const StyledIcon = styled(SignUpIcon)`
  width: 280px;
  height: 290px;
  position: absolute;

  bottom: 0;
  @media screen and (min-width: 1440px) {
    width: 401px;
    height: 417px;
    /* position: relative; */
    display: block;
    left: 49px;
    bottom: 0;
  }
`;
