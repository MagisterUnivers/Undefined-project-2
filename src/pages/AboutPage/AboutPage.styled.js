import styled from 'styled-components';

export const Section = styled.div`
background-color: #FFFFFF;`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 232px;
  @media screen and (min-width: 768px) {
    padding-top: 321px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 187px;
  }
`;
export const Title = styled.h1`
  font-family: 'Coolvetica';
  font-style: normal;
  font-weight: 400;
  font-weight: 400;
  font-size: 44px;
  line-height: 48/44;
  color: #ffffff;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  text-align: center;
  margin-top: 2px;
  @media screen and (min-width: 768px) {
    font-size: 120px;
    line-height: 150/120;
  }
`;
export const Div = styled.div`
  background-color: #3e85f3;
  height: 812px;
  @media screen and (min-width: 768px) {
    height: 1024px;
  }

  @media screen and (min-width: 1440px) {
    height: 770px;
  }
`;
export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column-reverse;
  gap: 208px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  align-items: center;
  @media screen and (min-width: 768px) {
   flex-direction: row;
   gap: 25px;
  }
`;
export const ButtonSign = styled.button`
  position: relative;
  background-color: inherit;
  border: none;
  color: #ffffff;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18/14;
  &::after {
    position: absolute;
    bottom: -1px;
    left: 1px;
    content: '';
    width: 94%;
    height: 1px;
    background-color: #ffffff;
    border-radius: 1px;
  }
`;
export const ButtonLog = styled.button`
width: 131px;
  background-color: #ffffff;
  color: #3e85f3;
  padding: 14px 22px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18/14;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  border: none;
  display: flex;
  justify-content: center;
  align-item: center;
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const List = styled.ul`
@media screen and (max-width: 767px) {
  margin: 64px 20px;
justify-content: center;
}
@media screen and (min-width: 768px) {
  margin: 64px 32px;
}
@media screen and (min-width: 1440px) {
  margin: 64px 128px;
}
`;
export const ImgBlock = styled.img`
width: 335px;
height: 457px;
margin-top: 40px;
@media screen and (min-width: 768px) {
  width: 704px;
height: 700px;
margin-top: 48px;
}

@media screen and (min-width: 1440px) {
  width: 604px;
  height: 700px;
  margin-top: 0px;
}
`
export const BlockDiv = styled.div`
display: flex;
  flex-direction: column;
  align-content: flex-end;
  width: 275px;
`;

export const Item = styled.li`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
margin-left: auto;
margin-right: auto;
  margin-bottom: 64px;
  @media screen and (min-width: 678px) {
    align-items: flex-start;
    &:nth-child(2) {
      align-items: flex-end;
    }}
  }
@media screen and (min-width: 1440px) {
  flex-direction: row;
  gap: 228px;
  align-items: center;
  margin-left: 77px;

  &:nth-child(2) {
    flex-direction: row-reverse;
    margin-right: 77px;
  }}
`;
export const TitleBlock = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 100%;
  color: #3e85f3;
`;
export const ButtonLink = styled.button`
  padding: 8px 18px;
  font-family: 'Inter';
  background: #dcebf7;
  border-radius: 44px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40/32;
  color: #3e85f3;
  text-transform: uppercase;
  border: none;
  margin-top: 14px;
  @media screen and (min-width: 767px) {
    margin-top: 20px;
  }
`;
export const UpperTitle = styled.strong`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40/32;
  text-transform: uppercase;
  color: #171820;
  margin-top: 8px;
  @media screen and (min-width: 767px) {
    margin-top: 14px;
  }
`;
export const Text = styled.p`
  font-family: 'Inter';
  font-style: normal;
font-weight: 500;
  font-size: 14px;
  line-height: 18/14;
  color: rgba(17, 17, 17, 0.9);
  margin-top: 14px;
  margin-bottom: 40px;
  @media screen and (min-width: 767px) {
    margin-top: 24px;
    margin-bottom: 48px;
  }
`;
export const ReviewsTitle = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32/28;
  text-transform: uppercase;
  color: #3e85f3;
  margin-bottom: 40px;
  text-align: center;
  @media screen and (min-width: 767px) {
    margin-top: 36px;
    margin-bottom: 50px;
  }
`;
export const MobileDiv = styled.div`
display: flex;
gap: 18px;`
export const GroupDiv = styled.div`
    @media screen and (min-width: 767px) {
      display: flex;
    gap: 18px;
    }
`;
export const AvatarDiv = styled.div`
display: flex;
flex-direction: column;
    @media screen and (min-width: 767px) {
      display: flex;
      flex-direction: column;
    }
`;
export const ReviewsList = styled.div`
  justify-content: center;
  margin-bottom: 32px;
  @media screen and (min-width: 1440px) {
    width: 1184px;
    height: 280px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }
`;
export const ReviewsItem = styled.div`
margin: 0 auto;
  padding: 24px;
  height: auto;
  width: 287px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  @media screen and (min-width: 767px) {
    padding: 32px;
    width: 580px;
   
  }
  @media screen and (min-width: 1440px) {
    height: 187px;
    overflow: hidden;
  }
`;
export const ReviewsName = styled.strong`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18/18;
  color: #343434;
`;
export const ReviewsComment = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18/14;
  color: rgba(17, 17, 17, 0.7);
  margin-top: 24px;
  @media screen and (min-width: 767px) {
    width: 447px;
    margin-left: auto;
  }
`;
export const ButtonIconDiv = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 25px;
  justify-content: center;
  padding-bottom: 64px;
  @media screen and (min-width: 767px) {
    padding-bottom: 118px;
  }
`;
export const IconButton = styled.button`
  width: 61px;
  height: 61px;
  background-color: inherit;
  border: none;
  &:first-child {
    transform: rotateY(180deg);
  }
  :hover {
    color: #3e85f3;
  }
`;