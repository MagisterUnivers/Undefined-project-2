import { Avatar } from '@mui/material';
import { Rating } from '@mui/material';
import { East, Login } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { Navigation } from 'swiper';
import { ReactComponent as GooseLogo } from './icons/logo.svg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  Section,
  Div,
  Title,
  Logo,
  ButtonSign,
  ButtonLog,
  DivButton,
  TitleBlock,
  ButtonLink,
  UpperTitle,
  BlockDiv,
  Item,
  Text,
  List,
  ReviewsTitle,
  ReviewsItem,
  ReviewsList,
  AvatarDiv,
  GroupDiv,
  ReviewsName,
  ReviewsComment,
  ButtonIconDiv,
  IconButton,
  MobileDiv,
  StyledSpan,
} from './AboutPage.styled.js';
const AboutPage = () => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isMobileorTable = useMediaQuery({ query: '(max-width: 1439px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 767px) and (max-width: 1439px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return (
    <Section>
      <Div>
        {isMobile && (
          <Logo>
            <GooseLogo width={142} height={142} />
          </Logo>
        )}
        {isTablet && (
          <Logo>
            <GooseLogo width={150} height={149} />
          </Logo>
        )}
        {isDesktop && (
          <Logo>
            <GooseLogo width={150} height={149} />
          </Logo>
        )}
        <Title>
          G<StyledSpan>oo</StyledSpan>seTrack
        </Title>
        <DivButton>
          <ButtonSign type="button" onClick={() => navigate(`/register`)}>
            Sign up
          </ButtonSign>
          <ButtonLog type="button" onClick={() => navigate(`/login`)}>
            Log in <Login />
          </ButtonLog>
        </DivButton>
      </Div>
      <List>
        <Item>
          <BlockDiv>
            <TitleBlock>1.</TitleBlock>
            <ButtonLink>Calendar</ButtonLink>
            <UpperTitle>view</UpperTitle>
            <Text>
              GooseTrack's Calendar view provides a comprehensive overview
              oGooseTrack's Calendar view provides a comprehensive overview of
              your schedule, displaying all your tasks, events, and appointments
              in a visually appealing and intuitive layout.f your schedule,
              displaying all your tasks, events, and appointments in a visually
              appealing and intuitive layout.
            </Text>
          </BlockDiv>
          {isMobile && (
            <img
              src={require('../../accets/img/start/imagemobile.png')}
              alt="Calendar"
              srcSet={`${require('../../accets/img/start/imagemobile.png')} 1x, ${require('../../accets/img/start/imagemobile@2x.png')} 2x`}
              width="335"
              height="457"
              loading="lazy"
            />
          )}
          {isTablet && (
            <img
              src={require('../../accets/img/start/imagetablet.png')}
              alt="Calendar"
              srcSet={`${require('../../accets/img/start/imagetablet.png')} 1x, ${require('../../accets/img/start/imagetablet@2x.png')} 2x`}
              width="704"
              height="700"
              loading="lazy"
            />
          )}
          {isDesktop && (
            <img
              src={require('../../accets/img/start/image.png')}
              alt="Calendar"
              srcSet={`${require('../../accets/img/start/image.png')} 1x, ${require('../../accets/img/start/image@2x.png')} 2x`}
              width="604"
              height="700"
              loading="lazy"
            />
          )}
        </Item>
        <Item>
          <BlockDiv>
            <TitleBlock>2.</TitleBlock>
            <UpperTitle>SIDEBAR</UpperTitle>
            <Text>
              GooseTrack offers easy access to your account settings, calendar,
              and filters. The "My Account" section allows you to manage your
              profile information and preferences, while the calendar provides a
              quick and convenient way to view your upcoming events and tasks.
            </Text>
          </BlockDiv>
          {isMobile && (
            <img
              src={require('../../accets/img/start/image-1mobile.png')}
              alt="SIDEBAR"
              srcSet={`${require('../../accets/img/start/image-1mobile.png')} 1x, ${require('../../accets/img/start/imagemobile@2x-1.png')} 2x`}
              width="335"
              height="457"
              loading="lazy"
            />
          )}
          {isTablet && (
            <img
              src={require('../../accets/img/start/imagetablet-1.png')}
              alt="SIDEBAR"
              srcSet={`${require('../../accets/img/start/imagetablet-1.png')} 1x, ${require('../../accets/img/start/imagetablet@2x-1.png')} 2x`}
              width="704"
              height="700"
              loading="lazy"
            />
          )}
          {isDesktop && (
            <img
              src={require('../../accets/img/start/image-2.png')}
              alt="SIDEBAR"
              srcSet={`${require('../../accets/img/start/image-2.png')} 1x, ${require('../../accets/img/start/image@2x-1.png')} 2x`}
              width="604"
              height="700"
              loading="lazy"
            />
          )}
        </Item>
        <Item>
          <BlockDiv>
            <TitleBlock>3.</TitleBlock>
            <ButtonLink>all in</ButtonLink>
            <UpperTitle>one</UpperTitle>
            <Text>
              GooseTrack is an all-in-one productivity tool that helps you stay
              on top of your tasks, events, and deadlines. Say goodbye to
              scattered to-do lists and hello to streamlined productivity with
              GooseTrack.
            </Text>
          </BlockDiv>
          {isMobile && (
            <img
              src={require('../../accets/img/start/image-2mobile.png')}
              alt="all"
              srcSet={`${require('../../accets/img/start/image-2mobile.png')} 1x, ${require('../../accets/img/start/imagemobile@2x-2.png')} 2x`}
              width="335"
              height="457"
              loading="lazy"
            />
          )}
          {isTablet && (
            <img
              src={require('../../accets/img/start/imagetablet-2.png')}
              alt="all"
              srcSet={`${require('../../accets/img/start/imagetablet-2.png')} 1x, ${require('../../accets/img/start/imagetablet@2x-2.png')} 2x`}
              width="704"
              height="700"
              loading="lazy"
            />
          )}
          {isDesktop && (
            <img
              src={require('../../accets/img/start/image-3.png')}
              alt="all"
              srcSet={`${require('../../accets/img/start/image-3.png')} 1x, ${require('../../accets/img/start/image@2x-2.png')} 2x`}
              width="604"
              height="700"
              loading="lazy"
            />
          )}
        </Item>
      </List>
      <ReviewsTitle>Reviews</ReviewsTitle>
      {isMobileorTable && (
        <Swiper
          initialSlide={1}
          navigation={{ prevEl: '.swiper-prev', nextEl: '.swiper-next' }}
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
        >
          <ReviewsList>
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewsItem>
                  <GroupDiv>
                    <MobileDiv>
                      <Avatar
                        alt={review.name}
                        src="/static/images/avatar/1.jpg"
                      />
                      <AvatarDiv>
                        <ReviewsName>{review.name}</ReviewsName>
                        <Rating
                          name="read-only"
                          value={review.value}
                          readOnly
                          size="small"
                        />
                        <ReviewsComment>{review.text}</ReviewsComment>
                      </AvatarDiv>
                    </MobileDiv>
                  </GroupDiv>
                </ReviewsItem>
              </SwiperSlide>
            ))}
          </ReviewsList>
        </Swiper>
      )}
      {isDesktop && (
        <Swiper
          initialSlide={1}
          slidesPerView={2}
          spaceBetween={-140}
          navigation={{ prevEl: '.swiper-prev', nextEl: '.swiper-next' }}
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
        >
          <ReviewsList>
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewsItem>
                  <GroupDiv>
                    <MobileDiv>
                      <Avatar
                        alt={review.name}
                        src="/static/images/avatar/1.jpg"
                      />
                      <AvatarDiv>
                        <ReviewsName>{review.name}</ReviewsName>
                        <Rating
                          name="read-only"
                          value={review.value}
                          readOnly
                          size="small"
                        />
                        <ReviewsComment>{review.text}</ReviewsComment>
                      </AvatarDiv>
                    </MobileDiv>
                  </GroupDiv>
                </ReviewsItem>
              </SwiperSlide>
            ))}
          </ReviewsList>
        </Swiper>
      )}

      <ButtonIconDiv>
        <IconButton type="button" className="swiper-prev">
          <East />
        </IconButton>
        <IconButton type="button" className="swiper-next">
          <East />
        </IconButton>
      </ButtonIconDiv>
    </Section>
  );
};

export default AboutPage;
const reviews = [
  {
    id: 1,
    name: 'Olena Doe',
    value: 2,
    text: 'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    id: 2,
    name: 'Travis Howard',
    value: 5,
    text: 'GooseTrack is incredibly helpful, the sidebar with account management, calendar, and filter options make navigation seamless. Great for staying organized.',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    value: 4,
    text: 'GooseTrack is impressive.',
  },
  {
    id: 4,
    name: 'Oleg',
    value: 5,
    text: 'GooseTrack is impressive.',
  },
];
