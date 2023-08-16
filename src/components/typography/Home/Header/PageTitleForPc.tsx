import { Typography, styled } from '@mui/material';

const CustomContainer = styled(Typography)(({ theme }) => ({
  fontFamily: 'caffe-cappuccino, sans-serif',
  fontWeight: 400,
  fontStyle: 'normal',
  color: theme.palette.primary.main,
  textDecoration: 'none',
  padding: '10px',
  cursor: 'pointer',
}));

export const PageTitleForPc = (props: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <CustomContainer
      variant="h3"
      noWrap
      onClick={props.onClick}
      sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}
    >
      {props.text}
    </CustomContainer>
  );
};
