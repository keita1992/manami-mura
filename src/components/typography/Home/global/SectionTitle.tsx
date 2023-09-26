import { Typography, styled } from '@mui/material';

const CustomContainer = styled(Typography)(({ theme }) => ({
  fontFamily: 'caffe-cappuccino',
  fontWeight: 400,
  fontStyle: 'normal',
  color: theme.palette.primary.main,
}));

export const SectionTitle = (props: { text: string }) => {
  return (
    <CustomContainer variant="h2">
      {props.text}
    </CustomContainer>
  );
};
