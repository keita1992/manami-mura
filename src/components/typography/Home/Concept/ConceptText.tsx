import { Typography } from '@mui/material';

export const ConceptText = (props: { text: string }) => (
  <Typography
    variant="body1"
    sx={{
      // fontFamily: 'ta-oonishi',
      fontWeight: 300,
      fontSize: '1rem',
      fontStyle: 'normal',
      letterSpacing: '0.1em',
      lineHeight: '2.5em',
      textAlign: 'left',
    }}
  >
    {props.text}
  </Typography>
);
