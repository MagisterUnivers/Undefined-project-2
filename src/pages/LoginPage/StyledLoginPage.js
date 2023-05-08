import styled from 'styled-components';
import { ReactComponent as RocketIcon } from './elements.svg';

export const StyledIconWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    position: relative;
    display: block;
  }
`;

export const StyledIcon = styled(RocketIcon)`
    position: absolute;
    top: 230px;
    right: 60px;
`
