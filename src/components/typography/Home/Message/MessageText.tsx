import { Theme, Typography } from '@mui/material';

export const MessageText = (props: { text: string }) => (
  <Typography
    variant="body1"
    sx={{
      fontWeight: 300,
      fontSize: '1rem',
      fontStyle: 'normal',
      letterSpacing: '0.1em',
      lineHeight: '1.8em',
      textAlign: 'center',
      color: (theme: Theme) => theme.palette.text.primary,
    }}
  >
    {props.text}
  </Typography>
);
