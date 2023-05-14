import { useSelector } from 'react-redux';
import { selectUserInfo } from 'redux/selectors';
import { Avatar, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

export const UserInfo = () => {
  const { name, userImgUrl } = useSelector(selectUserInfo);
  const navigate = useNavigate();
  return (
    <Box display={'flex'} alignItems={'center'} gap={'14px'}>
      <Typography
        className="dark:text-white"
        sx={{
          fontFamily: 'Inter',
          fontWeight: 700,
          color: '#343434',
          fontSize: { mobile: 14, tablet: 18 },
          lineHeight: {
            mobile: 1.28,
            tablet: 1,
          },
        }}
      >
        {name}
      </Typography>
      {userImgUrl ? (
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            navigate('/main/account');
          }}
          sx={{
            width: { mobile: 32, tablet: 44 },
            height: { mobile: 32, tablet: 44 },
          }}
        >
          <Avatar
            src={userImgUrl}
            alt={`${name} avatar`}
            sx={{
              border: '1.8px solid #3E85F3',
              width: { mobile: 32, tablet: 44 },
              height: { mobile: 32, tablet: 44 },
            }}
          />
        </IconButton>
      ) : (
        <Avatar
          sx={{
            border: '1.8px solid #3E85F3',
            width: { mobile: 32, tablet: 44 },
            height: { mobile: 32, tablet: 44 },
          }}
          alt={`${name} avatar`}
        >
          {name[0]}
        </Avatar>
      )}
    </Box>
  );
};
