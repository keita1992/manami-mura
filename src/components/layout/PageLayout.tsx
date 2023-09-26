import { Grid } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

const PageLayout = (props: Props) => {
  return (
    <Grid sx={{ px: 0, overflow: 'hidden' }}>
      <main>{props.children}</main>
    </Grid>
  );
};

export default PageLayout;
