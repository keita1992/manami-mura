import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Grid, Typography, styled } from '@mui/material';
import Image from 'next/image';

import SectionLayout from '@/components/layout/SectionLayout';
import styles from '@/styles/home/Artist.module.css';

const ArtistName = styled(Typography)(({ theme }) => ({
  marginTop: 0,
  color: theme.palette.text.primary,
  fontSize: '1rem',
}));

export const Artist = () => {
  return (
    <SectionLayout id="artist" title="artist">
      <Grid
        container
        alignItems={'center'}
        justifyContent={'center'}
        spacing={1}
        sx={{
          width: { xs: '70%', md: '50%' },
          margin: 'auto',
        }}
      >
        {/* Manami */}
        <Grid item xs={6}>
          <Box>
            <Image src="/manami.png" width={150} height={150} alt="manamin" />
            <ArtistName variant="body1">
              茉那実 MANAMI
            </ArtistName>
            <ArtistName variant="body1">
              Photographer
            </ArtistName>
            <Button
              variant="outlined"
              href="https://www.instagram.com/manami.ph?ref=badge"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ marginTop: '10px' }}
            >
              <FontAwesomeIcon
                className={styles.instagram__icon}
                icon={faInstagram}
              />
              <span>manami</span>
            </Button>
          </Box>
        </Grid>
        {/* Mura */}
        <Grid item xs={6} sx={{ textAlign: 'left' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Image src="/mura.png" width={150} height={150} alt="mura" />
            <ArtistName variant="body1">
              むら mura
            </ArtistName>
            <ArtistName variant="body1">
              Flower artist
            </ArtistName>
            <Button
              variant="outlined"
              href="https://www.instagram.com/mura.flower?ref=badge"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ marginTop: '10px' }}
            >
              <FontAwesomeIcon
                className={styles.instagram__icon}
                icon={faInstagram}
              />
              <span>mura</span>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </SectionLayout >
  );
};
