import styled from 'styled-components';
import { ReactComponent as SignUpIcon } from './elements.svg';

export const StyledIconWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    /* position: relative; */
    display: block;
  }
`;

export const StyledIcon = styled(SignUpIcon)`
    position: absolute;
    left: 49px;
    bottom: 0;
`


