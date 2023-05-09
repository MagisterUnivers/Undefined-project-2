import { Avatar } from '@mui/material'; 
import { Rating } from '@mui/material'; 
import { East, Login } from '@mui/icons-material'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { useMediaQuery } from 'react-responsive' 
import { useNavigate } from 'react-router-dom';
import { Navigation } from 'swiper'; 
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 
import { 
  Section, 
  Img, 
  Div, 
  Title, 
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
  TextDiv, 
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
} from './AboutPage.styled.js'; 
 const AboutPage = () => { 
  const navigate = useNavigate();
  
const isMobile = useMediaQuery({ query: '(max-width: 767px)' }) 
const isTablet = useMediaQuery({ query: '(min-width: 767px) and (max-width: 1439px)' }) 
const isDesktop = useMediaQuery({query: '(min-width: 1440px)' }) 

  

  return ( 
    <Section> 
      <Div> 
        <Img src={require('../../accets/img/start/goose.png')} alt="goose" /> 
        <Title>GooseTrack</Title> 
        <DivButton> 
          <ButtonSign type="button" onClick={(()=>navigate(`/register`))}>Sign up</ButtonSign> 
          <ButtonLog type="button" onClick={(()=>navigate(`/login`))}> 
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
          {isMobile && <img src={require('../../accets/img/start/imagemobile.png')} alt="Calendar" width="335" height="457" />}
          {isTablet && <img src={require('../../accets/img/start/imagetablet.png')} alt="Calendar" width="704" height="700" />}
          {isDesktop && <img src={require('../../accets/img/start/image.png')} alt="Calendar" width="604" height="700" />}
        </Item> 
        <Item> 
          <BlockDiv> 
            <TextDiv> 
              <TitleBlock>2.</TitleBlock> 
              <UpperTitle>SIDEBAR</UpperTitle> 
              <Text> 
                GooseTrack offers easy access to your account settings, 
                calendar, and filters. The "My Account" section allows you to 
                manage your profile information and preferences, while the 
                calendar provides a quick and convenient way to view your 
                upcoming events and tasks. 
              </Text> 
            </TextDiv> 
          </BlockDiv> 
          {isMobile && <img src={require('../../accets/img/start/image-1mobile.png')} alt="SIDEBAR" width="335" height="457" />}
          {isTablet && <img src={require('../../accets/img/start/imagetablet-1.png')} alt="SIDEBAR" width="704" height="700" />}
          {isDesktop && <img src={require('../../accets/img/start/image-2.png')} alt="SIDEBAR" width="604" height="700"/>}
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
          {isMobile && <img src={require('../../accets/img/start/image-2mobile.png')} alt="all" width="335" height="457"  />}
          {isTablet && <img src={require('../../accets/img/start/imagetablet-2.png')} alt="all" width="704" height="700"/>}
          {isDesktop && <img src={require('../../accets/img/start/image-3.png')} alt="all" width="604" height="700"/>}
        </Item> 
      </List> 
      <ReviewsTitle>Reviews</ReviewsTitle> 
      <Swiper 
        navigation={{ prevEl: '.swiper-prev', nextEl: '.swiper-next' }} 
        modules={[Navigation]} 
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

      <ButtonIconDiv>
        <IconButton type="button" className="swiper-prev" >
          <East />
        </IconButton>
        <IconButton type="button" className="swiper-next">
          <East />
        </IconButton>
      </ButtonIconDiv>
    </Section>
  );
};
export default AboutPage
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