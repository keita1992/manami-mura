import { Typography, styled } from '@mui/material';

const CustomContainer = styled(Typography)({
  fontFamily: 'ta-kobe',
  fontWeight: 400,
  fontStyle: 'normal',
});

const CustomText = styled('span')({
  background: 'linear-gradient(transparent 70%, #e7a9db 70%)',
});

export const SectionTitle = (props: { text: string }) => {
  return (
    <CustomContainer variant="h4">
      <CustomText>{props.text}</CustomText>
    </CustomContainer>
  );
};
