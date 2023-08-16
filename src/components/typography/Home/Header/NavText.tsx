import { Typography, styled } from '@mui/material';

const CustomContainer = styled(Typography)(({ theme }) => ({
  fontFamily: 'ta-oonishi, sans-serif',
  fontWeight: 400,
  fontStyle: 'normal',
  fontSize: '1.3rem',
  color: theme.palette.primary.main,
}));

export const NavText = (props: { text: string }) => {
  return <CustomContainer>{props.text}</CustomContainer>;
};
