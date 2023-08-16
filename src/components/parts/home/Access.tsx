import { Box, Grid, Stack, Typography } from '@mui/material';

import GoogleMapIframe from '@/components/element/GoogleMapIframe';
import SectionLayout from '@/components/layout/SectionLayout';

export const Access = () => {
  return (
    <SectionLayout id="access" title="会場アクセス">
      <Grid container sx={{ textAlign: 'center', my: 3 }} alignItems={`top`}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ my: 2, px: { md: 5 }, textAlign: { md: 'end' } }}
        >
          <GoogleMapIframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.7955163781827!2d139.70771158016433!3d35.65418078198319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b21e2dbb555%3A0xed516d563adbcbd9!2zT1pzdHVkaW_muIvosLfmnbE!5e0!3m2!1sja!2sjp!4v1693749409119!5m2!1sja!2sjp"
            width="400px"
            height="400px"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            my: 2,
            px: { md: 5 },
            textAlign: { xs: 'center', md: 'start' },
          }}
        >
          <Stack spacing={3} sx={{ mx: 3 }}>
            <Box>
              <h3 style={{ marginTop: 0 }}>住所</h3>
              <Typography
                variant="body2"
                sx={{
                  maxWidth: '500px',
                  textAlign: { xs: 'center', md: 'justify' },
                  margin: { xs: 'auto', md: 'auto 0' },
                }}
              >
                渋谷区東1-25-5 フィルパーク渋谷東3F
              </Typography>
            </Box>
            <Box>
              <h3 style={{ marginTop: 0 }}>OZ studio渋谷東への行き方</h3>
              <Typography
                variant="body2"
                sx={{
                  maxWidth: '500px',
                  textAlign: { xs: 'center', md: 'justify' },
                  margin: { xs: 'auto', md: 'auto 0' },
                }}
              >
                渋谷駅C1、C2出口から7分、新南口6分の距離にあります。明治通りをまっすぐ南に進むと到着します。
                しぶや東歯科口腔外科クリニックの右隣の、1階が駐車場になっているガラス張りのビルです。
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </SectionLayout>
  );
};
