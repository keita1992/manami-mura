import { Grid } from '@mui/material';
import { useEffect } from 'react';

import PageLayout from '@/components/layout/PageLayout';
import { About } from '@/components/parts/home/About';
import { Access } from '@/components/parts/home/Access';
import { Artist } from '@/components/parts/home/Artist';
import { Concept } from '@/components/parts/home/Concept';
import { Firstview } from '@/components/parts/home/Firstview';
import { Header } from '@/components/parts/home/Header';
import { useAppDispatch } from '@/stores';
import { setIsMobileAction } from '@/stores/ui/actions';

export async function getStaticProps() {
  return { props: {} };
}

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const mobileUserAgent = /iphone|ipod|android/;
    const isMobile = mobileUserAgent.test(userAgent);
    dispatch(setIsMobileAction(isMobile));
  }, [dispatch]);

  return (
    <PageLayout>
      <Header />
      <Grid
        sx={{
          mt: {
            xs: '72px',
            md: '90px',
          },
        }}
      />
      <Firstview />
      <Concept />
      <Artist />
      <About />
      <Access />
    </PageLayout>
  );
};

export default Home;
