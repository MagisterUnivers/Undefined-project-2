import styled from 'styled-components';

export const StyledUl = styled.ul`
  width: 311px;
  max-height: 334px;
  overflow-y: scroll;
  overflow-x: visible;
  /* position: relative; */
  @media screen and (min-width: 767.98px) {
    width: 316px;

    max-height: 372px;
  }

  &::-webkit-scrollbar {
    width: 6px;
    @media screen and (min-width: 767.98px) {
      width: 8px;
    }
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;

    background-color: #f2f2f2;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;

    background-color: #e7e5e5;
  }
`;

export const StyledLi = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 14px;
  }
`;
