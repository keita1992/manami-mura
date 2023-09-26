import { Typography, styled } from '@mui/material';

const CustomContainer = styled(Typography)(({ theme }) => ({
  fontFamily: 'caffe-cappuccino, sans-serif',
  fontWeight: 600,
  fontStyle: 'normal',
  fontSize: '2.0rem',
  color: theme.palette.primary.main,
  letterSpacing: '0.1em',
}));

export const NavText = (props: { text: string }) => {
  return <CustomContainer>{props.text}</CustomContainer>;
};
