import { Grid } from '@mui/material';
import { useEffect } from 'react';

import PageLayout from '@/components/layout/PageLayout';
import { About } from '@/components/parts/home/About';
import { Access } from '@/components/parts/home/Access';
import { Artist } from '@/components/parts/home/Artist';
import { Firstview } from '@/components/parts/home/Firstview';
import { Header } from '@/components/parts/home/Header';
import { Message } from '@/components/parts/home/Message';
import { useAppDispatch, useAppSelector } from '@/stores';
import { getIsMobile } from '@/stores/ui';
import { setIsMobileAction } from '@/stores/ui/actions';

export async function getStaticProps() {
  return { props: {} };
}

const Home = () => {
  const dispatch = useAppDispatch();
  const isMobile = useAppSelector(getIsMobile);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const mobileUserAgent = /iphone|ipod|android/;
    const isMobile = mobileUserAgent.test(userAgent);
    dispatch(setIsMobileAction(isMobile));
  }, [dispatch]);

  return (
    <PageLayout>
      {!isMobile && <Header />}
      <Grid
        sx={{
          mt: {
            md: '80px',
          },
        }}
      />
      <Firstview />
      <Message />
      <Artist />
      <About />
      <Access />
    </PageLayout>
  );
};

export default Home;
