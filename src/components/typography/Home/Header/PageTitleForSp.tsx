import { Theme, Typography } from '@mui/material';

export const PageTitleForSp = (props: { text: string }) => {
  return (
    <Typography
      variant="h3"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: { xs: 'flex', md: 'none' },
        flexGrow: 1,
        fontFamily: 'caffe-cappuccino, sans-serif',
        fontWeight: 400,
        color: (theme: Theme) => theme.palette.primary.main,
        textDecoration: 'none',
        textAlign: 'center',
      }}
    >
      {props.text}
    </Typography>
  );
};
